import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import BookingCalendar from "../sections/BookingCalendar";
import WeeklyTemplateModal from "../components/WeeklyTemplateModal";

type AvailabilitySlot = {
  id: string;
  start_time: string;
  end_time: string;
};

type Booking = {
  id: string;
  availability_id: string;
  name: string;
  email: string;
  start_time: string;
  end_time: string;
};


export default function AdminAvailability() {

const [selectedDate, setSelectedDate] = useState(new Date());
const [availability, setAvailability] = useState<AvailabilitySlot[]>([]);
const [bookings, setBookings] = useState<Booking[]>([]);
const [time, setTime] = useState("09:00");
const [showTemplateEditor, setShowTemplateEditor] =
  useState(false);


async function loadData() {
  const { data: availabilityData } =
    await supabase
      .from("availability")
      .select("*")
      .order("start_time");

  const { data: bookingsData } =
    await supabase
      .from("bookings")
      .select("*");

  setAvailability(availabilityData || []);
  setBookings(bookingsData || []);
}


useEffect(() => {
  loadData();
}, []);


async function cancelBooking(bookingId: string) {
  const confirm = window.confirm(
    "Cancel this booking?"
  );

  if (!confirm) return;

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    alert(error.message);
    return;
  }

  await loadData();
}

const dayStats = useMemo(() => {
  const stats: Record<
    string,
    {
      available: number;
      booked: number;
    }
  > = {};

  availability.forEach((slot) => {
    const key = new Date(
      slot.start_time
    ).toDateString();

    if (!stats[key]) {
      stats[key] = {
        available: 0,
        booked: 0,
      };
    }

    stats[key].available++;
  });

  bookings.forEach((booking) => {
    const key = new Date(
      booking.start_time
    ).toDateString();

    if (!stats[key]) {
      stats[key] = {
        available: 0,
        booked: 0,
      };
    }

    stats[key].booked++;
  });

  return stats;
}, [availability, bookings]);


const selectedDaySlots = useMemo(() => {
    return availability.filter((slot) => {
        return (
            new Date(
                slot.start_time
            ).toDateString() ===
            selectedDate.toDateString()
        );
    });
}, [availability, selectedDate]);


const selectedDayBookings = useMemo(() => {
    return bookings.filter((booking) => {
        return (
            new Date(
                booking.start_time
            ).toDateString() ===
            selectedDate.toDateString()
        );
    });
}, [bookings, selectedDate]);


const dayTimeline = useMemo(() => {
  const slots = selectedDaySlots;
  const bookingsForDay = selectedDayBookings;

  const bookingMap = new Map(
    bookingsForDay.map((b) => [
      b.availability_id,
      b,
    ])
  );

  return slots
    .map((slot) => {
      const booking = bookingMap.get(slot.id);

      return {
        id: slot.id,
        time: slot.start_time,
        type: booking ? "booked" : "available",
        slot,
        booking,
      };
    })
    .sort(
      (a, b) =>
        new Date(a.time).getTime() -
        new Date(b.time).getTime()
    );
}, [selectedDaySlots, selectedDayBookings]);


async function addSlot() {
  const dateString =
    selectedDate.toISOString().split("T")[0];

  const start = new Date(
    `${dateString}T${time}`
  );

  const end = new Date(start);
  end.setHours(end.getHours() + 1);

  const { error } = await supabase
    .from("availability")
    .insert({
      start_time: start.toISOString(),
      end_time: end.toISOString(),
    });

  if (error) {
    alert(error.message);
    return;
  }

  await loadData();
}

async function deleteSlot(id: string) {
  const booked = bookings.some(
    (b) => b.availability_id === id
  );

  if (booked) {
    alert(
      "Cannot delete slot with existing booking"
    );
    return;
  }

  await supabase
    .from("availability")
    .delete()
    .eq("id", id);

  await loadData();
}

function getMonday(date: Date) {
  const d = new Date(date);

  const day = d.getDay();

  const diff =
    day === 0
      ? -6
      : 1 - day;

  d.setDate(d.getDate() + diff);

  return d;
}

