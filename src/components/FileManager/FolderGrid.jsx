import FolderCard from "./FolderCard";

const FolderGrid = ({
  folders,
  files,
  selected,
  setSelected,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">

      {/* Folder Section */}

      <h2 className="mb-6 text-xl font-semibold text-gray-800 sm:text-3xl lg:mb-8 lg:text-5xl">
        Folders
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6 xl:gap-8">

        {folders.map((folder) => (
          <FolderCard
            key={folder.id}
            folder={folder}
            selected={selected}
            setSelected={setSelected}
          />
        ))}

        <FolderCard
          addFolder
          setSelected={setSelected}
        />

      </div>

      {/* Files */}

      <h2 className="mb-6 mt-10 text-2xl font-bold text-gray-800 sm:mt-12 sm:text-3xl lg:mb-8 lg:mt-16 lg:text-5xl">
        Files
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 xl:gap-8">

        {files.map((file) => (

          <div
            key={file.id}
            className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:rounded-3xl lg:p-8"
          >

            <div className="mb-5 flex justify-center">

              <img
                src={`https://placehold.co/80x100?text=${file.type.toUpperCase()}`}
                alt=""
                className="h-20 w-auto rounded-lg object-contain lg:h-24"
              />

            </div>

            <h3 className="truncate text-center text-base font-semibold sm:text-lg">
              {file.name}
            </h3>

            <p className="mt-2 text-center text-sm text-gray-400 sm:text-base">
              {file.size}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default FolderGrid;