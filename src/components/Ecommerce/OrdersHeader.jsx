import { useState } from "react";

import {
  FiDownload,
  FiChevronDown,
  FiPrinter,
  FiFileText,
} from "react-icons/fi";

const OrdersHeader = () => {
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

  return (
    <div className="flex items-center justify-between mb-8">

      <h1 className="text-4xl font-semibold text-gray-800">
        Orders
      </h1>

      <div className="flex items-center gap-4">

        {/* Export */}
        <div className="relative">

          <button
            onClick={() => setShowExport(!showExport)}
            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm hover:shadow-md transition"
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
      </div>

    </div>
  );
};

export default OrdersHeader;