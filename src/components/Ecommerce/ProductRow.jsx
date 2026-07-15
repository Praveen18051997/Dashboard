import { useState } from "react";
import {
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const ProductRow = ({
  product,
  toggleChecked,
  deleteProduct,
  editProduct,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">

      {/* Checkbox */}
      <td className="px-6 py-5">
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => toggleChecked(product.id)}
          className="w-4 h-4 cursor-pointer accent-[#21943A]"
        />
      </td>

      {/* Product Name */}
      <td className="px-6 py-5">

        <div className="flex flex-col">

          <span className="text-[15px] font-semibold text-gray-800">
            {product.name}
          </span>

          <span className="text-xs text-gray-400">
            Stock : {product.stock}
          </span>

        </div>

      </td>

      {/* Product No */}
      <td className="px-6 py-5 text-gray-500">
        {product.productNo}
      </td>

      {/* Category */}
      <td className="px-6 py-5 text-gray-500">
        {product.category}
      </td>

      {/* Date */}
      <td className="px-6 py-5 text-gray-500">
        {product.date}
      </td>

      {/* Price */}
      <td className="px-6 py-5 font-semibold text-gray-800">
        {product.price}
      </td>

      {/* Status */}
      <td className="px-6 py-5">

        <span
          className={`inline-flex rounded-full px-4 py-1 text-sm font-semibold ${
            product.status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {product.status}
        </span>

      </td>

      {/* Actions */}
      <td className="relative px-6 py-5 text-center">

        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="text-gray-500 hover:text-gray-800"
        >
          <FiMoreVertical size={20} />
        </button>

        {showMenu && (
          <div className="absolute right-6 top-12 z-20 w-40 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">

            <button
              onClick={() => {
                editProduct(product);
                setShowMenu(false);
              }}
              className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-50"
            >
              <FiEdit2 />
              Edit
            </button>

            <button
              onClick={() => {
                deleteProduct(product.id);
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

export default ProductRow;