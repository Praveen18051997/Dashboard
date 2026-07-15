import CalendarCell from "./CalendarCell";
import { useCalendar } from "../../context/CalendarContext";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CalendarGrid = ({
  currentDate,
  events,
}) => {
  const { selectedCategory } = useCalendar();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // First day of month
  const firstDay = new Date(year, month, 1);

  let firstWeekDay = firstDay.getDay();
  firstWeekDay =
    firstWeekDay === 0 ? 6 : firstWeekDay - 1;

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const daysInPrevMonth = new Date(
    year,
    month,
    0
  ).getDate();

  const cells = [];

  // Previous Month
  for (let i = firstWeekDay; i > 0; i--) {
    const date = new Date(
      year,
      month - 1,
      daysInPrevMonth - i + 1
    );

    cells.push({
      day: date.getDate(),
      date,
      current: false,
    });
  }

  // Current Month
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);

    cells.push({
      day: i,
      date,
      current: true,
    });
  }

  // Next Month
  let nextDay = 1;

  while (cells.length < 42) {
    const date = new Date(
      year,
      month + 1,
      nextDay
    );

    cells.push({
      day: nextDay,
      date,
      current: false,
    });

    nextDay++;
  }

  // Filter Events
  const visibleEvents =
    selectedCategory === "All"
      ? events
      : events.filter(
          (event) =>
            event.category === selectedCategory
        );

  return (
    <div className="flex-1 overflow-hidden">

      {/* Week Header */}

      <div className="grid grid-cols-7 border-b border-gray-200 bg-white">

        {weekDays.map((day) => (
          <div
            key={day}
            className="border-r border-gray-100 py-5 text-center text-xs font-bold uppercase tracking-wider text-gray-500 last:border-r-0"
          >
            {day}
          </div>
        ))}

      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7">

        {cells.map((cell, index) => {

          const formattedDate =
            cell.date.toISOString().split("T")[0];

          const dayEvents = visibleEvents.filter((event) => {

            if (event.endDate) {
              return (
                formattedDate >= event.date &&
                formattedDate <= event.endDate
              );
            }

            return event.date === formattedDate;

          });

          return (
            <CalendarCell
              key={index}
              day={cell.day}
              current={cell.current}
              currentDate={currentDate}
              date={cell.date}
              events={dayEvents}
            />
          );

        })}

      </div>

    </div>
  );
};

export default CalendarGrid;