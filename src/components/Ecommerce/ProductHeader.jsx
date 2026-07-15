import { useState, useEffect, useRef } from "react";
import {
  FiDownload,
  FiChevronDown,
  FiPlus,
  FiGrid,
  FiList,
  FiPrinter,
  FiFileText,
} from "react-icons/fi";

const ProductHeader = ({ onAdd }) => {
  const [showExport, setShowExport] = useState(false);

  const downloadFile = (type) => {
    const content = "Orders Export";

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `orders.${type.toLowerCase()}`;

    link.click();

    URL.revokeObjectURL(url);

    setShowExport(false);
  };

  const exportRef = useRef(null);
  const [gridView, setGridView] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
        if (
        exportRef.current &&
        !exportRef.current.contains(e.target)
        ) {
        setShowExport(false);
        }
    };

    document.addEventListener("mousedown", handleClick);

    return () =>
        document.removeEventListener(
        "mousedown",
        handleClick
        );
    }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

      {/* Left */}
      <h1 className="text-4xl font-semibold text-gray-800">
        Products
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Export */}
        <div className="relative">

          <button
            onClick={() => setShowExport(!showExport)}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:shadow-md transition"
          >
            <FiDownload />
            Export
            <FiChevronDown />
          </button>

        {showExport && (

            <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-gray-100 bg-white shadow-xl overflow-hidden z-50">

              <button
                onClick={() => downloadFile("txt")}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <FiPrinter />

                Print
              </button>

              <button
                onClick={() => downloadFile("xlsx")}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <FiFileText />

                Excel
              </button>

              <button
                onClick={() => downloadFile("pdf")}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <FiFileText />

                PDF
              </button>

              <button
                onClick={() => downloadFile("csv")}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <FiFileText />

                CSV
              </button>

            </div>

          )}

        </div>

        {/* Add */}
        <button
          onClick={onAdd}
          className="w-12 h-12 rounded-xl bg-[#21943A] text-white flex items-center justify-center hover:bg-[#1b7f33]"
        >
          <FiPlus size={22} />
        </button>

        {/* View Toggle */}

        <div className="flex rounded-xl overflow-hidden border border-gray-200">

          <button
            onClick={() => setGridView(false)}
            className={`w-12 h-12 flex items-center justify-center ${
              !gridView
                ? "bg-[#21943A] text-white"
                : "bg-white"
            }`}
          >
            <FiList />
          </button>

          <button
            onClick={() => setGridView(true)}
            className={`w-12 h-12 flex items-center justify-center ${
              gridView
                ? "bg-[#21943A] text-white"
                : "bg-white"
            }`}
          >
            <FiGrid />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductHeader;