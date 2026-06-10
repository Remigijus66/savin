import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import BookingCalendar from "../sections/BookingCalendar";

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

  return (
  <div style={{ padding: "20px" }}>
    <h1>Manage Availability</h1>

    <BookingCalendar
      selectedDate={selectedDate}
      onSelectDate={setSelectedDate}
      dayStats={dayStats}
    />

    <h2 style={{ marginTop: "30px" }}>
      {selectedDate.toLocaleDateString()}
    </h2>

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
    </div>

    <h3>Available Slots</h3>

    {selectedDaySlots.length === 0 && (
      <p>No slots available.</p>
    )}

    {selectedDaySlots.map((slot) => {
      const isBooked = bookings.some(
        (b) => b.availability_id === slot.id
      );

      return (
        <div
          key={slot.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "500px",
            marginBottom: "8px",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        >
          <span>
            {new Date(
              slot.start_time
            ).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>

          <div>
            {isBooked && (
              <span
                style={{
                  color: "green",
                  marginRight: "10px",
                }}
              >
                Booked
              </span>
            )}

            <button
              onClick={() => deleteSlot(slot.id)}
              disabled={isBooked}
            >
              Delete
            </button>
          </div>
        </div>
      );
    })}

    <h3 style={{ marginTop: "30px" }}>
      Bookings
    </h3>

    {selectedDayBookings.length === 0 && (
      <p>No bookings.</p>
    )}

    {selectedDayBookings.map((booking) => (
      <div
        key={booking.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "6px",
          padding: "10px",
          marginBottom: "10px",
          maxWidth: "600px",
        }}
      >
        <div>
          <strong>Time:</strong>{" "}
          {new Date(
            booking.start_time
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>

        <div>
          <strong>Name:</strong>{" "}
          {booking.name}
        </div>

        <div>
          <strong>Email:</strong>{" "}
          {booking.email}
        </div>
      </div>
    ))}
  </div>
);
}