import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddCustomerModal = ({
  open,
  onClose,
  onAddCustomer,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    date: "",
    status: "Active",
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
      !formData.email ||
      !formData.location ||
      !formData.phone ||
      !formData.date
    ) {
      alert("Please fill all fields.");
      return;
    }

    onAddCustomer({
      ...formData,
      checked: false,
      avatar: `https://i.pravatar.cc/100?u=${Date.now()}`,
    });

    setFormData({
      name: "",
      email: "",
      location: "",
      phone: "",
      date: "",
      status: "Active",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Add Customer
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
            placeholder="Customer Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
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

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="rounded-xl border p-3"
          >
            <option>Active</option>
            <option>Blocked</option>
          </select>

        </div>

        {/* Footer */}

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
            Save Customer
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddCustomerModal;