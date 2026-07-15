import { FiChevronDown, FiFilter, FiChevronRight } from "react-icons/fi";

const TaskHeader = ({ onAdd }) => {
  return (
    <div className="flex items-center justify-between mb-10">

      {/* Left */}
      <div className="flex items-center gap-3">

        <h1 className="text-4xl font-semibold text-gray-800">
          Design Plan
        </h1>

        <button className="text-gray-500 hover:text-[#21943A] transition">
          <FiChevronDown size={22} />
        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Filter */}
        <button className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
          <FiFilter className="text-xl text-gray-600" />
        </button>

        {/* Add */}
        <button
          onClick={onAdd}
          className="flex items-center gap-4 bg-[#21943A] hover:bg-[#1B7F33] text-white rounded-2xl px-7 h-12 font-semibold shadow-sm transition"
        >

          Add

          <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
            <FiChevronRight />
          </span>

        </button>

      </div>
    </div>
  );
};

export default TaskHeader;