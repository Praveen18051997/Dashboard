import {
  FiStar,
  FiPaperclip,
  FiBookmark,
  FiTrash2,
} from "react-icons/fi";

import {
  FaStar,
  FaBookmark,
} from "react-icons/fa";

const MailItem = ({
  mail,
  toggleStar,
  toggleBookmark,
  toggleSelect,
  deleteMail,
}) => {
  return (
    <div
      className={`group flex flex-col gap-4 border-b border-gray-100 bg-white p-4 transition hover:bg-gray-50 sm:flex-row sm:items-center sm:px-6 ${
        mail.selected ? "bg-green-50" : ""
      }`}
    >
      {/* Left */}

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={mail.selected}
          onChange={() => toggleSelect(mail.id)}
          className="h-4 w-4 cursor-pointer accent-[#21943A]"
        />

        <button
          onClick={() => toggleStar(mail.id)}
          className="transition hover:scale-110"
        >
          {mail.starred ? (
            <FaStar className="text-yellow-400" />
          ) : (
            <FiStar className="text-gray-400" />
          )}
        </button>

        <button
          onClick={() => toggleBookmark(mail.id)}
          className="transition hover:scale-110"
        >
          {mail.bookmarked ? (
            <FaBookmark className="text-[#21943A]" />
          ) : (
            <FiBookmark className="text-gray-400" />
          )}
        </button>

        <img
          src={mail.avatar}
          alt={mail.sender}
          className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
        />

      </div>

      {/* Middle */}

      <div className="min-w-0 flex-1">

        <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6">

          <p className="w-full truncate font-semibold text-gray-800 lg:w-48">
            {mail.sender}
          </p>

          <div className="min-w-0 flex-1">

            <p className="truncate font-medium text-gray-700">
              {mail.subject}
            </p>

            <p className="truncate text-sm text-gray-400">
              {mail.preview}
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center justify-between gap-4 sm:justify-end">

        {mail.attachment && (
          <FiPaperclip className="text-gray-400" />
        )}

        <span className="text-sm whitespace-nowrap text-gray-500">
          {mail.time}
        </span>

        <button
          onClick={() => deleteMail(mail.id)}
          className="transition hover:text-red-500 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <FiTrash2 size={18} />
        </button>

      </div>

    </div>
  );
};

export default MailItem;