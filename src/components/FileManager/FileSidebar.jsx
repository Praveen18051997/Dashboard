import { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiTrash2,
  FiFolder,
} from "react-icons/fi";

import StorageBar from "./StorageBar";

const FileSidebar = () => {
  const [projectOpen, setProjectOpen] =
    useState(true);

  return (
    <aside className="w-full border-b border-gray-200 bg-white md:w-72 xl:w-80 xl:border-b-0 xl:border-r">

      <div className="flex h-full flex-col">

        {/* Folders */}

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 lg:p-6">

          <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">
            Folders
          </h3>

          {/* Design */}

          <button className="mb-3 flex w-full items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-100">

            <div className="flex items-center gap-3">

              <FiFolder
                className="text-[#FDBA4D]"
                size={20}
              />

              <span className="text-sm font-medium sm:text-base">
                Design
              </span>

            </div>

            <FiChevronRight />

          </button>

          {/* Projects */}

          <button
            onClick={() =>
              setProjectOpen(!projectOpen)
            }
            className="flex w-full items-center justify-between rounded-xl bg-gray-100 px-3 py-3 transition"
          >

            <div className="flex items-center gap-3">

              <FiFolder
                className="text-[#FDBA4D]"
                size={20}
              />

              <span className="text-sm font-medium sm:text-base">
                Projects
              </span>

            </div>

            {projectOpen ? (
              <FiChevronDown />
            ) : (
              <FiChevronRight />
            )}

          </button>

          {/* Children */}

          {projectOpen && (

            <div className="ml-6 mt-3 border-l-2 border-dashed border-gray-300 pl-5">

              {[
                "Projects_01",
                "Projects_02",
                "Projects_03",
                "Projects_04",
              ].map((folder) => (

                <button
                  key={folder}
                  className="mb-2 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm text-gray-600 transition hover:bg-gray-100"
                >

                  <FiFolder className="text-[#FDBA4D]" />

                  {folder}

                </button>

              ))}

            </div>

          )}

          {/* Other Folders */}

          {[
            "Music",
            "Pictures",
            "Documents",
            "Downloads",
          ].map((folder) => (

            <button
              key={folder}
              className="mt-3 flex w-full items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-100"
            >

              <div className="flex items-center gap-3">

                <FiFolder
                  className="text-[#FDBA4D]"
                  size={20}
                />

                <span className="text-sm font-medium sm:text-base">
                  {folder}
                </span>

              </div>

              <FiChevronRight />

            </button>

          ))}

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-200 p-4 sm:p-5 lg:p-6">

          <button className="mb-6 flex items-center gap-3 text-sm text-gray-600 transition hover:text-red-500">

            <FiTrash2 />

            Trash

          </button>

          <StorageBar used={70} />

        </div>

      </div>

    </aside>
  );
};

export default FileSidebar;