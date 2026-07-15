import {
  FiSearch,
  FiPlus,
  FiSliders,
} from "react-icons/fi";

const NotesToolbar = ({
  search,
  setSearch,
  onAdd,
}) => {
  return (
    <>
      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-4xl font-bold text-gray-800">
          Notes
        </h1>

        <div className="flex items-center gap-4">

          <button className="rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
            <FiSliders
              size={20}
              className="text-gray-600"
            />
          </button>

          <button
            onClick={onAdd}
            className="flex items-center gap-2 rounded-2xl bg-[#21943A] px-6 py-4 font-semibold text-white shadow transition hover:bg-[#1B7F33]"
          >
            <FiPlus size={20} />
            Add Note
          </button>

        </div>

      </div>

      {/* Search */}

      <div className="mt-6">

        <div className="relative max-w-md">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#21943A]"
          />

        </div>

      </div>
    </>
  );
};

export default NotesToolbar;