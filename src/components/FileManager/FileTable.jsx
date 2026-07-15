import {
  FiFolder,
  FiFileText,
} from "react-icons/fi";

import FolderMenu from "./FolderMenu";

const FileTable = ({
  folders = [],
  files = [],
  selected,
  setSelected,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-8">

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-5 text-left font-semibold">
                Name
              </th>

              <th className="px-6 py-5 text-left font-semibold">
                Type
              </th>

              <th className="px-6 py-5 text-left font-semibold">
                Size
              </th>

              <th className="px-6 py-5 text-left font-semibold">
                Date
              </th>

              <th className="w-20"></th>

            </tr>

          </thead>

          <tbody>

            {folders.map((folder) => (

              <tr
                key={folder.id}
                onClick={() =>
                  setSelected(folder)
                }
                className={`cursor-pointer border-t transition hover:bg-gray-50 ${
                  selected?.id === folder.id
                    ? "bg-gray-100"
                    : ""
                }`}
              >

                <td className="flex items-center gap-4 px-6 py-5">

                  <FiFolder
                    size={26}
                    className="text-yellow-500"
                  />

                  {folder.name}

                </td>

                <td>{folder.type}</td>

                <td>{folder.size}</td>

                <td>{folder.modified}</td>

                <td>

                  <FolderMenu />

                </td>

              </tr>

            ))}

            {files.map((file) => (

              <tr
                key={file.id}
                className="border-t transition hover:bg-gray-50"
              >

                <td className="flex items-center gap-4 px-6 py-5">

                  <FiFileText
                    size={24}
                    className="text-blue-500"
                  />

                  {file.name}

                </td>

                <td>{file.type}</td>

                <td>{file.size}</td>

                <td>{file.date}</td>

                <td>

                  <FolderMenu />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default FileTable;