import { useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

const PostActions = ({
  initialLikes = 50,
  comments = 14,
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      toast("Like removed");
    } else {
      setLikes(likes + 1);
      toast.success("Post liked");
    }

    setLiked(!liked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Dashboard Post",
          text: "Check out this post!",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Post link copied");
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">

      <div className="flex items-center gap-8">

        {/* Like */}

        <button
          onClick={handleLike}
          className="flex items-center gap-2 group"
        >
          {liked ? (
            <FaHeart
              size={18}
              className="text-red-500"
            />
          ) : (
            <FiHeart
              size={18}
              className="text-gray-500 group-hover:text-red-500 transition"
            />
          )}

          <span className="text-gray-600 font-medium">
            {likes}
          </span>
        </button>

        {/* Comments */}

        <button className="flex items-center gap-2 group">

          <FiMessageCircle
            size={18}
            className="text-gray-500 group-hover:text-[#21943A] transition"
          />

          <span className="text-gray-600 font-medium">
            {comments}
          </span>

        </button>

      </div>

      {/* Share */}

      <button
        onClick={handleShare}
        className="flex items-center gap-2 text-gray-500 hover:text-[#21943A] transition"
      >
        <FiShare2 size={18} />

        <span className="font-medium">
          Share
        </span>

      </button>

    </div>
  );
};

export default PostActions;