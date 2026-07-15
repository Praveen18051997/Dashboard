import { useState } from "react";
import {
  FiUpload,
  FiX,
} from "react-icons/fi";

const UploadModal = ({
  open,
  onClose,
}) => {
  const [progress, setProgress] =
    useState(0);

  if (!open) return null;

  const startUpload = () => {
    let value = 0;

    const timer = setInterval(() => {
      value += 10;

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Upload Files
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        <div className="rounded-3xl border-2 border-dashed border-gray-300 p-12 text-center">

          <FiUpload
            size={70}
            className="mx-auto text-[#21943A]"
          />

          <h3 className="mt-5 text-2xl font-semibold">

            Drag & Drop Files

          </h3>

          <p className="mt-2 text-gray-400">

            or click Upload

          </p>

          <button
            onClick={startUpload}
            className="mt-8 rounded-xl bg-[#21943A] px-8 py-3 text-white transition hover:bg-[#1b7d32]"
          >
            Upload
          </button>

        </div>

        {progress > 0 && (

          <div className="mt-8">

            <div className="mb-2 flex justify-between">

              <span>Uploading...</span>

              <span>{progress}%</span>

            </div>

            <div className="h-3 rounded-full bg-gray-200">

              <div
                className="h-full rounded-full bg-[#21943A] transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default UploadModal;