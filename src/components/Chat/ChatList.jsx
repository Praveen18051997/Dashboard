import { FiPlus } from "react-icons/fi";

const ChatList = ({
  title,
  data,
  selectedChat,
  setSelectedChat,
}) => {
  return (
    <div className="px-6 pt-6">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">
          {title}
        </h3>

        <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
          <FiPlus size={14} />
        </button>

      </div>

      <div className="space-y-2">

        {data.map((item) => {

          const active =
            selectedChat.id === item.id;

          return (

            <button
              key={item.id}
              onClick={() =>
                setSelectedChat(item)
              }
              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition ${
                active
                  ? "bg-[#EEF9F0]"
                  : "hover:bg-gray-100"
              }`}
            >

              <div className="flex items-center gap-3">

                {item.avatar?.startsWith(
                  "http"
                ) ? (

                  <div className="relative">

                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    {item.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                    )}

                  </div>

                ) : (

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${item.color}`}
                  >
                    {item.avatar}
                  </div>

                )}

                <div className="text-left">

                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>

                  <p className="w-44 truncate text-sm text-gray-400">
                    {item.lastMessage}
                  </p>

                </div>

              </div>

              {item.unread > 0 && (

                <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                  {item.unread}
                </span>

              )}

            </button>

          );

        })}

      </div>

    </div>
  );
};

export default ChatList;