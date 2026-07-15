import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const CalendarToolbar = ({
  currentDate,
  previousMonth,
  nextMonth,
  goToday,
  view,
  setView,
}) => {
  const month = currentDate.toLocaleString("default", {
    month: "long",
  });

  const year = currentDate.getFullYear();

  const views = ["Month", "Week", "Day"];

  return (
    <div className="flex flex-col gap-6 border-b border-gray-200 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Left Section */}

      <div className="flex items-center gap-4">

        <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          <button
            onClick={previousMonth}
            className="border-r border-gray-200 p-3 transition hover:bg-gray-100"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            onClick={nextMonth}
            className="p-3 transition hover:bg-gray-100"
          >
            <FiChevronRight size={20} />
          </button>

        </div>

        <button
          onClick={goToday}
          className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-[#21943A] hover:text-white"
        >
          Today
        </button>

      </div>

      {/* Month */}

      <div className="text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          {month}

          <span className="ml-2 text-xl font-normal text-gray-400">
            {year}
          </span>

        </h2>

      </div>

      {/* View Buttons */}

      <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        {views.map((item) => (

          <button
            key={item}
            onClick={() => setView(item)}
            className={`px-7 py-3 text-sm font-semibold transition-all ${
              view === item
                ? "bg-[#21943A] text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
};

export default CalendarToolbar;