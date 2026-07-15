import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddProductModal = ({
  open,
  onClose,
  onAddProduct,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    productNo: "",
    category: "Notebook",
    date: "",
    price: "",
    status: "Available",
    stock: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.productNo ||
      !formData.date ||
      !formData.price
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onAddProduct({
      ...formData,
      checked: false,
      image: "",
    });

    setFormData({
      name: "",
      productNo: "",
      category: "Notebook",
      date: "",
      price: "",
      status: "Available",
      stock: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-gray-800">
            Add Product
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Form */}

        <div className="grid grid-cols-2 gap-5">

          <input
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 p-3 outline-none focus:border-[#21943A]"
          />

          <input
            name="productNo"
            placeholder="Product Number"
            value={formData.productNo}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 p-3 outline-none focus:border-[#21943A]"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 p-3"
          >
            <option>Notebook</option>
            <option>Phone</option>
            <option>Watch</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 p-3"
          />

          <input
            name="price"
            placeholder="$2,500"
            value={formData.price}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 p-3"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 p-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="col-span-2 rounded-xl border border-gray-200 p-3"
          >
            <option>Available</option>
            <option>Disabled</option>
          </select>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white hover:bg-[#1b7f33]"
          >
            Save Product
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddProductModal;