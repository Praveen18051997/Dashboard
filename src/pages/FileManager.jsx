import { useEffect, useMemo, useState } from "react";

import Layout from "../components/Layout";

import FileSidebar from "../components/FileManager/FileSidebar";
import FileToolbar from "../components/FileManager/FileToolbar";
import FolderGrid from "../components/FileManager/FolderGrid";
import FileTable from "../components/FileManager/FileTable";
import FileDetails from "../components/FileManager/FileDetails";
import UploadModal from "../components/FileManager/UploadModal";

import {
  defaultFolders,
  defaultFiles,
} from "../components/FileManager/FileData";

const FileManager = () => {
  const [folders] = useState(() => {
    const saved = localStorage.getItem("folders");
    return saved ? JSON.parse(saved) : defaultFolders;
  });

  const [files] = useState(() => {
    const saved = localStorage.getItem("files");
    return saved ? JSON.parse(saved) : defaultFiles;
  });

  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(defaultFolders[1]);
  const [uploadOpen, setUploadOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
    localStorage.setItem("files", JSON.stringify(files));
  }, [folders, files]);

  const filteredFolders = useMemo(() => {
    return folders.filter((folder) =>
      folder.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [folders, search]);

  const filteredFiles = useMemo(() => {
    return files.filter((file) =>
      file.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [files, search]);

  return (
    <Layout>

      <div className="flex flex-col xl:flex-row h-auto xl:h-[calc(100vh-90px)] overflow-hidden rounded-3xl bg-white shadow-sm">

        {/* Left Sidebar */}
        <div className="w-full xl:w-auto border-b xl:border-b-0 xl:border-r border-gray-200">
          <FileSidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col min-w-0">

          <FileToolbar
            search={search}
            setSearch={setSearch}
            view={view}
            setView={setView}
            onUpload={() => setUploadOpen(true)}
          />

          <div className="flex-1 overflow-auto">

            {view === "grid" ? (
              <FolderGrid
                folders={filteredFolders}
                files={filteredFiles}
                selected={selected}
                setSelected={setSelected}
              />
            ) : (
              <FileTable
                folders={filteredFolders}
                files={filteredFiles}
                selected={selected}
                setSelected={setSelected}
              />
            )}

          </div>

        </div>

        {/* Details Panel */}
        <div className="w-full xl:w-[320px] border-t xl:border-t-0 xl:border-l border-gray-200">
          <FileDetails
            selected={selected}
          />
        </div>

      </div>

      <UploadModal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
      />

    </Layout>
  );
};

export default FileManager;