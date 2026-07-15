import { useState } from "react";
import {
  FiSmile,
  FiPaperclip,
  FiMic,
  FiSend,
} from "react-icons/fi";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4 sm:p-5">

      <div className="flex flex-wrap items-center gap-3">

        {/* Emoji */}

        <button className="rounded-xl p-2 transition hover:bg-gray-100 sm:p-3">
          <FiSmile
            size={22}
            className="text-gray-500"
          />
        </button>

        {/* Attachment */}

        <button className="rounded-xl p-2 transition hover:bg-gray-100 sm:p-3">
          <FiPaperclip
            size={22}
            className="text-gray-500"
          />
        </button>

        {/* Input */}

        <input
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="min-w-[180px] flex-1 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#21943A] sm:px-5 sm:py-4"
        />

        {/* Voice */}

        <button className="rounded-xl p-2 transition hover:bg-gray-100 sm:p-3">
          <FiMic
            size={22}
            className="text-gray-500"
          />
        </button>

        {/* Send */}

        <button
          onClick={handleSend}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21943A] text-white shadow transition hover:bg-[#1b7d32] sm:h-14 sm:w-14"
        >
          <FiSend size={20} />
        </button>

      </div>

    </div>
  );
};

export default ChatInput;