import {
  FiSearch,
  FiUpload,
  FiGrid,
  FiList,
} from "react-icons/fi";

const FileToolbar = ({
  search,
  setSearch,
  view,
  setView,
  onUpload,
}) => {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 bg-white p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Search */}

      <div className="relative w-full lg:max-w-xl">

        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-2xl bg-gray-100 py-3 pl-12 pr-5 text-sm outline-none transition focus:ring-2 focus:ring-[#21943A] sm:py-4 sm:text-base"
        />

      </div>

      {/* Right Buttons */}

      <div className="flex flex-wrap items-center justify-end gap-3">

        {/* Grid */}

        <button
          onClick={() =>
            setView("grid")
          }
          className={`rounded-xl p-3 transition ${
            view === "grid"
              ? "bg-[#21943A] text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <FiGrid size={18} />
        </button>

        {/* List */}

        <button
          onClick={() =>
            setView("list")
          }
          className={`rounded-xl p-3 transition ${
            view === "list"
              ? "bg-[#21943A] text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <FiList size={18} />
        </button>

        {/* Upload */}

        <button
          onClick={onUpload}
          className="flex items-center gap-2 rounded-xl bg-[#21943A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1b7d32] sm:gap-3 sm:px-6 sm:text-base"
        >
          <FiUpload size={18} />
          <span>Upload</span>
        </button>

      </div>

    </div>
  );
};

export default FileToolbar;