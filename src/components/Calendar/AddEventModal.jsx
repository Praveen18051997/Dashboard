import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddEventModal = ({
  open,
  onClose,
  onAddEvent,
  calendarTypes,
}) => {

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    start: "",
    end: "",
    category: calendarTypes?.[0]?.name || "Meeting",
    color: "cyan",
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
      !formData.title.trim() ||
      !formData.date ||
      !formData.start ||
      !formData.end
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.start >= formData.end) {
      alert(
        "End time must be greater than Start time."
      );
      return;
    }

    onAddEvent({
      id: Date.now(),
      ...formData,
    });

    setFormData({
      title: "",
      date: "",
      start: "",
      end: "",
      category:
        calendarTypes?.[0]?.name || "Meeting",
      color: "cyan",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-gray-800">
            Add Event
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <FiX size={24} />
          </button>

        </div>

        {/* Form */}

        <div className="grid grid-cols-2 gap-5">

          <div className="col-span-2">

            <label className="mb-2 block text-sm font-medium">
              Event Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Event Title"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#21943A]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#21943A]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#21943A]"
            >
              {calendarTypes.map((item) => (
                <option
                  key={item.name}
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Start Time
            </label>

            <input
              type="time"
              name="start"
              value={formData.start}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#21943A]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              End Time
            </label>

            <input
              type="time"
              name="end"
              value={formData.end}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#21943A]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Color
            </label>

            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#21943A]"
            >
              <option value="cyan">Cyan</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
              <option value="red">Red</option>
            </select>

          </div>

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
            className="rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white transition hover:bg-[#1B7F33]"
          >
            Save Event
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddEventModal;