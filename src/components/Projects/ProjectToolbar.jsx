import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiGrid,
  FiMenu,
} from "react-icons/fi";

const ProjectToolbar = ({
  search,
  setSearch,
  view,
  setView,
  onAdd,
}) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      {/* Left */}

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Projects
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all your active projects
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">

        {/* Search */}

        <div className="relative">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search project..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-72 rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#21943A]"
          />

        </div>

        {/* Filter */}

        <button
          className="rounded-xl border border-gray-200 bg-white p-3 transition hover:bg-gray-50"
        >
          <FiFilter size={20} />
        </button>

        {/* View */}

        <div className="flex overflow-hidden rounded-xl border border-gray-200">

          <button
            onClick={() => setView("list")}
            className={`p-3 transition ${
              view === "list"
                ? "bg-[#21943A] text-white"
                : "bg-white"
            }`}
          >
            <FiMenu size={20} />
          </button>

          <button
            onClick={() => setView("grid")}
            className={`border-l border-gray-200 p-3 transition ${
              view === "grid"
                ? "bg-[#21943A] text-white"
                : "bg-white"
            }`}
          >
            <FiGrid size={20} />
          </button>

        </div>

        {/* Add */}

        <button
          onClick={onAdd}
          className="flex items-center gap-3 rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white transition hover:bg-[#1B7F33]"
        >
          <FiPlus size={18} />
          Add Project
        </button>

      </div>

    </div>
  );
};

export default ProjectToolbar;