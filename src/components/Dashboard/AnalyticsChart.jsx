import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  FiCalendar,
  FiChevronDown,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";

const data = [
  { day: "Mon", income: 0, expense: 0 },
  { day: "Tue", income: 80, expense: 40 },
  { day: "Wed", income: 60, expense: 100 },
  { day: "Thu", income: 180, expense: 40 },
  { day: "Fri", income: 90, expense: 130 },
  { day: "Sat", income: 250, expense: 95 },
  { day: "Sun", income: 320, expense: 50 },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl px-5 py-3 border border-gray-100">
      <h4 className="text-2xl font-semibold">
        $1.000
      </h4>

      <p className="text-gray-400 mt-1">
        22 August, 2019
      </p>
    </div>
  );
};

const AnalyticsChart = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 h-[600px]">

      {/* Header */}

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-semibold">
          Analytics
        </h2>

        <button className="flex items-center gap-3 border rounded-2xl px-5 py-3 border-gray-200">

          <FiCalendar />

          <span>
            19 Aug - 25 Aug
          </span>

          <FiChevronDown />

        </button>

      </div>

      {/* Top Stats */}

      <div className="flex gap-10 mt-7 mb-6">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">

            <FiArrowUp className="text-green-600 text-2xl" />

          </div>

          <h3 className="text-3xl font-semibold">
            $5.850
          </h3>

        </div>

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">

            <FiArrowDown className="text-cyan-500 text-2xl" />

          </div>

          <h3 className="text-3xl font-semibold">
            $1.750
          </h3>

        </div>

      </div>

      {/* Chart */}

      <ResponsiveContainer width="100%" height="60%">

        <AreaChart data={data}>

          <CartesianGrid
            vertical
            horizontal={false}
            stroke="#EEF2F7"
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            hide
          />

          <Tooltip
            cursor={false}
            content={<CustomTooltip />}
          />

          <Area
            type="linear"
            dataKey="expense"
            stroke="#55D7D1"
            strokeWidth={3}
            fill="#CFF7EF"
            fillOpacity={0.55}
            dot={{
              r:7,
              fill:"#fff",
              stroke:"#55D7D1",
              strokeWidth:4,
            }}
            activeDot={{
              r:8,
            }}
          />

          <Area
            type="linear"
            dataKey="income"
            stroke="#22B14C"
            strokeWidth={3}
            fill="#DDF8EA"
            fillOpacity={0.35}
            dot={{
              r:7,
              fill:"#fff",
              stroke:"#22B14C",
              strokeWidth:4,
            }}
            activeDot={{
              r:8,
            }}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
};

export default AnalyticsChart;