import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

const CustomerSearch = ({
  search,
  setSearch,
  status,
  setStatus,
}) => {
  return (
    <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="relative w-full lg:max-w-md">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 w-full rounded-xl border border-gray-200 pl-12 pr-4 outline-none transition focus:border-[#21943A]"
          />

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Status */}

          <div className="relative">

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-12 appearance-none rounded-xl border border-gray-200 bg-white px-5 pr-10 outline-none focus:border-[#21943A]"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Blocked</option>
            </select>

            <FiChevronDown
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

          </div>

          {/* Filter */}

          <button
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-gray-50"
          >
            <FiFilter size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default CustomerSearch;