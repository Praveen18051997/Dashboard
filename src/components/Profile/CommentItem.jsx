import {
  FiHeart,
  FiCornerDownRight,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const CommentItem = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(comment.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="flex gap-4">

      {/* Avatar */}

      <img
        src={comment.avatar}
        alt={comment.name}
        className="w-11 h-11 rounded-full object-cover flex-shrink-0"
      />

      <div className="flex-1">

        {/* Comment Card */}

        <div className="bg-gray-50 rounded-2xl p-4">

          <div className="flex items-center justify-between">

            <div>

              <h4 className="font-semibold text-gray-800">
                {comment.name}
              </h4>

              <p className="text-xs text-gray-400 mt-1">
                {comment.time}
              </p>

            </div>

          </div>

          <p className="mt-3 text-gray-600 leading-7">
            {comment.message}
          </p>

        </div>

        {/* Actions */}

        <div className="flex items-center gap-6 mt-3 ml-2">

          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition"
          >
            {liked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FiHeart />
            )}

            <span>{likes}</span>
          </button>

          <button
            className="flex items-center gap-2 text-gray-500 hover:text-[#21943A] transition"
          >
            <FiCornerDownRight />

            <span>Reply</span>

          </button>

        </div>

        {/* Replies */}

        {comment.replies &&
          comment.replies.length > 0 && (

          <div className="mt-6 ml-8 space-y-5">

            {comment.replies.map((reply) => (

              <div
                key={reply.id}
                className="flex gap-4"
              >

                <img
                  src={reply.avatar}
                  alt={reply.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex-1">

                  <div className="bg-gray-100 rounded-2xl p-4">

                    <div className="flex justify-between">

                      <div>

                        <h5 className="font-semibold text-gray-800">
                          {reply.name}
                        </h5>

                        <p className="text-xs text-gray-400 mt-1">
                          {reply.time}
                        </p>

                      </div>

                    </div>

                    <p className="mt-3 text-gray-600">
                      {reply.message}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default CommentItem;