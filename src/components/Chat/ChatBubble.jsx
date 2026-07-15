import {
  FiDownload,
  FiFileText,
} from "react-icons/fi";

const ChatBubble = ({ message }) => {
  const isSender =
    message.type === "sent";

  return (
    <div
      className={`mb-6 flex ${
        isSender
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {!isSender && (
        <img
          src={message.avatar}
          alt=""
          className="mr-3 h-11 w-11 rounded-full object-cover"
        />
      )}

      <div
        className={`max-w-[70%] rounded-3xl px-5 py-4 shadow-sm ${
          isSender
            ? "rounded-br-md bg-[#21943A] text-white"
            : "rounded-bl-md bg-white text-gray-700"
        }`}
      >
        {message.file ? (
          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-red-100 p-3">
              <FiFileText
                size={24}
                className="text-red-500"
              />
            </div>

            <div>

              <h4 className="font-semibold">
                {message.text}
              </h4>

              <p
                className={`text-sm ${
                  isSender
                    ? "text-green-100"
                    : "text-gray-400"
                }`}
              >
                {message.size}
              </p>

            </div>

            <button className="ml-auto rounded-lg p-2 transition hover:bg-black/10">
              <FiDownload />
            </button>

          </div>
        ) : (
          <p className="whitespace-pre-line leading-7">
            {message.text}
          </p>
        )}
      </div>

      {isSender && (
        <img
          src={message.avatar}
          alt=""
          className="ml-3 h-11 w-11 rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default ChatBubble;