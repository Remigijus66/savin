

export function generateSlots({
  date,
  availability,
  bookings,
  serviceDuration = 60,
}: any) {
  const dayOfWeek = date.getDay();

  const rules = availability.filter(
    (a: any) => a.weekday === dayOfWeek
  );

  const dayBookings = bookings.filter((b: any) =>
    new Date(b.start_time).toDateString() === date.toDateString()
  );

  const slots: string[] = [];

  rules.forEach((rule: any) => {
    let start = new Date(`${date.toDateString()} ${rule.start_time}`);
    const end = new Date(`${date.toDateString()} ${rule.end_time}`);

    while (start < end) {
      const slotEnd = new Date(start.getTime() + serviceDuration * 60000);

      const overlaps = dayBookings.some((b: any) => {
        const bs = new Date(b.start_time);
        const be = new Date(b.end_time);
        return start < be && slotEnd > bs;
      });

      if (!overlaps) {
        slots.push(start.toISOString());
      }

      start = new Date(start.getTime() + serviceDuration * 60000);
    }
  });

  return slots;
}