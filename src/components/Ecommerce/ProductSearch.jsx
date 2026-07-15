import { FiSearch, FiChevronDown } from "react-icons/fi";

const ProductSearch = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mt-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Search */}
        <div className="relative">

          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#21943A]"
          />

        </div>

        {/* Category */}

        <div className="relative">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-12 rounded-xl border border-gray-200 px-4 appearance-none outline-none focus:border-[#21943A]"
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Fashion</option>
            <option>Sports</option>
          </select>

          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />

        </div>

        {/* Status */}

        <div className="relative">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full h-12 rounded-xl border border-gray-200 px-4 appearance-none outline-none focus:border-[#21943A]"
          >
            <option>All Status</option>
            <option>Available</option>
            <option>Disabled</option>
          </select>

          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />

        </div>

      </div>

    </div>
  );
};

export default ProductSearch;