import { useEffect, useRef, useState } from "react";
import {
  FiMoreVertical,
  FiEdit,
  FiCopy,
  FiStar,
  FiTrash2,
} from "react-icons/fi";

const ProjectMenu = ({
  project,
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

    document.addEventListener("mousedown", close);

    return () =>
      document.removeEventListener(
        "mousedown",
        close
      );
  }, []);

  const handleEdit = () => {
    onEdit(project);
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete(project.id);
    setOpen(false);
  };

  const handleDuplicate = () => {
    const duplicate = {
      ...project,
      id: Date.now(),
      title: `${project.title} Copy`,
    };

    onEdit(duplicate);
    setOpen(false);
  };

  const handleFavorite = () => {
    alert(
      "Favorite feature will be added in the next update."
    );
    setOpen(false);
  };

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
        <div className="absolute right-0 top-12 z-20 w-52 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

          <button
            onClick={handleEdit}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiEdit />
            Edit Project
          </button>

          <button
            onClick={handleDuplicate}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiCopy />
            Duplicate
          </button>

          <button
            onClick={handleFavorite}
            className="flex w-full items-center gap-3 px-5 py-3 transition hover:bg-gray-50"
          >
            <FiStar />
            Favorite
          </button>

          <button
            onClick={handleDelete}
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

export default ProjectMenu;