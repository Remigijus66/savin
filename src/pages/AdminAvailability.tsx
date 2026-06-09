import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminAvailability() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");

  async function addSlot() {
    const start = time;

    const [h, m] = time.split(":").map(Number);
    const endDate = new Date();
    endDate.setHours(h + 1, m);

    const end = endDate.toTimeString().slice(0, 5);

    await supabase.from("availability").insert({
      date,
      start_time: start,
      end_time: end,
    });

    alert("Slot added");
  }

  return (
    <div>
      <h1>Manage Availability</h1>

      <input type="date" onChange={(e) => setDate(e.target.value)} />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={addSlot}>Add slot</button>
    </div>
  );
}