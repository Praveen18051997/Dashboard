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
        className="flex h-44 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 transition hover:border-[#21943A] hover:bg-gray-50"
      >
        <div className="mb-4 rounded-full bg-gray-100 p-4">
          <FiPlus
            size={28}
            className="text-gray-500"
          />
        </div>

        <span className="text-lg font-semibold text-gray-600">
          Add Folder
        </span>
      </button>
    );
  }

  return (
    <div
      onClick={() => setSelected(folder)}
      className={`group relative cursor-pointer rounded-3xl p-8 transition ${
        selected?.id === folder.id
          ? "bg-gray-100"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="absolute right-5 top-5 opacity-0 transition group-hover:opacity-100">
        <FolderMenu />
      </div>

      <FiFolder
        size={90}
        className="mx-auto text-[#FDBA4D]"
      />

      <h3 className="mt-5 text-center text-2xl font-semibold text-gray-800">
        {folder.name}
      </h3>

      <p className="mt-2 text-center text-gray-400">
        {folder.size}
      </p>
    </div>
  );
};

export default FolderCard;