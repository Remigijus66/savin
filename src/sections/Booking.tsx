import { useEffect, useState } from "react";
import { generateSlots } from "../utils/GenerateSlots";
import BookingCalendar from "./BookingCalendar";
import { supabase } from "../utils/Mock";
const { data } = await supabase.from("bookings").select();

export default function Booking() {
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState<string[]>([]);
const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, [date]);

  async function loadData() {
    const { data: availability } = await supabase.from("availability").select();
    const { data: bookingsData } = await supabase.from("bookings").select();

    setBookings(bookingsData || []);

    const generated = generateSlots({
      date,
      availability: availability || [],
      bookings: bookingsData || [],
    });

    setSlots(generated);
  }

  async function bookSlot(slot: string) {
  await supabase.from("bookings").insert({
    name: "John",
    email: "john@test.com",
    start_time: slot,
    end_time: new Date(new Date(slot).getTime() + 3600000).toISOString(),
  });

  loadData();
}

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Pick a time</h2>
<BookingCalendar
  selectedDate={date}
  onSelectDate={setDate}
/>
<h2>Available times</h2>

{slots.map((s) => (
  <button
    key={s}
    onClick={() => bookSlot(s)}
  >
    {new Date(s).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}
  </button>
))}
      {/* {slots.map((s) => (
        <button key={s} onClick={() => bookSlot(s)}>
          {new Date(s).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}
        </button>
      ))} */}
    </div>
  );
}