import { FiSearch, FiChevronDown } from "react-icons/fi";

const OrderSearch = ({
  search,
  setSearch,
  payment,
  setPayment,
  status,
  setStatus,
}) => {
  return (
    <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        {/* Search */}
        <div className="relative">

          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 w-full rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#21943A]"
          />

        </div>

        {/* Payment */}

        <div className="relative">

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-gray-200 px-4 outline-none focus:border-[#21943A]"
          >
            <option>All Payments</option>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Payoneer</option>
          </select>

          <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />

        </div>

        {/* Status */}

        <div className="relative">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-gray-200 px-4 outline-none focus:border-[#21943A]"
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Refunded</option>
            <option>Cancelled</option>
          </select>

          <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />

        </div>

      </div>

    </div>
  );
};

export default OrderSearch;