import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  percentage,
  positive,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="flex min-h-[140px] items-center justify-between rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm transition-all sm:px-6"
    >
      {/* Left */}

      <div className="flex-1 min-w-0">

        <p className="text-sm text-gray-400 sm:text-base lg:text-lg">
          {title}
        </p>

        <div className="mt-3 flex flex-wrap items-end gap-2 sm:gap-3">

          <h2 className="text-3xl font-bold leading-none text-gray-800 sm:text-4xl xl:text-[52px]">
            {value}
          </h2>

          <span
            className={`mb-1 text-sm font-semibold sm:text-base lg:text-lg ${
              positive
                ? "text-green-500"
                : "text-red-400"
            }`}
          >
            {percentage}
          </span>

        </div>

      </div>

      {/* Right */}

      <div className="ml-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-50 sm:h-20 sm:w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32">

        <div className="scale-75 sm:scale-90 lg:scale-100">
          {icon}
        </div>

      </div>

    </motion.div>
  );
};

export default StatCard;