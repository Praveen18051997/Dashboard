import {
  FiEdit3,
  FiInbox,
  FiStar,
  FiFileText,
  FiSend,
  FiAlertCircle,
  FiTrash2,
} from "react-icons/fi";

const labels = [
  { name: "Personal", color: "bg-blue-500" },
  { name: "Work", color: "bg-green-500" },
  { name: "Friends", color: "bg-yellow-500" },
  { name: "Family", color: "bg-red-500" },
  { name: "Social", color: "bg-purple-500" },
];

const MailSidebar = ({
  folder,
  setFolder,
  onCompose,
  mails,
}) => {
  const menu = [
    {
      icon: <FiInbox />,
      title: "Inbox",
    },
    {
      icon: <FiStar />,
      title: "Starred",
    },
    {
      icon: <FiFileText />,
      title: "Drafts",
    },
    {
      icon: <FiSend />,
      title: "Sent",
    },
    {
      icon: <FiAlertCircle />,
      title: "Important",
    },
    {
      icon: <FiTrash2 />,
      title: "Deleted",
    },
  ];

  const getCount = (title) => {
    if (title === "Starred") {
      return mails.filter((m) => m.starred).length;
    }

    if (title === "Important") {
      return mails.filter(
        (m) => m.label === "Important"
      ).length;
    }

    return mails.filter(
      (m) => m.folder === title
    ).length;
  };

  return (
    <aside className="w-full bg-white p-4 sm:p-5 lg:p-6 xl:w-72 xl:border-r xl:border-gray-200">

      {/* Compose */}

      <button
        onClick={onCompose}
        className="mb-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#21943A] py-3 text-sm font-semibold text-white transition hover:bg-[#1B7F33] sm:mb-8 sm:text-base"
      >
        <FiEdit3 />
        NEW MESSAGE
      </button>

      {/* Menu */}

      <div className="space-y-2">

        {menu.map((item) => (

          <button
            key={item.title}
            onClick={() => setFolder(item.title)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition sm:px-4 ${
              folder === item.title
                ? "bg-[#21943A] text-white"
                : "hover:bg-gray-100"
            }`}
          >

            <div className="flex min-w-0 items-center gap-3">

              <span className="text-lg">
                {item.icon}
              </span>

              <span className="truncate text-sm sm:text-base">
                {item.title}
              </span>

            </div>

            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                folder === item.title
                  ? "bg-white text-[#21943A]"
                  : "bg-gray-100 text-black"
              }`}
            >
              {getCount(item.title)}
            </span>

          </button>

        ))}

      </div>

      {/* Labels */}

      <div className="mt-8 sm:mt-10">

        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400 sm:text-sm">
          Labels
        </h3>

        <div className="space-y-3">

          {labels.map((label) => (

            <div
              key={label.name}
              className="flex items-center gap-3"
            >

              <div
                className={`h-3 w-3 rounded-full ${label.color}`}
              />

              <span className="text-sm sm:text-base">
                {label.name}
              </span>

            </div>

          ))}

        </div>

      </div>

    </aside>
  );
};

export default MailSidebar;
