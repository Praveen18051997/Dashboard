import { useState } from "react";
import {
  FiPaperclip,
  FiSmile,
  FiImage,
} from "react-icons/fi";
import avatar from "../../assets/images/Avatar.png";
import toast from "react-hot-toast";

const CreatePost = () => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [post, setPost] = useState("");

  const handlePost = () => {
    if (!post.trim()) {
      toast.error("Please write something");
      return;
    }

    toast.success("Post created successfully");

    setPost("");
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

      {/* Top */}

      <div className="flex items-start gap-4">

        <img
          src={avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">

          <textarea
            rows="3"
            placeholder={`Write something${
              currentUser
                ? `, ${currentUser.fullname}`
                : ""
            }...`}
            value={post}
            onChange={(e) =>
              setPost(e.target.value)
            }
            className="
              w-full
              resize-none
              border-none
              outline-none
              text-gray-700
              placeholder:text-gray-400
              text-lg
            "
          />

        </div>

      </div>

      {/* Bottom */}

      <div className="flex items-center justify-between mt-5">

        <button
          onClick={handlePost}
          className="
            bg-[#21943A]
            hover:bg-[#1b7f31]
            text-white
            px-8
            py-2.5
            rounded-xl
            font-medium
            transition
          "
        >
          Post
        </button>

        <div className="flex items-center gap-6 text-gray-400">

          <button className="hover:text-[#21943A] transition">
            <FiPaperclip size={22} />
          </button>

          <button className="hover:text-[#21943A] transition">
            <FiSmile size={22} />
          </button>

          <button className="hover:text-[#21943A] transition">
            <FiImage size={22} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default CreatePost;