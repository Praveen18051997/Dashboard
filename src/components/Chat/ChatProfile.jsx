import {
  FiPhone,
  FiVideo,
  FiMail,
  FiDownload,
  FiFileText,
  FiPlus,
} from "react-icons/fi";

import {
  media,
  sharedFiles,
} from "./ChatData";

const ChatProfile = ({ chat }) => {
  if (!chat) return null;

  return (
    <aside className="w-full bg-white xl:w-[340px] xl:border-l xl:border-gray-200">

      <div className="h-full overflow-y-auto">

        {/* Profile */}

        <div className="border-b border-gray-200 p-5 text-center sm:p-6 lg:p-8">

          {chat.avatar ? (
            <div className="relative mx-auto w-fit">

              <img
                src={chat.avatar}
                alt={chat.name}
                className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 lg:h-28 lg:w-28"
              />

              {chat.online && (
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 sm:h-5 sm:w-5 sm:border-4" />
              )}

            </div>
          ) : (
            <div
              className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold sm:h-24 sm:w-24 lg:h-28 lg:w-28 lg:text-4xl ${
                chat.color ||
                "bg-green-100 text-green-700"
              }`}
            >
              {chat.avatar}
            </div>
          )}

          <h2 className="mt-4 text-xl font-bold text-gray-800 sm:text-2xl">
            {chat.name}
          </h2>

          <p className="mt-1 text-sm text-gray-400 sm:text-base">
            {chat.role || "Team"}
          </p>

          {/* Action Buttons */}

          <div className="mt-6 flex justify-center gap-3 sm:gap-4">

            <button className="rounded-2xl bg-gray-100 p-3 transition hover:bg-gray-200">
              <FiPhone size={20} />
            </button>

            <button className="rounded-2xl bg-gray-100 p-3 transition hover:bg-gray-200">
              <FiVideo size={20} />
            </button>

            <button className="rounded-2xl bg-gray-100 p-3 transition hover:bg-gray-200">
              <FiMail size={20} />
            </button>

          </div>

        </div>

        {/* Shared Files */}

        <div className="border-b border-gray-200 p-5 sm:p-6">

          <div className="mb-5 flex items-center justify-between">

            <h3 className="text-base font-bold text-gray-700">
              Shared Files
            </h3>

            <button className="rounded-lg p-2 transition hover:bg-gray-100">
              <FiPlus />
            </button>

          </div>

          <div className="space-y-3">

            {sharedFiles.map((file, index) => (

              <div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
              >

                <div className="rounded-xl bg-red-100 p-3">

                  <FiFileText className="text-red-500" />

                </div>

                <div className="min-w-0 flex-1">

                  <h4 className="truncate text-sm font-medium text-gray-700 sm:text-base">
                    {file.name}
                  </h4>

                  <p className="text-xs text-gray-400 sm:text-sm">
                    {file.size}
                  </p>

                </div>

                <button className="rounded-lg p-2 transition hover:bg-white">

                  <FiDownload />

                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Shared Media */}

        <div className="p-5 sm:p-6">

          <div className="mb-5 flex items-center justify-between">

            <h3 className="text-base font-bold text-gray-700">
              Shared Media
            </h3>

            <span className="text-xs text-gray-400 sm:text-sm">
              {media.length} Photos
            </span>

          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">

            {media.map((image, index) => (

              <img
                key={index}
                src={image}
                alt=""
                className="aspect-square rounded-xl object-cover transition hover:scale-105"
              />

            ))}

          </div>

        </div>

      </div>

    </aside>
  );
};

export default ChatProfile;