import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

const ChatMessages = ({
  messages = [],
}) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAFC] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">

      {messages.map((message, index) => (
        <div key={message.id}>

          {(index === 0 ||
            messages[index - 1].time !==
              message.time) && (
            <div className="my-6 text-center lg:my-8">

              <span className="rounded-full bg-gray-200 px-3 py-2 text-xs font-semibold text-gray-500">
                {message.time}
              </span>

            </div>
          )}

          <ChatBubble
            message={message}
          />

        </div>
      ))}

      <div ref={bottomRef} />

    </div>
  );
};

export default ChatMessages;