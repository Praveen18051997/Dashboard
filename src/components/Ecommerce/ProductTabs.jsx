const ProductTabs = ({
  activeTab,
  setActiveTab,
  allCount,
  availableCount,
  disabledCount,
}) => {
  const tabs = [
    {
      name: "All",
      count: allCount,
    },
    {
      name: "Available",
      count: availableCount,
    },
    {
      name: "Disabled",
      count: disabledCount,
    },
  ];

  return (
    <div className="flex gap-2 mt-8">

      {tabs.map((tab) => (

        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`flex h-[30px] min-w-[60px] items-center gap-3 border border-gray-200 px-7 py-5 transition-all duration-300 ${
            activeTab === tab.name
              ? "bg-white text-gray-900 shadow-sm"
              : "bg-[#F8F8F8] text-gray-500 hover:bg-white"
          }`}
        >
          <span className="font-medium">
            {tab.name}
          </span>

          <span className="rounded-full px-2.5 py-1 text-xs font-semibold text-gray-500">
            {tab.count}
          </span>

        </button>

      ))}

    </div>
  );
};

export default ProductTabs;