import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type TemplateDay = {
  weekday: number;
  start_time: string;
  end_time: string;
  slot_minutes: number;
};

export default function WeeklyTemplateModal({ onClose }: { onClose: () => void }) {

    const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const [days, setDays] =
  useState<TemplateDay[]>([]);

    useEffect(() => {
  loadTemplate();
}, []);

async function loadTemplate() {
  const { data } = await supabase
    .from("weekly_availability")
    .select("*")
    .order("weekday");

  const result: TemplateDay[] = [];

  for (let weekday = 0; weekday < 7; weekday++) {
    const existing = data?.find(
      (d) => d.weekday === weekday
    );

    result.push(
      existing || {
        weekday,
        start_time: "09:00",
        end_time: "17:00",
        slot_minutes: 60,
      }
    );
  }

  setDays(result);
}

    function updateDay(
  weekday: number,
  field: keyof TemplateDay,
  value: any
) {
  setDays((prev) =>
    prev.map((d) =>
      d.weekday === weekday
        ? { ...d, [field]: value }
        : d
    )
  );
}

 async function saveTemplate() {
  await supabase
    .from("weekly_availability")
    .delete()
    .gte("weekday", 0);

  await supabase
    .from("weekly_availability")
    .insert(days);

  alert("Template saved");
}   
 
return (
  <div className="modal-backdrop">
    <div className="modal">
      <h2>Weekly Template</h2>

      {days.map((day) => (
        <div
          key={day.weekday}
          style={{
            display: "grid",
            gridTemplateColumns:
              "120px 100px 100px 100px",
            gap: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <strong>
            {weekdays[day.weekday]}
          </strong>

          <input
            type="time"
            value={day.start_time}
            onChange={(e) =>
              updateDay(
                day.weekday,
                "start_time",
                e.target.value
              )
            }
          />

          <input
            type="time"
            value={day.end_time}
            onChange={(e) =>
              updateDay(
                day.weekday,
                "end_time",
                e.target.value
              )
            }
          />

          <input
            type="number"
            value={day.slot_minutes}
            onChange={(e) =>
              updateDay(
                day.weekday,
                "slot_minutes",
                Number(e.target.value)
              )
            }
          />
        </div>
      ))}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button onClick={saveTemplate}>
          Save
        </button>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  </div>
);

}
