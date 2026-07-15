import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import avatar from "../../assets/images/Avatar.png";

const SimpleTaskCard = ({
  task,
  deleteTask,
  editTask,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-lg transition-all duration-300">

      {/* Top */}
      <div className="flex justify-between items-start">

        <div className="flex gap-2">
          <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />
          <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => editTask(task)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiEdit2 />
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            <FiTrash2 />
          </button>

        </div>

      </div>

      {/* Title & Date */}
      <div className="flex justify-between items-start mt-5">

        <h3 className="text-xl font-semibold text-gray-800 leading-tight">
          {task.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400">

          <FiCalendar />

          <span className="text-sm">
            {task.date || "Jun 17"}
          </span>

        </div>

      </div>

      {/* Description */}
      <p className="mt-4 text-gray-500 leading-7">
        {task.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8">

        <div className="flex items-center gap-8 text-gray-500">

          <div className="flex items-center gap-2">
            <FiPaperclip />
            {task.attachments ?? 0}
          </div>

          <div className="flex items-center gap-2">
            <FiMessageSquare />
            {task.comments ?? 0}
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

export default SimpleTaskCard;