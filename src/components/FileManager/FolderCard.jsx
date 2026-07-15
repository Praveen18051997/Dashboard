import { FiFolder, FiPlus } from "react-icons/fi";
import FolderMenu from "./FolderMenu";

const FolderCard = ({
  folder,
  selected,
  setSelected,
  addFolder = false,
}) => {
  if (addFolder) {
    return (
      <button
        onClick={() => {
          const name = prompt("Folder name");

          if (!name) return;

          setSelected({
            id: Date.now(),
            name,
            size: "0 MB",
            owner: "ArtTemplate",
            type: "Folder",
            location: "My Files",
            created: "Today",
            modified: "Today",
            isNew: true,
          });
        }}
        className="flex h-36 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 transition hover:border-[#21943A] hover:bg-gray-50"
      >
        <div className="mb-3 rounded-full bg-gray-100 p-3">
          <FiPlus
            size={24}
            className="text-gray-500"
          />
        </div>

        <span className="text-sm font-semibold text-gray-600">
          Add Folder
        </span>
      </button>
    );
  }

  return (
    <div
      onClick={() => setSelected(folder)}
      className={`group relative cursor-pointer rounded-2xl border border-gray-100 bg-white p-2 transition-all duration-300 hover:shadow-lg ${
        selected?.id === folder.id
          ? "border-[#21943A] bg-green-50"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="absolute right-3 top-3 opacity-0 transition group-hover:opacity-100">
        <FolderMenu />
      </div>

      <FiFolder
        size={60}
        className="mx-auto text-[#FDBA4D]"
      />

      <h3 className="mt-4 truncate text-center text-sm font-semibold text-gray-800">
        {folder.name}
      </h3>

      <p className="mt-1 text-center text-sm text-gray-400">
        {folder.size}
      </p>
    </div>
  );
};

export default FolderCard;

