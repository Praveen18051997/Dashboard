import { useState } from "react";
import { FiX, FiPaperclip, FiSend } from "react-icons/fi";

const ComposeModal = ({
  open,
  onClose,
  onSend,
}) => {
  const [form, setForm] = useState({
    sender: "You",
    subject: "",
    preview: "",
    label: "Personal",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      !form.subject.trim() ||
      !form.preview.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSend({
      ...form,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: "https://i.pravatar.cc/150?img=64",
      attachment: false,
    });

    setForm({
      sender: "You",
      subject: "",
      preview: "",
      label: "Personal",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">

          <h2 className="text-2xl font-bold">
            New Message
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-5 p-6">

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Category
            </label>

            <select
              name="label"
              value={form.label}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
            >
              <option>Personal</option>
              <option>Work</option>
              <option>Friends</option>
              <option>Family</option>
              <option>Social</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Message
            </label>

            <textarea
              rows={8}
              name="preview"
              value={form.preview}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t px-6 py-5">

          <button
            className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-gray-100"
          >
            <FiPaperclip />
            Attachment
          </button>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white transition hover:bg-[#1B7F33]"
          >
            <FiSend />
            Send
          </button>

        </div>

      </div>

    </div>
  );
};

export default ComposeModal;