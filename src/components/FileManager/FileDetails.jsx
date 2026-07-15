import {
  FiFolder,
  FiCalendar,
  FiHardDrive,
  FiUser,
} from "react-icons/fi";

const FileDetails = ({
  selected,
}) => {
  if (!selected) {
    return (
      <aside className="w-80 border-l border-gray-200 bg-white">
        <div className="flex h-full items-center justify-center text-gray-400">
          Select a file or folder
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-80 border-l border-gray-200 bg-white">

      <div className="p-8">

        {/* Icon */}

        <div className="flex justify-center">

          <FiFolder
            size={100}
            className="text-[#FDBA4D]"
          />

        </div>

        {/* Name */}

        <h2 className="mt-6 text-center text-2xl font-bold text-gray-800">
          {selected.name}
        </h2>

        <p className="mt-2 text-center text-gray-400">
          {selected.type}
        </p>

        {/* Details */}

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">

            <FiHardDrive
              className="text-[#21943A]"
              size={20}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Size
              </p>

              <p className="font-medium">
                {selected.size}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FiUser
              className="text-[#21943A]"
              size={20}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Owner
              </p>

              <p className="font-medium">
                {selected.owner}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FiCalendar
              className="text-[#21943A]"
              size={20}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Created
              </p>

              <p className="font-medium">
                {selected.created}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FiCalendar
              className="text-[#21943A]"
              size={20}
            />

            <div>

              <p className="text-xs uppercase text-gray-400">
                Modified
              </p>

              <p className="font-medium">
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