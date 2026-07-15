import { FiSearch } from "react-icons/fi";

const ChatSearch = ({
  search,
  setSearch,
}) => {
  return (
    <div className="border-b border-gray-200 p-5">

      <div className="relative">

        <FiSearch
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl bg-gray-100 py-3 pl-11 pr-4 outline-none transition focus:ring-2 focus:ring-[#21943A]"
        />

      </div>

    </div>
  );
};

export default ChatSearch;