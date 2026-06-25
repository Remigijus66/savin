
import { useMemo} from "react";
import Holidays from "date-holidays";

type Props = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  slotsByDate?: Record<string, any[]>;
   dayStats?: Record<
    string,
    {
      available: number;
      // booked: number;
      sessions: number;
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

const hd = new Holidays("LT");


const isHoliday = (date: Date) =>
  hd.isHoliday(date) !== false || date.getDay() === 0;

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
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  }}
>
  <button
    onClick={previousMonth}
    style={{
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "24px",
      fontWeight: 600,
      padding: "8px 12px",
    }}
  >
    ←
  </button>

  <h2
    style={{
      margin: 0,
      minWidth: "220px",
      textAlign: "center",
    }}
  >
    {selectedDate.toLocaleString("lt-LT", {
      month: "long",
      year: "numeric",
    })}
  </h2>

  <button
    onClick={nextMonth}
    style={{
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "24px",
      fontWeight: 600,
      padding: "8px 12px",
    }}
  >
    →
  </button>
</div>
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

    // const booked =
    //   dayStats?.[key]?.booked ?? 0;
   
      const sessions =
      dayStats?.[key]?.sessions ?? 0;

    // const hasSlots =
    //   available > 0 || booked > 0;

    const hasSlots =
      available > 0 || sessions > 0;

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
          // backgroundColor:
          //   booked > 0
          //     ? "#e3f2fd"
          //     : available > 0
          //     ? "#e8f5e9"
          //     : "white",
          backgroundColor:
          isHoliday(day)
              ? "#fff3e0"
              :
            sessions > 0
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

            {/* {booked > 0 && (
              <div>
                🔵 {booked}
              </div>
            )} */}
            {sessions > 0 && (
              <div>
                🔵 {sessions}
              </div>
            )}

          {/* { available >0 &&(
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectDate(day);
              }}
              style={{
                // background: "transparent",
                // border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
             Registruoti
            </button>
          )} */}
          </div>
        )}
      </button>
    );
  })}
</div>

</div>
  );

}