async function applyTemplateToWeek(
  selectedDate: Date
) {
  const { data: template } =
    await supabase
      .from("weekly_availability")
      .select("*");

  if (!template?.length) {
    alert("No weekly template found");
    return;
  }

  const monday =
    getMonday(selectedDate);

  const slotsToInsert = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(
      monday
    );

    currentDay.setDate(
      monday.getDate() + i
    );

    const weekday =
      currentDay.getDay();

    const rules = template.filter(
      (t) => t.weekday === weekday
    );

    for (const rule of rules) {
      const [startHour, startMinute] =
        rule.start_time
          .split(":")
          .map(Number);

      const [endHour, endMinute] =
        rule.end_time
          .split(":")
          .map(Number);

      let slotStart = new Date(
        currentDay
      );

      slotStart.setHours(
        startHour,
        startMinute,
        0,
        0
      );

      const end = new Date(
        currentDay
      );

      end.setHours(
        endHour,
        endMinute,
        0,
        0
      );

      while (slotStart < end) {
        const slotEnd =
          new Date(slotStart);

        slotEnd.setMinutes(
          slotEnd.getMinutes() +
            rule.slot_minutes
        );

        slotsToInsert.push({
          start_time:
            slotStart.toISOString(),
          end_time:
            slotEnd.toISOString(),
        });

        slotStart = slotEnd;
      }
    }
  }

  const { error } =
    await supabase
      .from("availability")
      .insert(slotsToInsert);

  if (error) {
    alert(error.message);
    return;
  }

  await loadData();

  alert(
    `${slotsToInsert.length} slots created`
  );
}

async function syncDayToGoogle() {
  const results = [];
  
  console.log("selectedDayBookings:", selectedDayBookings);
  for (const booking of selectedDayBookings) {
   
    const res = await fetch(
      "https://vkqxfytikugpdbvwincy.supabase.co/functions/v1/sync-google-calendar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: `Booking - ${booking.name}`,
          start_time: booking.start_time,
  end_time: booking.end_time,
        }),
      }
    );

    const data = await res.json();
    results.push(data);
  }

  console.log(results);

  alert(
    `${selectedDayBookings.length} bookings synced to Google Calendar`
  );
}

async function testCon() {
  await fetch(
  "https://vkqxfytikugpdbvwincy.supabase.co/functions/v1/sync-google-calendar",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      summary: "Booking - John",
         "start_time": "2026-06-15T17:00:00+03:00",
  "end_time": "2026-06-15T18:00:00+03:00",
    }),
  }
);
}


  return (
  <div style={{ padding: "60px 40px 40px 40px" }}>
    <h1>Manage Availability</h1>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  }}
>
  <h3>
    Week of {selectedDate.toLocaleDateString()}
  </h3>

  <button
    onClick={() => testCon()}
    style={{
      padding: "8px 12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      cursor: "pointer",
    }}
  >
  Test Connection to google calendar 

  </button>
  <button
  onClick={syncDayToGoogle}
  style={{
    marginTop: "10px",
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Sync Google Calendar (this day)
</button>
</div>

    <BookingCalendar
      selectedDate={selectedDate}
      onSelectDate={setSelectedDate}
      dayStats={dayStats}
    />
<div style ={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "30px"}}>

    <h2 style={{ marginTop: "30px" }}>
      {selectedDate.toLocaleDateString()}
    </h2> 
      <button
     onClick={() => applyTemplateToWeek(selectedDate)}
    style={{
        padding: "8px 12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        cursor: "pointer",
    }}
    >
     Apply Template To This Week
  </button>
      </div>

    <div style={{ marginBottom: "20px" }}>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button
        onClick={addSlot}
        style={{ marginLeft: "10px" }}
      >
        Add Slot
      </button>

      <button
  onClick={() => setShowTemplateEditor(true)}
>
  Edit Weekly Template
</button>

    </div>
    {showTemplateEditor && (
  <WeeklyTemplateModal
    onClose={() =>
      setShowTemplateEditor(false)
    }
  />
)}

   <h3 style={{ marginTop: "30px" }}>
  Day schedule
</h3>

{dayTimeline.length === 0 && (
  <p>No slots available.</p>
)}

{dayTimeline.map((item) => {
  const timeLabel = new Date(
    item.time
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "600px",
        marginBottom: "8px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        background:
          item.type === "booked"
            ? "#e3f2fd"
            : "white",
      }}
    >
      {/* LEFT: time + info */}
      <div>
        <strong>{timeLabel}</strong>

        <div style={{ marginTop: "4px" }}>
          {item.type === "booked" ? (
            <>
              <div>
                👤 {item?.booking?.name ?? "(unknown)"}
              </div>
              <div>
                📧 {item.booking?.email ?? "(unknown)"}
              </div>
            </>
          ) : (
            <span style={{ color: "#888" }}>
              Available
            </span>
          )}
        </div>
      </div>

      {/* RIGHT: actions */}
      <div>
        {item.type === "booked" ? (
          <button
            onClick={() =>
              item.booking && cancelBooking(item.booking.id)
            }
            style={{
              background: "#ff4d4f",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={() =>
              deleteSlot(item.id)
            }
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
})}
  </div>
);
}