import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import BookingCalendar from "../sections/BookingCalendar";
import WeeklyTemplateModal from "../components/WeeklyTemplateModal";
import ScheduleSessionModal from "../components/ScheduleSessionModal";
import { useNavigate } from "react-router-dom";

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
  google_event_id: string | null;
};

type Sessions = {
  id: string;
  client_id: string;
  availability_id: string;
  start_time: string;
  end_time: string;
  google_event_id: string | null;
   client: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
};


export default function AdminAvailability() {

  const nav = useNavigate();

const [selectedDate, setSelectedDate] = useState(new Date());
const [availability, setAvailability] = useState<AvailabilitySlot[]>([]);
const [bookings, setBookings] = useState<Booking[]>([]);
const [sessions, setSessions] = useState<Sessions[]>([]);
const [time, setTime] = useState("09:00");
const [showTemplateEditor, setShowTemplateEditor] =
  useState(false);
  const [showSessionModal, setShowSessionModal] = useState(false);


async function loadData() {
  const { data: availabilityData } =
    await supabase
      .from("availability")
      .select("*")
      .order("start_time");

  // const { data: bookingsData } =
  //   await supabase
  //     .from("bookings")
  //     .select("*");

const { data: sessionsData } = await supabase
  .from("sessions")
  .select(`
    *,
    client:clients (
      id,
      first_name,
      last_name,
      email
    )
  `);



  setAvailability(availabilityData || []);
  // setBookings(bookingsData || []);
  setSessions(sessionsData || []);
  // console.log("bookingsData", bookingsData);
  console.log("sessionsData", sessionsData);
}


useEffect(() => {
  loadData();
}, []);


// async function cancelBooking(bookingId: string) {
//   const confirm = window.confirm(
//     "Cancel this booking?"
//   );

//   if (!confirm) return;

//   const { error } = await supabase
//     .from("bookings")
//     .delete()
//     .eq("id", bookingId);

//   if (error) {
//     alert(error.message);
//     return;
//   }

//   await loadData();
// }

async function cancelSession(sessionId: string) {
  const confirm = window.confirm(
    "Cancel this session?"
  );

  if (!confirm) return;

  const { error } = await supabase
    .from("sessions")
    .delete()
    .eq("id", sessionId);

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
      // booked: number;
      sessions: number;
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
        sessions: 0,
      };
    }

    stats[key].available++;
  });

  // bookings.forEach((booking) => {
  //   const key = new Date(
  //     booking.start_time
  //   ).toDateString();

  //   if (!stats[key]) {
  //     stats[key] = {
  //       available: 0,
  //       booked: 0,
  //       sessions: 0,
  //     };
  //   }

  //   stats[key].booked++;
  // });

  sessions.forEach((session) => {
    const key = new Date(
      session.start_time
    ).toDateString();

    if (!stats[key]) {
      stats[key] = {
        available: 0,
        booked: 0,
        sessions: 0,
      };
    }

    stats[key].sessions++;
  });

  return stats;

// }, [availability, bookings, sessions]);
}, [availability, sessions]);



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


// const selectedDayBookings = useMemo(() => {
//     return bookings.filter((booking) => {
//         return (
//             new Date(
//                 booking.start_time
//             ).toDateString() ===
//             selectedDate.toDateString()
//         );
//     });
// }, [bookings, selectedDate]);

const selectedDaySessions = useMemo(() => {
    return sessions.filter((session) => {
        return (
            new Date(
                session.start_time
            ).toDateString() ===
            selectedDate.toDateString()
        );
    });
}, [sessions, selectedDate]);


const dayTimeline = useMemo(() => {
  // const bookingMap = new Map(
  //   selectedDayBookings.map((b) => [
  //     b.availability_id,
  //     b,
  //   ])
  // );

  const sessionMap = new Map(
    selectedDaySessions.map((s) => [
      s.availability_id,
      s,
    ])
  );

  return selectedDaySlots
    .map((slot) => {

      const session =
        sessionMap.get(slot.id);

      // const booking =
      //   bookingMap.get(slot.id);

      return {
        id: slot.id,
        time: slot.start_time,

        type: session
          ? "session"
          // : booking
          // ? "booked"
          : "available",

        slot,
        // booking,
        session,
      };
    })
    .sort(
      (a, b) =>
        new Date(a.time).getTime() -
        new Date(b.time).getTime()
    );
}, [
  selectedDaySlots,
  // selectedDayBookings,
  selectedDaySessions,
]);


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
  // const booked = bookings.some(
  //   (b) => b.availability_id === id
  // );
  const sessionExists = sessions.some(
    (s) => s.availability_id === id
  );

  if (sessionExists) {
    alert(
      "Cannot delete slot with existing session"
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

    console.log(  'booking.google_event_id',   booking.google_event_id)
     if (booking.google_event_id) {
    console.log(
      "Already synced:",
      booking.google_event_id
    );
       results.push({
        skipped: true,
        booking: booking.id,
      });
    continue;
  }
    
   
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
    console.log("Response:", res);

    const data = await res.json();
console.log('data', data)
       if (data.googleEventId) {

      await supabase
        .from("bookings")
        .update({
          google_event_id: data.googleEventId,
        })
        .eq(
          "id",
          booking.id
        );
        setBookings(prev =>
  prev.map(b =>
    b.id === booking.id
      ? {
          ...b,
          google_event_id: data.googleEventId,
        }
      : b
  )
);

    }

    results.push(data);
  }

  console.log("Results:", results);

 
    alert(
    `${results.filter((r) => !r.skipped).length} bookings processed`
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
     <button 
     style={{
      marginTop: "20px",
      padding: "8px 12px"}}

     onClick={() => setShowSessionModal(true)}>
       Registruoti nauja sesiją
     </button> 
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
{ showSessionModal && (
  <ScheduleSessionModal selectedDate={selectedDate}  onClose={()=>{ setShowSessionModal(false)}} onSaved={()=>{console.log('onSaved', selectedDate)}} />
)}

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

  const openSessionNotes = (item: any) => {
  nav( `/clients/${item.session.client.id}/notes?sessionId=${item.session.id}`);
  // nav(`/admin`);
};

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
  // item.type === "session"
  //   ? "#e3f2fd"
  //   : item.type === "booked"
  //   ? "#e8f5e9"
  //   : "white",
  item.type === "session"
    ? "#e3f2fd"
    : "white",
      }}
    >
      {/* LEFT: time + info */}
      <div>
        <strong>{timeLabel}</strong>

        <div style={{ marginTop: "4px" }}>
          {item.type === "session" ? (

  <>
    <div>
      {item.session?.client && (
        <div>
        <div>
          👤 {item.session.client.first_name} {item.session.client.last_name}
          </div>
          <div>
          📧 {item.session.client.email}
            </div>  
        </div>
   


      )}
    </div>
  </>
) :(
            <span style={{ color: "#888" }}>
              Available
            </span>
          )}
        </div>
      </div>

      {/* RIGHT: actions */}
      <div>
        {item.type === "session" ? (
    <>
      {item.session?.client && (
        <button
          onClick={() =>
            openSessionNotes(item)
          }
          style={{
            background: "#1677ff",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          📝 Notes
        </button>
      )}

      <button
        onClick={() =>
          item.session && cancelSession(item.session.id)
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
    </>
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