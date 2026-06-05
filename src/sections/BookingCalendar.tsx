import { useMemo } from "react";

type Props = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
};

export default function BookingCalendar({
  selectedDate,
  onSelectDate,
}: Props) {
  const days = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const result: Date[] = [];

    for (let d = 1; d <= lastDay.getDate(); d++) {
      result.push(new Date(year, month, d));
    }

    return result;
  }, [selectedDate]);

  return (
    <div>
      <h3>
        {selectedDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
        }}
      >
        {days.map((day) => {
          const isSelected =
            day.toDateString() === selectedDate.toDateString();

          return (
            <button
              key={day.toISOString()}
              onClick={() => onSelectDate(day)}
              style={{
                padding: "10px",
                border: isSelected
                  ? "2px solid #007bff"
                  : "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}