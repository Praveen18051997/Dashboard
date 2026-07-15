const CustomerTabs = ({
  activeTab,
  setActiveTab,
  allCount,
  activeCount,
  blockedCount,
}) => {
  const tabs = [
    {
      name: "All",
      count: allCount,
    },
    {
      name: "Active",
      count: activeCount,
    },
    {
      name: "Blocked",
      count: blockedCount,
    },
  ];

  return (
    <div className="mt-8 flex gap-2">

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

          <span className="text-lg font-semibold">
            {tab.name}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
            {tab.count}
          </span>

        </button>

      ))}

    </div>
  );
};

export default CustomerTabs;