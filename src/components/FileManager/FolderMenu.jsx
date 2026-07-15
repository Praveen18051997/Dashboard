import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const FolderMenu = () => {
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

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="rounded-lg p-1 transition hover:bg-gray-100"
      >
        <FiMoreVertical size={15} />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-30 w-28 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

          <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-50">
            Share
          </button>

          <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-50">
            Copy
          </button>

          <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-50">
            Rename
          </button>

          <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-50">
            Download
          </button>

          <button className="flex w-full items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50">
            Delete
          </button>

        </div>
      )}
    </div>
  );
};

export default FolderMenu;