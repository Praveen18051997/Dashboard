import CalendarEvent from "./CalendarEvent";

const CalendarCell = ({
  day,
  current,
  date,
  events,
}) => {
  const today = new Date();

  const isToday =
    date.toDateString() === today.toDateString();

  // Show only first 3 events
  const visibleEvents = events.slice(0, 3);

  const remaining = events.length - 3;

  return (
    <div
      className={`relative min-h-[165px] border-r border-b transition-all duration-200 ${
        current
          ? "bg-white hover:bg-gray-50"
          : "bg-gray-50"
      }`}
    >
      {/* Day Number */}

      <div className="flex items-center justify-between px-3 pt-3">

        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${
            isToday
              ? "bg-[#21943A] text-white shadow"
              : current
              ? "text-gray-800"
              : "text-gray-400"
          }`}
        >
          {day}
        </span>

      </div>

      {/* Events */}

      <div className="mt-3 space-y-2 px-2 pb-2">

        {visibleEvents.map((event) => (

          <CalendarEvent
            key={event.id}
            event={event}
          />

        ))}

        {remaining > 0 && (

          <button className="w-full rounded-lg bg-gray-100 py-1 text-xs font-medium text-gray-500 transition hover:bg-gray-200">

            +{remaining} More

          </button>

        )}

      </div>

      {/* Previous / Next Month Background */}

      {!current && (

        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#d1d5db 0,#d1d5db 1px,transparent 1px,transparent 10px)",
          }}
        />

      )}

    </div>
  );
};

export default CalendarCell;