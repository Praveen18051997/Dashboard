import {
  FiSearch,
  FiPlus,
} from "react-icons/fi";

const ChatSidebar = ({
  teams,
  people,
  selectedChat,
  setSelectedChat,
  search,
  setSearch,
}) => {
  return (
    <aside className="w-full bg-white xl:w-[340px] xl:border-r xl:border-gray-200">

      {/* Search */}

      <div className="border-b border-gray-200 p-4 sm:p-5">

        <div className="relative">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search..."
            className="w-full rounded-xl bg-gray-100 py-3 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#21943A] sm:text-base"
          />

        </div>

      </div>

      <div className="max-h-[700px] overflow-y-auto xl:h-[calc(100vh-180px)]">

        {/* Teams */}

        <div className="px-4 pt-5 sm:px-6 sm:pt-6">

          <div className="mb-4 flex items-center justify-between">

            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 sm:text-sm">
              Teams
            </h3>

            <button className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
              <FiPlus size={14} />
            </button>

          </div>

          <div className="space-y-2">

            {teams.map((team) => {

              const active =
                selectedChat.id === team.id;

              return (

                <button
                  key={team.id}
                  onClick={() =>
                    setSelectedChat(team)
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition ${
                    active
                      ? "bg-[#EEF9F0]"
                      : "hover:bg-gray-100"
                  }`}
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <div
                      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-bold sm:h-12 sm:w-12 ${team.color}`}
                    >
                      {team.avatar}
                    </div>

                    <div className="min-w-0 text-left">

                      <h4 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                        {team.name}
                      </h4>

                      <p className="truncate text-xs text-gray-400 sm:text-sm">
                        {team.lastMessage}
                      </p>

                    </div>

                  </div>

                  {team.unread > 0 && (
                    <span className="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                      {team.unread}
                    </span>
                  )}

                </button>

              );
            })}

          </div>

        </div>

        {/* People */}

        <div className="px-4 pt-6 sm:px-6 sm:pt-8">

          <div className="mb-4 flex items-center justify-between">

            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 sm:text-sm">
              People
            </h3>

            <button className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
              <FiPlus size={14} />
            </button>

          </div>

          <div className="space-y-2">

            {people
              .filter((person) =>
                person.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((person) => {

                const active =
                  selectedChat.id === person.id;

                return (

                  <button
                    key={person.id}
                    onClick={() =>
                      setSelectedChat(person)
                    }
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition ${
                      active
                        ? "bg-[#EEF9F0]"
                        : "hover:bg-gray-100"
                    }`}
                  >

                    <div className="flex min-w-0 items-center gap-3">

                      <div className="relative flex-shrink-0">

                        <img
                          src={person.avatar}
                          alt={person.name}
                          className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
                        />

                        {person.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                        )}

                      </div>

                      <div className="min-w-0 text-left">

                        <h4 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                          {person.name}
                        </h4>

                        <p className="truncate text-xs text-gray-400 sm:text-sm">
                          {person.lastMessage}
                        </p>

                      </div>

                    </div>

                    {person.unread > 0 && (
                      <span className="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                        {person.unread}
                      </span>
                    )}

                  </button>

                );
              })}

          </div>

        </div>

      </div>

    </aside>
  );
};

export default ChatSidebar;