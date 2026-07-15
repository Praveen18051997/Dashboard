import {
  FiSearch,
  FiPlus,
  FiSliders,
} from "react-icons/fi";

const ContactToolbar = ({
  search,
  setSearch,
  onAdd,
}) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      {/* Search */}

      <div className="relative flex-1">

        <FiSearch
          className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-gray-400"
        />

        <input
          type="text"
          placeholder="Search contact..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-5 shadow-sm outline-none transition focus:border-[#21943A]"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition hover:bg-gray-100"
        >
          <FiSliders
            size={22}
            className="text-gray-600"
          />
        </button>

        <button
          onClick={onAdd}
          className="flex items-center gap-3 rounded-2xl bg-[#21943A] px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-[#1b7d32]"
        >
          <FiPlus size={20} />
          Add Contact
        </button>

      </div>

    </div>
  );
};

export default ContactToolbar;