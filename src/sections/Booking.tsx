import { useEffect, useMemo, useState } from "react";
import BookingCalendar from "./BookingCalendar";
import { supabase } from "../lib/supabase";

export default function Booking() {
  const [date, setDate] = useState(new Date());

  const [availability, setAvailability] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data: availabilityData, error: availabilityError } =
      await supabase
        .from("availability")
        .select("*")
        .order("start_time");

    if (availabilityError) {
      console.error(availabilityError);
      return;
    }

    const { data: bookingsData, error: bookingsError } =
      await supabase
        .from("bookings")
        .select("*");

    if (bookingsError) {
      console.error(bookingsError);
      return;
    }

    setAvailability(availabilityData || []);
    setBookings(bookingsData || []);
  }

  async function bookSlot(slot: any) {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    const { error } = await supabase
      .from("bookings")
      .insert({
        name,
        email,
        availability_id: slot.id,
        start_time: slot.start_time,
        end_time: slot.end_time,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Booking successful");

    setName("");
    setEmail("");

    await loadData();
  }

  const bookedSlotIds = useMemo(
    () => new Set(bookings.map((b) => b.availability_id)),
    [bookings]
  );

  const slotsByDate = useMemo(() => {
    const map: Record<string, any[]> = {};

    availability.forEach((slot) => {
      if (bookedSlotIds.has(slot.id)) {
        return;
      }

      const key = new Date(
        slot.start_time
      ).toDateString();

      if (!map[key]) {
        map[key] = [];
      }

      map[key].push(slot);
    });

    return map;
  }, [availability, bookedSlotIds]);

  const filteredSlots = useMemo(() => {
    return availability.filter((slot) => {
      const slotDate = new Date(
        slot.start_time
      ).toDateString();

      return (
        slotDate === date.toDateString() &&
        !bookedSlotIds.has(slot.id)
      );
    });
  }, [availability, bookedSlotIds, date]);

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
   
      <h2>Pick a time</h2>
     

      <BookingCalendar
        selectedDate={date}
        onSelectDate={setDate}
        slotsByDate={slotsByDate}
      />

      <div
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <h3>Your Details</h3>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            display: "block",
            margin: "10px auto",
            padding: "8px",
            width: "250px",
          }}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            display: "block",
            margin: "10px auto",
            padding: "8px",
            width: "250px",
          }}
        />
      </div>

      <h2>Available Times</h2>

      {filteredSlots.length === 0 && (
        <p>No available slots.</p>
      )}

      {filteredSlots.map((slot) => (
        <button
          key={slot.id}
          onClick={() => bookSlot(slot)}
          style={{
            margin: "5px",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {new Date(
            slot.start_time
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </button>
      ))}
    </div>
  );
}