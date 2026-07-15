const ProjectTabs = ({
  status,
  setStatus,
  projects,
}) => {
  const tabs = [
    { name: "All" },
    { name: "Started" },
    { name: "On Hold" },
    { name: "Completed" },
  ];

  const getCount = (tab) => {
    if (tab === "All") return projects.length;

    return projects.filter(
      (project) => project.status === tab
    ).length;
  };

  return (
    <div className="flex items-center gap-8 border-b border-gray-200">

      {tabs.map((tab) => {

        const active =
          status === tab.name;

        return (

          <button
            key={tab.name}
            onClick={() =>
              setStatus(tab.name)
            }
            className={`relative flex items-center gap-2 pb-4 text-lg transition ${
              active
                ? "font-semibold text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >

            <span>{tab.name}</span>

            <span
              className={`rounded-md px-2 py-0.5 text-xs ${
                active
                  ? "bg-[#21943A] text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {getCount(tab.name)}
            </span>

            {active && (
              <span className="absolute bottom-0 left-0 h-0.75 w-full rounded-full bg-[#21943A]" />
            )}

          </button>

        );

      })}

    </div>
  );
};

export default ProjectTabs;