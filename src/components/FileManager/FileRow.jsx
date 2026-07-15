import {
  FiFolder,
  FiFileText,
} from "react-icons/fi";

import FolderMenu from "./FolderMenu";

const FileRow = ({
  item,
  isFolder,
  selected,
  setSelected,
}) => {
  return (
    <tr
      onClick={() =>
        isFolder && setSelected(item)
      }
      className={`border-t transition hover:bg-gray-50 ${
        isFolder
          ? "cursor-pointer"
          : ""
      } ${
        selected?.id === item.id
          ? "bg-gray-100"
          : ""
      }`}
    >
      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          {isFolder ? (
            <FiFolder
              size={24}
              className="text-yellow-500"
            />
          ) : (
            <FiFileText
              size={24}
              className="text-blue-500"
            />
          )}

          <span className="font-medium">
            {item.name}
          </span>

        </div>

      </td>

      <td className="px-6 py-5">
        {isFolder
          ? "Folder"
          : item.type.toUpperCase()}
      </td>

      <td className="px-6 py-5">
        {item.size}
      </td>

      <td className="px-6 py-5">
        {isFolder
          ? item.modified
          : item.date}
      </td>

      <td className="px-6 py-5 text-right">
        <FolderMenu />
      </td>

    </tr>
  );
};

export default FileRow;