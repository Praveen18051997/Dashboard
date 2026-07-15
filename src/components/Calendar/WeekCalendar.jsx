import { useCalendar } from "../../context/CalendarContext";

const WeekCalendar = ({
  currentDate,
  events,
}) => {
  const { selectedCategory } = useCalendar();
  const weekDays = [
    "MO",
    "TU",
    "WE",
    "TH",
    "FR",
    "SA",
    "SU",
  ];

  const start = new Date(currentDate);

  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  start.setDate(start.getDate() + diff);

  const week = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    week.push(d);
  }

  const hours = [];

  for (let i = 0; i < 24; i++) {
    hours.push(`${String(i).padStart(2, "0")}:00`);
  }

  const colors = {
    cyan: "bg-cyan-100 border-l-4 border-cyan-500",
    yellow: "bg-yellow-100 border-l-4 border-yellow-500",
    green: "bg-green-100 border-l-4 border-green-500",
    purple: "bg-purple-100 border-l-4 border-purple-500",
    red: "bg-red-100 border-l-4 border-red-500",
  };

  const visibleEvents =
    selectedCategory === "All"
      ? events
      : events.filter(
          (event) =>
            event.category === selectedCategory
        );

  return (
    <div className="overflow-auto">

      {/* Header */}

      <div className="grid grid-cols-8 border-b bg-white">

        <div></div>

        {week.map((d, index) => (

          <div
            key={index}
            className="border-l py-4 text-center"
          >

            <p className="text-xs font-semibold uppercase text-gray-400">
              {weekDays[
                d.getDay() === 0
                  ? 6
                  : d.getDay() - 1
              ]}
            </p>

            <div
              className={`mx-auto mt-2 flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold ${
                d.toDateString() ===
                new Date().toDateString()
                  ? "bg-[#21943A] text-white"
                  : "text-gray-700"
              }`}
            >
              {d.getDate()}
            </div>

          </div>

        ))}

      </div>

      {/* Timeline */}

      <div className="grid grid-cols-8">

        {/* Time */}

        <div>

          {hours.map((hour) => (

            <div
              key={hour}
              className="h-20 border-b pr-3 text-right text-xs text-gray-400"
            >
              {hour}
            </div>

          ))}

        </div>

        {/* Days */}

        {week.map((date, index) => {

          const formattedDate =
            date.toISOString().split("T")[0];

          const dayEvents =
            visibleEvents.filter((event) => {

              if (event.endDate) {
                return (
                  formattedDate >= event.date &&
                  formattedDate <= event.endDate
                );
              }

              return event.date === formattedDate;

            });

          return (

            <div
              key={index}
              className="relative border-l"
            >

              {hours.map((hour) => (

                <div
                  key={hour}
                  className="h-20 border-b"
                />

              ))}

              {dayEvents.map((event) => {

                const startHour = Number(
                  event.start.split(":")[0]
                );

                const startMinute = Number(
                  event.start.split(":")[1]
                );

                const endHour = Number(
                  event.end.split(":")[0]
                );

                const endMinute = Number(
                  event.end.split(":")[1]
                );

                const top =
                  startHour * 80 +
                  (startMinute / 60) * 80;

                const height =
                  ((endHour * 60 +
                    endMinute -
                    (startHour * 60 + startMinute)) /
                    60) *
                  80;

                return (

                  <div
                    key={event.id}
                    className={`absolute left-1 right-1 rounded-lg p-2 text-xs shadow ${colors[event.color]}`}
                    style={{
                      top,
                      height: Math.max(height, 40),
                    }}
                  >

                    <p className="font-semibold">
                      {event.title}
                    </p>

                    <p className="mt-1 text-[10px]">
                      {event.start} - {event.end}
                    </p>

                  </div>

                );

              })}

            </div>

          );

        })}

      </div>

    </div>
  );
};

export default WeekCalendar;