import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
  FiChevronUp,
} from "react-icons/fi";

import { BsCheckCircle, BsCircle } from "react-icons/bs";

import avatar from "../../assets/images/Avatar.png";

const ChecklistCard = () => {
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
          Template Progress
        </h3>

        <div className="flex items-center gap-2 text-gray-400">
          <FiCalendar />
          <span className="text-sm">Jun 17</span>
        </div>

      </div>

      {/* Description */}
      <p className="mt-2 text-gray-500">
        Designing cool UI design templates.
      </p>

      {/* Progress */}
      <div className="flex justify-between mt-5 mb-2">

        <span className="text-sm font-semibold text-gray-600 uppercase">
          SUB-TASKS: 4
        </span>

        <span className="text-sm font-semibold text-gray-400">
          75%
        </span>

      </div>

      <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">

        <div
          className="h-full bg-[#21943A] rounded-full"
          style={{ width: "75%" }}
        />

      </div>

      {/* Collapse Arrow */}
      <div className="flex justify-center mt-4 mb-4">
        <FiChevronUp
          size={20}
          className="text-gray-400"
        />
      </div>

      {/* Checklist */}

      <div className="space-y-3">

        <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
          <span className="text-gray-700">Inbox Template</span>

          <BsCheckCircle className="text-[#21943A] text-xl" />
        </div>

        <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
          <span className="text-gray-700">Chat Template</span>

          <BsCheckCircle className="text-[#21943A] text-xl" />
        </div>

        <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
          <span className="text-gray-700">Tasks Template</span>

          <BsCheckCircle className="text-[#21943A] text-xl" />
        </div>

        <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
          <span className="text-gray-700">Projects Template</span>

          <BsCircle className="text-gray-300 text-xl" />
        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-6">

        <div className="flex gap-8 text-gray-500">

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
            alt=""
            className="w-10 h-10 rounded-full border-2 border-white"
          />

          <img
            src={avatar}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-white"
          />

        </div>

      </div>

    </div>
  );
};

export default ChecklistCard;