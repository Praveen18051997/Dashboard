import { useState } from "react";
import {
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const OrderRow = ({
  order,
  deleteOrder,
  editOrder,
  toggleChecked,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const statusStyle = {
    Shipped: "bg-green-100 text-green-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Pending: "bg-blue-100 text-blue-700",
    Refunded: "bg-purple-100 text-purple-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">

      {/* Checkbox */}
      <td className="px-6 py-5">
        <input
          type="checkbox"
          checked={order.checked}
          onChange={() => toggleChecked(order.id)}
          className="h-4 w-4 cursor-pointer accent-[#21943A]"
        />
      </td>

      {/* Order Number */}
      <td className="px-6 py-5 font-medium text-gray-800">
        {order.orderNo}
      </td>

      {/* Customer */}
      <td className="px-6 py-5">
        <span className="font-medium text-gray-700">
          {order.customer}
        </span>
      </td>

      {/* Date */}
      <td className="px-6 py-5 text-gray-500">
        {order.date}
      </td>

      {/* Total */}
      <td className="px-6 py-5 font-semibold text-gray-800">
        {order.total}
      </td>

      {/* Payment */}
      <td className="px-6 py-5 text-gray-600">
        {order.payment}
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-4 py-1 text-sm font-semibold ${
            statusStyle[order.status]
          }`}
        >
          {order.status}
        </span>
      </td>

      {/* Actions */}
      <td className="relative px-6 py-5 text-center">

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-500 hover:text-gray-800"
        >
          <FiMoreVertical size={20} />
        </button>

        {showMenu && (
          <div className="absolute right-6 top-12 z-20 w-40 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">

            <button
              onClick={() => {
                editOrder(order);
                setShowMenu(false);
              }}
              className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-50"
            >
              <FiEdit2 />
              Edit
            </button>

            <button
              onClick={() => {
                deleteOrder(order.id);
                setShowMenu(false);
              }}
              className="flex w-full items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50"
            >
              <FiTrash2 />
              Delete
            </button>

          </div>
        )}

      </td>

    </tr>
  );
};

export default OrderRow;