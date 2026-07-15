import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const defaultAvatar =
  "https://i.pravatar.cc/300?img=12";

const AddContactModal = ({
  open,
  onClose,
  onAdd,
  contact,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "Manager",
    email: "",
    phone: "",
    image: defaultAvatar,
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    } else {
      setFormData({
        name: "",
        role: "Manager",
        email: "",
        phone: "",
        image: defaultAvatar,
      });
    }
  }, [contact, open]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onAdd({
      ...(contact || {}),
      ...formData,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            {contact
              ? "Edit Contact"
              : "Add Contact"}
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Form */}

        <div className="grid grid-cols-2 gap-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          >
            <option>Manager</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>UI Designer</option>
            <option>Marketing</option>
            <option>Creative Director</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <input
            type="text"
            name="image"
            placeholder="Profile Image URL"
            value={formData.image}
            onChange={handleChange}
            className="col-span-2 rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

        </div>

        {/* Preview */}

        <div className="mt-8 flex justify-center">

          <img
            src={formData.image}
            alt="Preview"
            onError={(e) => {
              e.target.src = defaultAvatar;
            }}
            className="h-28 w-28 rounded-full border-4 border-[#21943A] object-cover"
          />

        </div>

        {/* Footer */}

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white transition hover:bg-[#1b7d32]"
          >
            {contact
              ? "Update Contact"
              : "Save Contact"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddContactModal;