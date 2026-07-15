import { FiPlus } from "react-icons/fi";

const CalendarHeader = ({ onAdd }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold text-gray-900">
          Calendar
        </h1>

      </div>

      {/* Right */}

      <button
        onClick={onAdd}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[#1B7F33] hover:shadow-lg active:scale-95"
      >
        <FiPlus size={20} />
        Add Event
      </button>

    </div>
  );
};

export default CalendarHeader;