import {
  FiPlus,
  FiMoreHorizontal,
} from "react-icons/fi";

const ChatHeader = ({ chat }) => {
  return (
    <div className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        {chat.avatar ? (
          <div className="relative">

            <img
              src={chat.avatar}
              alt={chat.name}
              className="h-12 w-12 rounded-full object-cover"
            />

            {chat.online && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
            )}

          </div>
        ) : (
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg ${
              chat.color ||
              "bg-gray-100 text-gray-700"
            }`}
          >
            {chat.avatar}
          </div>
        )}

        <div>

          <h2 className="text-xl font-semibold text-gray-800">
            {chat.name}
          </h2>

          <p className="text-sm text-gray-400">
            {chat.role
              ? chat.role
              : "Team Conversation"}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        <button
          className="rounded-xl p-3 transition hover:bg-gray-100"
        >
          <FiPlus size={20} />
        </button>

        <button
          className="rounded-xl p-3 transition hover:bg-gray-100"
        >
          <FiMoreHorizontal size={22} />
        </button>

      </div>

    </div>
  );
};

export default ChatHeader;