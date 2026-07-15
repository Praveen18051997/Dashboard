import {
  FiMail,
  FiPhone,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

import ContactMenu from "./ContactMenu";

const roleColors = {
  Manager: "bg-green-100 text-green-700",
  Designer: "bg-purple-100 text-purple-700",
  Developer: "bg-blue-100 text-blue-700",
  Marketing: "bg-orange-100 text-orange-700",
  "Creative Director":
    "bg-pink-100 text-pink-700",
  "UI Designer":
    "bg-cyan-100 text-cyan-700",
};

const ContactCard = ({
  contact,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top */}

      <div className="flex items-start justify-between">

        <img
          src={contact.image}
          alt={contact.name}
          className="h-20 w-20 rounded-full object-cover"
        />

        <ContactMenu
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      </div>

      {/* Name */}

      <div className="mt-5">

        <h2 className="text-xl font-bold text-gray-800">
          {contact.name}
        </h2>

        <span
          className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
            roleColors[contact.role] ||
            "bg-gray-100 text-gray-700"
          }`}
        >
          {contact.role}
        </span>

      </div>

      {/* Info */}

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 text-gray-600">

          <FiMail className="text-[#21943A]" />

          <span className="truncate text-sm">
            {contact.email}
          </span>

        </div>

        <div className="flex items-center gap-3 text-gray-600">

          <FiPhone className="text-[#21943A]" />

          <span className="text-sm">
            {contact.phone}
          </span>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-8 grid grid-cols-2 gap-3">

        <button
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 font-medium transition hover:bg-gray-100"
        >
          <FiUser />
          Profile
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-[#21943A] py-3 font-medium text-white transition hover:bg-[#1b7d32]"
        >
          <FiMessageSquare />
          Message
        </button>

      </div>

    </div>
  );
};

export default ContactCard;