import {
  FiClock,
  FiTag,
} from "react-icons/fi";

const colorClasses = {
  cyan: {
    bg: "bg-cyan-100",
    border: "border-cyan-500",
    text: "text-cyan-700",
  },
  green: {
    bg: "bg-green-100",
    border: "border-green-500",
    text: "text-green-700",
  },
  yellow: {
    bg: "bg-yellow-100",
    border: "border-yellow-500",
    text: "text-yellow-700",
  },
  purple: {
    bg: "bg-purple-100",
    border: "border-purple-500",
    text: "text-purple-700",
  },
  red: {
    bg: "bg-red-100",
    border: "border-red-500",
    text: "text-red-700",
  },
};

const CalendarEvent = ({ event }) => {
  const style =
    colorClasses[event.color] ||
    colorClasses.cyan;

  return (
    <div
      className={`group cursor-pointer rounded-xl border-l-4 ${style.border} ${style.bg} p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      {/* Title */}

      <h4
        className={`truncate text-sm font-semibold ${style.text}`}
      >
        {event.title}
      </h4>

      {/* Time */}

      <div className="mt-2 flex items-center gap-2 text-xs text-gray-600">

        <FiClock size={12} />

        <span>
          {event.start} - {event.end}
        </span>

      </div>

      {/* Category */}

      <div className="mt-2 flex items-center gap-2">

        <FiTag
          size={12}
          className="text-gray-500"
        />

        <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium shadow-sm">
          {event.category}
        </span>

      </div>

      {/* Extra */}

      {event.extra && (

        <div className="mt-2">

          <span className="rounded-full bg-[#21943A] px-2 py-1 text-[10px] font-semibold text-white">
            {event.extra}
          </span>

        </div>

      )}

    </div>
  );
};

export default CalendarEvent;