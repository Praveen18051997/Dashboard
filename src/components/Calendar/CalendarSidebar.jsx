import {
  FiPlus,
  FiCircle,
  FiTrash2,
} from "react-icons/fi";

const colors = [
  "text-red-500",
  "text-cyan-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
  "text-orange-500",
];

const CalendarSidebar = ({
  calendarTypes,
  setCalendarTypes,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
    } else {
      setSelectedCategory(category);
    }
  };

  const handleAddCalendar = () => {
    const name = prompt("Enter Calendar Name");

    if (!name?.trim()) return;

    const exists = calendarTypes.some(
      (item) =>
        item.name.toLowerCase() ===
        name.trim().toLowerCase()
    );

    if (exists) {
      alert("Calendar already exists.");
      return;
    }

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    setCalendarTypes((prev) => [
      ...prev,
      {
        name: name.trim(),
        color: randomColor,
      },
    ]);
  };

  const handleDeleteCalendar = (name) => {
    const defaults = [
      "Important",
      "Meeting",
      "Event",
      "Work",
      "Other",
    ];

    if (defaults.includes(name)) {
      alert("Default calendars cannot be deleted.");
      return;
    }

    if (!window.confirm(`Delete "${name}" ?`))
      return;

    setCalendarTypes((prev) =>
      prev.filter((item) => item.name !== name)
    );

    if (selectedCategory === name) {
      setSelectedCategory("All");
    }
  };

  return (
    <aside className="w-[220px] shrink-0 border-r border-gray-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">

        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Calendars
        </h3>

        <button
          onClick={handleAddCalendar}
          className="rounded-lg bg-[#21943A] p-2 text-white transition hover:bg-[#1B7F33]"
        >
          <FiPlus size={16} />
        </button>

      </div>

      {/* Body */}
      <div className="p-5">

        {/* All Events */}

        <button
          onClick={() => setSelectedCategory("All")}
          className={`mb-6 flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
            selectedCategory === "All"
              ? "bg-[#21943A] text-white shadow"
              : "hover:bg-gray-100"
          }`}
        >
          <div className="h-4 w-4 rounded-full border-2 border-current"></div>

          <span className="font-semibold">
            All Events
          </span>

        </button>

        {/* Categories */}

        <div className="space-y-2">

          {calendarTypes.map((item) => {

            const active =
              selectedCategory === item.name;

            return (

              <div
                key={item.name}
                className={`group flex items-center justify-between rounded-xl px-3 py-3 transition ${
                  active
                    ? "bg-[#21943A] text-white shadow"
                    : "hover:bg-gray-100"
                }`}
              >

                <button
                  onClick={() =>
                    handleCategoryClick(item.name)
                  }
                  className="flex flex-1 items-center gap-3"
                >

                  <FiCircle
                    className={
                      active
                        ? "fill-current"
                        : `${item.color} fill-current`
                    }
                  />

                  <span className="font-medium text-sm">
                    {item.name}
                  </span>

                </button>

                {![
                  "Important",
                  "Meeting",
                  "Event",
                  "Work",
                  "Other",
                ].includes(item.name) && (

                  <button
                    onClick={() =>
                      handleDeleteCalendar(item.name)
                    }
                    className={`opacity-0 transition group-hover:opacity-100 ${
                      active
                        ? "text-white"
                        : "text-red-500"
                    }`}
                  >
                    <FiTrash2 size={15} />
                  </button>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </aside>
  );
};

export default CalendarSidebar;