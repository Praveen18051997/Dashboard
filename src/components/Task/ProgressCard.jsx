import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";

import avatar from "../../assets/images/Avatar.png";

const ProgressCard = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all duration-300">

      {/* Accent Bars */}
      <div className="flex gap-2 mb-5">
        <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />
        <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-start">

        <h3 className="text-xl font-semibold text-gray-800">
          Updating Modules
        </h3>

        <div className="flex items-center gap-2 text-gray-400">
          <FiCalendar />
          <span className="text-sm">Jun 17</span>
        </div>

      </div>

      {/* Description */}
      <p className="mt-3 text-gray-500 text-base leading-7">
        Step-by-step update of modules.
      </p>

      {/* Sub Tasks */}
      <div className="flex justify-between mt-7 mb-2">

        <span className="text-sm font-semibold text-gray-600 uppercase">
          SUB-TASKS: 4
        </span>

        <span className="text-sm font-semibold text-gray-400">
          50%
        </span>

      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">

        <div
          className="h-full bg-[#21943A] rounded-full"
          style={{ width: "50%" }}
        />

      </div>

      {/* Arrow */}
      <div className="flex justify-center mt-4">

        <button className="text-gray-400 hover:text-[#21943A] transition">
          <FiChevronDown size={20} />
        </button>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">

        <div className="flex items-center gap-8 text-gray-500">

          <div className="flex items-center gap-2">
            <FiPaperclip />
            <span>2</span>
          </div>

          <div className="flex items-center gap-2">
            <FiMessageSquare />
            <span>5</span>
          </div>

        </div>

        <div className="flex -space-x-3">

          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-white"
          />

          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-white"
          />

        </div>

      </div>

    </div>
  );
};

export default ProgressCard;