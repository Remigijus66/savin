import { useEffect, useState } from "react";
import { generateSlots } from "../utils/GenerateSlots";
import BookingCalendar from "./BookingCalendar";
import { supabase } from "../lib/supabase";

export default function Booking() {
  const [date, setDate] = useState(new Date());
  const [availableDates, setAvailableDates] = useState<Set<string>>(new Set());
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

  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0);

  const available = new Set<string>();

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const currentDate = new Date(year, month, day);

    const daySlots = generateSlots({
      date: currentDate,
      availability: availability || [],
      bookings: bookingsData || [],
    });

    if (daySlots.length > 0) {
      available.add(currentDate.toDateString());
    }
  }

  setAvailableDates(available);

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
  availableDates={availableDates}
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