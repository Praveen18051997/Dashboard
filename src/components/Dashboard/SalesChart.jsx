import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

import {
  FiMoreHorizontal,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";

const data = [
  {
    name: "Current Week",
    value: 2500,
    fill: "#1FAF43",
  },
  {
    name: "Last Week",
    value: 1000,
    fill: "#46D5CC",
  },
];

const SalesChart = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm h-[600px] p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-semibold text-gray-800">
          Sales
        </h2>

        <button className="text-gray-400 hover:text-gray-700">
          <FiMoreHorizontal size={28} />
        </button>

      </div>

      {/* Circular Chart */}

      <div className="relative h-[300px] mt-3">

        <ResponsiveContainer width="100%" height="100%">

          <RadialBarChart
            innerRadius="78%"
            outerRadius="100%"
            barSize={16}
            startAngle={90}
            endAngle={-270}
            data={data}
          >
            <RadialBar
              background
              clockWise
              cornerRadius={20}
              dataKey="value"
            />
          </RadialBarChart>

        </ResponsiveContainer>

        {/* Center Text */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h3 className="text-5xl font-semibold text-gray-800">
            3.500
          </h3>

          <p className="text-gray-400 text-xl mt-1">
            Total
          </p>

        </div>

      </div>

      {/* Current Week */}

      <div className="flex items-center justify-between mt-10">

        <div className="flex items-center gap-3">

          <span className="w-3 h-3 rounded-full bg-green-600"></span>

          <span className="text-gray-500 text-lg">
            Current Week
          </span>

        </div>

        <span className="text-xl font-medium">
          2.500
        </span>

        <div className="flex items-center gap-1 text-green-500 font-semibold">

          <FiArrowUp />

          8.8%

        </div>

      </div>

      <hr className="my-5" />

      {/* Last Week */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <span className="w-3 h-3 rounded-full bg-cyan-400"></span>

          <span className="text-gray-500 text-lg">
            Last Week
          </span>

        </div>

        <span className="text-xl font-medium">
          1.000
        </span>

        <div className="flex items-center gap-1 text-red-400 font-semibold">

          <FiArrowDown />

          5.8%

        </div>

      </div>

    </div>
  );
};

export default SalesChart;