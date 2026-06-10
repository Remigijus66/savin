
import { useMemo } from "react";

type Props = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  slotsByDate?: Record<string, any[]>;
   dayStats?: Record<
    string,
    {
      available: number;
      booked: number;
    }
  >;
};

const weekdays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export default function BookingCalendar({
  selectedDate,
  onSelectDate,
  slotsByDate,
    dayStats,
}: Props) {
 const calendarCells = useMemo(() => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const cells: (Date | null)[] = [];

  // JS:
  // Sunday=0 Monday=1 ... Saturday=6
  // Convert so Monday=0 ... Sunday=6

  const firstWeekday =
    (firstDay.getDay() + 6) % 7;

  for (let i = 0; i < firstWeekday; i++) {
    cells.push(null);
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    cells.push(new Date(year, month, day));
  }

  return cells;
}, [selectedDate]);

function previousMonth() {
  onSelectDate(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    )
  );
}

function nextMonth() {
  onSelectDate(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    )
  );
}


  return (
    <div>
      <span style={{padding: '10px'}} onClick={previousMonth}>-</span><span>{selectedDate.getFullYear()+'-'+selectedDate.getMonth()}</span ><span style={{padding: '10px'}} onClick={nextMonth}>+</span>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
  }}
>
  {weekdays.map((day) => (
    <div
      key={day}
      style={{
        textAlign: "center",
        fontWeight: 600,
        padding: "8px",
      }}
    >
      {day}
    </div>
  ))}

  {calendarCells.map((day, index) => {
    if (!day) {
      return (
        <div
          key={`empty-${index}`}
        />
      );
    }

    const isSelected =
      day.toDateString() ===
      selectedDate.toDateString();

    const key = day.toDateString();

    const slots =
      slotsByDate?.[key] || [];

    const available =
      dayStats?.[key]?.available ??
      slots.length;

    const booked =
      dayStats?.[key]?.booked ?? 0;

    const hasSlots =
      available > 0 || booked > 0;

    return (
      <button
        key={day.toISOString()}
        onClick={() =>
          onSelectDate(day)
        }
        style={{
          minHeight: "70px",
          padding: "8px",
          border: isSelected
            ? "2px solid #007bff"
            : "1px solid #ccc",
          borderRadius: "8px",
          cursor: "pointer",
          position: "relative",
          backgroundColor:
            booked > 0
              ? "#e3f2fd"
              : available > 0
              ? "#e8f5e9"
              : "white",
        }}
      >
        <div
          style={{
            fontWeight: 600,
          }}
        >
          {day.getDate()}
        </div>

        {hasSlots && (
          <div
            style={{
              marginTop: "6px",
              fontSize: "11px",
            }}
          >
            {available > 0 && (
              <div>
                🟢 {available}
              </div>
            )}

            {booked > 0 && (
              <div>
                🔵 {booked}
              </div>
            )}
          </div>
        )}
      </button>
    );
  })}
</div>
</div>
  );
}