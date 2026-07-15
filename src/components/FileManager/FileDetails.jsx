import {
  FiFolder,
  FiCalendar,
  FiHardDrive,
  FiUser,
} from "react-icons/fi";

const FileDetails = ({ selected }) => {
  if (!selected) {
    return (
      <aside className="hidden xl:flex xl:w-[280px] shrink-0 border-l border-gray-200 bg-white">
        <div className="flex h-full w-full items-center justify-center text-gray-400">
          Select a file or folder
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden xl:flex xl:w-[280px] shrink-0 flex-col border-l border-gray-200 bg-white">

      <div className="flex-1 overflow-y-auto p-6">

        <div className="flex justify-center">

          <FiFolder
            size={80}
            className="text-[#FDBA4D]"
          />

        </div>

        <h2 className="mt-5 break-words text-center text-xl font-bold text-gray-800">
          {selected.name}
        </h2>

        <p className="mt-1 text-center text-sm text-gray-400">
          {selected.type}
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-4">

            <FiHardDrive
              className="text-[#21943A]"
              size={18}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Size
              </p>

              <p className="text-sm font-medium">
                {selected.size}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FiUser
              className="text-[#21943A]"
              size={18}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Owner
              </p>

              <p className="text-sm font-medium">
                {selected.owner}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FiCalendar
              className="text-[#21943A]"
              size={18}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Created
              </p>

              <p className="text-sm font-medium">
                {selected.created}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FiCalendar
              className="text-[#21943A]"
              size={18}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Modified
              </p>

              <p className="text-sm font-medium">
                {selected.modified}
              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
};

export default FileDetails;