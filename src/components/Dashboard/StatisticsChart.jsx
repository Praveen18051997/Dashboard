import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { FiCalendar, FiChevronDown } from "react-icons/fi";

const data = [
  { day: "Mon", income: 190, expense: 340 },
  { day: "Tue", income: 100, expense: 260 },
  { day: "Wed", income: 245, expense: 380 },
  { day: "Thu", income: 190, expense: 260 },
  { day: "Fri", income: 200, expense: 370 },
  { day: "Sat", income: 180, expense: 325 },
  { day: "Sun", income: 150, expense: 220 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl px-5 py-3 border border-gray-100">
      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-600"></span>
          <span className="font-semibold">
            {payload[0].value}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
          <span className="font-semibold">
            {payload[1].value}
          </span>
        </div>

      </div>

      <p className="text-gray-400 mt-2">
        {label}
      </p>
    </div>
  );
};

const StatisticsChart = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 h-[600px]">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-semibold text-gray-800">
          Statistics
        </h2>

        <button className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-3 text-gray-700 hover:bg-gray-50 transition">

          <FiCalendar className="text-xl" />

          <span>19 Aug - 25 Aug</span>

          <FiChevronDown />

        </button>

      </div>

      <ResponsiveContainer width="100%" height="75%">

        <BarChart
          data={data}
          barGap={8}
        >

          <CartesianGrid
            stroke="#EEF2F7"
            vertical={false}
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            domain={[0, 400]}
            ticks={[0,100,200,300,400]}
          />

          <Tooltip
            cursor={false}
            content={<CustomTooltip />}
          />

          <Bar
            dataKey="income"
            fill="#20B24B"
            radius={[14,14,14,14]}
            barSize={18}
          />

          <Bar
            dataKey="expense"
            fill="#4DD7D0"
            radius={[14,14,14,14]}
            barSize={18}
          />

        </BarChart>

      </ResponsiveContainer>

      {/* Legend */}

      <div className="flex justify-end gap-8 mt-4">

        <div className="flex items-center gap-2">

          <span className="w-3 h-3 rounded-full bg-green-600"></span>

          <span className="text-gray-500">
            Income
          </span>

        </div>

        <div className="flex items-center gap-2">

          <span className="w-3 h-3 rounded-full bg-cyan-400"></span>

          <span className="text-gray-500">
            Expense
          </span>

        </div>

      </div>

    </div>
  );
};

export default StatisticsChart;