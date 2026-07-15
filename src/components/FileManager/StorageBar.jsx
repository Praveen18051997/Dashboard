const StorageBar = ({
  used = 70,
}) => {
  return (
    <div>

      <div className="mb-3 flex items-center justify-between">

        <span className="font-medium text-gray-600">
          Storage
        </span>

        <span className="text-gray-500">
          {used}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-[#21943A]"
          style={{
            width: `${used}%`,
          }}
        />

      </div>

    </div>
  );
};

export default StorageBar;