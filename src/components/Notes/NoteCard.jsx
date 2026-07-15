import {
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
  FiPaperclip,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const colors = {
  yellow: "bg-yellow-300",
  blue: "bg-blue-400",
  green: "bg-green-400",
  purple: "bg-purple-400",
  red: "bg-red-400",
  orange: "bg-orange-400",
  cyan: "bg-cyan-400",
  pink: "bg-pink-400",
  indigo: "bg-indigo-400",
};

const NoteCard = ({
  note,
  onEdit,
  onDelete,
  onPin,
}) => {
  const [menu, setMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenu(false);
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

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Colored Corner */}

      <div
        className={`absolute left-0 top-0 h-2 w-full ${
          colors[note.color] ||
          "bg-yellow-300"
        }`}
      />

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-400">
            {note.date}
          </p>

          <h2 className="mt-2 text-xl font-bold text-gray-800">
            {note.title}
          </h2>

        </div>

        <div
          ref={menuRef}
          className="relative"
        >
          <button
            onClick={() =>
              setMenu(!menu)
            }
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <FiMoreVertical />
          </button>

          {menu && (
            <div className="absolute right-0 top-11 z-20 w-44 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

              <button
                onClick={() => {
                  onEdit(note);
                  setMenu(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-3 transition hover:bg-gray-50"
              >
                <FiEdit2 />
                Edit
              </button>

              <button
                onClick={() => {
                  onDelete(note.id);
                  setMenu(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-red-500 transition hover:bg-red-50"
              >
                <FiTrash2 />
                Delete
              </button>

            </div>
          )}
        </div>

      </div>

      {/* Description */}

      <p className="mt-5 line-clamp-6 text-sm leading-7 text-gray-500">
        {note.description}
      </p>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">

        <button
          onClick={() =>
            onPin(note.id)
          }
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            note.pinned
              ? "bg-[#21943A] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {note.pinned
            ? "Pinned"
            : "Pin"}
        </button>

        <div className="flex items-center gap-3 text-gray-400">

          <FiPaperclip />

          <span className="text-sm">
            Note
          </span>

        </div>

      </div>

    </div>
  );
};

export default NoteCard;