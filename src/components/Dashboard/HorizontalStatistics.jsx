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
  { day: "25", income: 50, expense: -90 },
  { day: "24", income: 160, expense: -150 },
  { day: "23", income: 210, expense: -200 },
  { day: "22", income: 320, expense: -160 },
  { day: "21", income: 150, expense: -280 },
  { day: "20", income: 240, expense: -170 },
  { day: "19", income: 120, expense: -90 },
];

const HorizontalStatistics = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm h-[600px] p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-30">

        <h2 className="text-3xl font-semibold text-gray-900">
          Statistics
        </h2>

        <div className="flex items-center gap-8">

          {/* Legend */}
          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-600"></span>
              <span className="text-gray-600 text-sm">
                Income
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
              <span className="text-gray-600 text-sm">
                Expense
              </span>
            </div>

          </div>

          {/* Calendar */}
          <button className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-3 text-gray-700 hover:bg-gray-50 transition">

            <FiCalendar className="text-lg" />

            <span className="font-medium">
              19 Aug – 25 Aug
            </span>

            <FiChevronDown />

          </button>

        </div>

      </div>

      {/* Chart */}
      <div className="h-[285px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 0,
            }}
            barCategoryGap="24%"
          >

            <CartesianGrid
              horizontal={false}
              stroke="#ECECEC"
            />

            <XAxis
              type="number"
              domain={[-400, 400]}
              tick={{ fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              dataKey="day"
              type="category"
              tick={{ fontSize: 14 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
            />

            <Bar
              dataKey="income"
              fill="#22A63F"
              radius={[12, 12, 12, 12]}
              barSize={18}
            />

            <Bar
              dataKey="expense"
              fill="#49D5C8"
              radius={[12, 12, 12, 12]}
              barSize={18}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default HorizontalStatistics;