const ProgressBar = ({ progress }) => {
  const getColor = () => {
    if (progress >= 100) return "bg-green-600";
    if (progress >= 75) return "bg-[#21943A]";
    if (progress >= 50) return "bg-cyan-500";
    if (progress >= 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm text-gray-500">
          Progress
        </span>

        <span className="font-semibold text-gray-700">
          {progress}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">

        <div
          className={`h-full rounded-full transition-all duration-700 ${getColor()}`}
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
};

export default ProgressBar;