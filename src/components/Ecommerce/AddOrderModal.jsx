import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddOrderModal = ({
  open,
  onClose,
  onAddOrder,
}) => {
  const [formData, setFormData] = useState({
    orderNo: "",
    customer: "",
    date: "",
    total: "",
    payment: "Credit Card",
    status: "Pending",
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
      !formData.orderNo ||
      !formData.customer ||
      !formData.date ||
      !formData.total
    ) {
      alert("Please fill all fields.");
      return;
    }

    onAddOrder({
      ...formData,
      checked: false,
    });

    setFormData({
      orderNo: "",
      customer: "",
      date: "",
      total: "",
      payment: "Credit Card",
      status: "Pending",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Add Order
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
            name="orderNo"
            placeholder="Order Number"
            value={formData.orderNo}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="customer"
            placeholder="Customer Name"
            value={formData.customer}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="total"
            placeholder="$250.00"
            value={formData.total}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="rounded-xl border p-3"
          >
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Payoneer</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="rounded-xl border p-3"
          >
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Cancelled</option>
            <option>Refunded</option>
          </select>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white hover:bg-[#1B7F33]"
          >
            Save Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddOrderModal;