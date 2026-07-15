import { useState } from "react";
import {
  FiSend,
  FiSmile,
} from "react-icons/fi";
import toast from "react-hot-toast";

import avatar from "../../assets/images/Avatar.png";

const CommentInput = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) {
      toast.error("Please write a comment");
      return;
    }

    if (onAddComment) {
      onAddComment(comment);
    }

    toast.success("Comment added");

    setComment("");
  };

  return (
    <div className="px-6 py-5 border-b border-gray-100">

      <div className="flex items-center gap-4">

        {/* Avatar */}

        <img
          src={avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Input */}

        <div className="flex-1 relative">

          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            className="
              w-full
              h-12
              rounded-full
              border
              border-gray-200
              pl-5
              pr-24
              outline-none
              focus:border-[#21943A]
            "
          />

          {/* Emoji */}

          <button
            type="button"
            className="
              absolute
              right-12
              top-1/2
              -translate-y-1/2
              text-gray-400
              hover:text-[#21943A]
              transition
            "
          >
            <FiSmile size={18} />
          </button>

          {/* Send */}

          <button
            type="button"
            onClick={handleSubmit}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#21943A]
              hover:scale-110
              transition
            "
          >
            <FiSend size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default CommentInput;