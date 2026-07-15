import { useState } from "react";
import { FiX } from "react-icons/fi";

const InviteModal = ({
  open,
  onClose,
}) => {
  const [email, setEmail] =
    useState("");

  if (!open) return null;

  const invite = () => {
    if (!email.trim()) {
      alert("Enter an email");
      return;
    }

    alert(
      `${email} invited successfully!`
    );

    setEmail("");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Invite Members
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#21943A]"
        />

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={invite}
            className="rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white hover:bg-[#1b7d32]"
          >
            Send Invite
          </button>

        </div>

      </div>

    </div>
  );
};

export default InviteModal;