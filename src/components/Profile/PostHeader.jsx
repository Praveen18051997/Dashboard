import { FiMoreHorizontal } from "react-icons/fi";

const PostHeader = ({ avatar, name, date }) => {
  return (
    <div className="flex items-center justify-between p-6">

      <div className="flex items-center gap-4">

        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>

          <h3 className="font-semibold text-gray-800">
            {name}
          </h3>

          <p className="text-sm text-gray-400">
            {date}
          </p>

        </div>

      </div>

      <button className="text-gray-400 hover:text-gray-600">

        <FiMoreHorizontal size={20} />

      </button>

    </div>
  );
};

export default PostHeader;