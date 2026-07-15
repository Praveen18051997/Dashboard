const OrderPagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 px-8 py-5">

      <p className="text-sm text-gray-500">
        Showing <span className="font-semibold">1-8</span> of{" "}
        <span className="font-semibold">8</span> orders
      </p>

      <div className="flex items-center gap-2">

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50">
          &lt;
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#21943A] text-white">
          1
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50">
          2
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50">
          &gt;
        </button>

      </div>

    </div>
  );
};

export default OrderPagination;