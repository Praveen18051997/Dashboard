import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronDown,
} from "react-icons/fi";

const ProductPagination = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 px-6 py-5 bg-white border-t border-gray-100">

      {/* Left */}

      <div className="flex items-center gap-5">

        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-gray-600 hover:border-[#21943A]">
          10
          <FiChevronDown />
        </button>

        <p className="text-gray-500">
          Showing <span className="font-semibold">1 - 10</span> of{" "}
          <span className="font-semibold">100</span>
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center">
          <FiChevronsLeft />
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center">
          <FiChevronLeft />
        </button>

        <button className="w-10 h-10 rounded-xl bg-[#21943A] text-white font-semibold rounded-lg">
          1
        </button>

        <button className="w-10 h-10 rounded-xl hover:bg-gray-100">
          2
        </button>

        <button className="w-10 h-10 rounded-xl hover:bg-gray-100">
          3
        </button>

        <span className="px-2 text-gray-400">...</span>

        <button className="w-10 h-10 rounded-xl hover:bg-gray-100">
          5
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center">
          <FiChevronRight />
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center">
          <FiChevronsRight />
        </button>

      </div>

    </div>
  );
};

export default ProductPagination;