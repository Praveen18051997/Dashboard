import { useCalendar } from "../../context/CalendarContext";

const DayCalendar = ({
  currentDate,
  events,
}) => {
  const { selectedCategory } = useCalendar();
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

  const formattedDate =
    currentDate.toISOString().split("T")[0];

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
    <div className="overflow-auto">

      {/* Header */}

      <div className="border-b bg-white py-6 text-center">

        <p className="text-sm uppercase tracking-wide text-gray-400">
          {currentDate.toLocaleDateString("en-US", {
            weekday: "long",
          })}
        </p>

        <h2 className="mt-2 text-4xl font-bold text-gray-800">
          {currentDate.getDate()}
        </h2>

      </div>

      {/* Timeline */}

      <div className="grid grid-cols-[80px_1fr]">

        {/* Time */}

        <div>

          {hours.map((hour) => (

            <div
              key={hour}
              className="h-20 border-b pr-4 text-right text-xs text-gray-400"
            >
              {hour}
            </div>

          ))}

        </div>

        {/* Schedule */}

        <div className="relative border-l">

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
                className={`absolute left-3 right-3 rounded-xl p-3 shadow-md transition hover:shadow-lg ${colors[event.color]}`}
                style={{
                  top,
                  height: Math.max(height, 50),
                }}
              >

                <h3 className="font-semibold">
                  {event.title}
                </h3>

                <p className="mt-1 text-xs">
                  {event.start} - {event.end}
                </p>

                <span className="mt-2 inline-block rounded-full bg-white px-2 py-1 text-[10px] font-medium">
                  {event.category}
                </span>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
};

export default DayCalendar;