import { useState } from "react";
import { FiX } from "react-icons/fi";

const colors = [
  "yellow",
  "blue",
  "green",
  "purple",
  "red",
  "orange",
  "cyan",
  "pink",
  "indigo",
];

const colorClasses = {
  yellow: "bg-yellow-400",
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  cyan: "bg-cyan-500",
  pink: "bg-pink-500",
  indigo: "bg-indigo-500",
};

const AddNoteModal = ({
  open,
  onClose,
  onAdd,
  note,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: "yellow",
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
      !formData.description.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    const today = new Date().toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

    onAdd({
      ...(note || {}),
      title: formData.title,
      description: formData.description,
      color: formData.color,
      pinned: note?.pinned ?? false,
      date: note?.date || today,
    });

    setFormData({
      title: "",
      description: "",
      color: "yellow",
      });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            {note ? "Edit Note" : "Add Note"}
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Form */}

        <div className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Note Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <textarea
            rows={6}
            name="description"
            placeholder="Write your note..."
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <div>

            <p className="mb-3 font-medium text-gray-700">
              Note Color
            </p>

            <div className="flex flex-wrap gap-3">

              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      color,
                    }))
                  }
                  className={`h-10 w-10 rounded-full border-4 transition ${
                    colorClasses[color]
                  } ${
                    formData.color === color
                      ? "border-black"
                      : "border-white"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white hover:bg-[#1b7d32]"
          >
            {note ? "Update Note" : "Save Note"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddNoteModal;