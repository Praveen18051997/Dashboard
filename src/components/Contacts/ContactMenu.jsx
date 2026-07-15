import { useEffect, useRef, useState } from "react";
import {
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
  FiCopy,
  FiStar,
} from "react-icons/fi";

const ContactMenu = ({
  contact,
  onEdit,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      close
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        close
      );
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(
      contact.email
    );

    alert("Email copied!");
    setOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="rounded-lg p-2 transition hover:bg-gray-100"
      >
        <FiMoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-30 w-52 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

          {/* Edit */}

          <button
            onClick={() => {
              onEdit(contact);
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiEdit2 />
            Edit Contact
          </button>

          {/* Copy */}

          <button
            onClick={copyEmail}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiCopy />
            Copy Email
          </button>

          {/* Favourite */}

          <button
            onClick={() => {
              alert(
                "Favourite feature coming soon."
              );
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiStar />
            Favourite
          </button>

          {/* Delete */}

          <button
            onClick={() => {
              onDelete(contact.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-5 py-3 text-red-500 transition hover:bg-red-50"
          >
            <FiTrash2 />
            Delete
          </button>

        </div>
      )}
    </div>
  );
};

export default ContactMenu;