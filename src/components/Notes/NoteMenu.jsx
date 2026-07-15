import { useEffect, useRef, useState } from "react";
import {
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
  FiBookmark,
} from "react-icons/fi";

const NoteMenu = ({
  note,
  onEdit,
  onDelete,
  onPin,
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

    document.addEventListener("mousedown", close);

    return () =>
      document.removeEventListener(
        "mousedown",
        close
      );
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 transition hover:bg-gray-100"
      >
        <FiMoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-20 w-48 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

          <button
            onClick={() => {
              onEdit(note);
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiEdit2 />
            Edit Note
          </button>

          <button
            onClick={() => {
              onPin(note.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiBookmark />
            {note.pinned ? "Unpin" : "Pin"}
          </button>

          <button
            onClick={() => {
              onDelete(note.id);
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

export default NoteMenu;