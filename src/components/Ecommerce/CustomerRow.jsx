import { useState } from "react";
import {
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const CustomerRow = ({
  customer,
  deleteCustomer,
  editCustomer,
  toggleChecked,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">

      {/* Checkbox */}
      <td className="px-6 py-5">
        <input
          type="checkbox"
          checked={customer.checked}
          onChange={() => toggleChecked(customer.id)}
          className="h-4 w-4 cursor-pointer accent-[#21943A]"
        />
      </td>

      {/* Customer */}
      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          <img
            src={customer.avatar}
            alt={customer.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="font-semibold text-gray-800">
            {customer.name}
          </span>

        </div>

      </td>

      {/* Email */}
      <td className="px-6 py-5 text-gray-500">
        {customer.email}
      </td>

      {/* Location */}
      <td className="px-6 py-5 text-gray-500">
        {customer.location}
      </td>

      {/* Phone */}
      <td className="px-6 py-5 text-gray-500">
        {customer.phone}
      </td>

      {/* Date */}
      <td className="px-6 py-5 text-gray-500">
        {customer.date}
      </td>

      {/* Status */}
      <td className="px-6 py-5">

        <span
          className={`inline-flex rounded-full px-4 py-1 text-sm font-semibold ${
            customer.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {customer.status}
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
                editCustomer(customer);
                setShowMenu(false);
              }}
              className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-50"
            >
              <FiEdit2 />
              Edit
            </button>

            <button
              onClick={() => {
                deleteCustomer(customer.id);
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

export default CustomerRow;