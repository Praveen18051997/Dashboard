import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiRefreshCw,
  FiSettings,
  FiTrash2,
  FiArchive,
  FiMail,
  FiFolder,
  FiFilter,
} from "react-icons/fi";

const MailToolbar = ({
  search,
  setSearch,
  selectAll,
}) => {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 bg-white p-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">

      {/* Left */}

      <div className="flex flex-wrap items-center gap-2">

        <input
          type="checkbox"
          onChange={selectAll}
          className="h-4 w-4 accent-[#21943A]"
        />

        <button className="rounded-lg p-2 transition hover:bg-gray-100">
          <FiArchive />
        </button>

        <button className="rounded-lg p-2 transition hover:bg-gray-100">
          <FiTrash2 />
        </button>

        <button className="rounded-lg p-2 transition hover:bg-gray-100">
          <FiFolder />
        </button>

        <button className="rounded-lg p-2 transition hover:bg-gray-100">
          <FiMail />
        </button>

        <button className="rounded-lg p-2 transition hover:bg-gray-100">
          <FiRefreshCw />
        </button>

      </div>

      {/* Search */}

      <div className="relative w-full lg:max-w-lg">

        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search mail..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#21943A]"
        />

      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center justify-between gap-2 lg:justify-end">

        <span className="text-sm text-gray-500">
          1-20 of 200
        </span>

        <div className="flex items-center gap-2">

          <button className="rounded-lg p-2 transition hover:bg-gray-100">
            <FiChevronLeft />
          </button>

          <button className="rounded-lg p-2 transition hover:bg-gray-100">
            <FiChevronRight />
          </button>

          <button className="rounded-lg p-2 transition hover:bg-gray-100">
            <FiFilter />
          </button>

          <button className="rounded-lg p-2 transition hover:bg-gray-100">
            <FiSettings />
          </button>

        </div>

      </div>

    </div>
  );
};

export default MailToolbar;