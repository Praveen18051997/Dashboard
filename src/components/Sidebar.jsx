import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useCalendar } from "../context/CalendarContext";

import logo from "../assets/images/logo.png";

import {
  MdDashboard,
  MdChecklist,
  MdCalendarMonth,
  MdOutlineMailOutline,
  MdOutlineFolder,
  MdDescription,
  MdContacts,
  MdKeyboardArrowRight,
} from "react-icons/md";

import { BsChatDots } from "react-icons/bs";

import {
  FiSearch,
  FiCircle,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import { HiOutlineShoppingCart } from "react-icons/hi2";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Task",
    path: "/task",
    icon: <MdChecklist />,
  },
  {
    title: "E-Commerce",
    icon: <HiOutlineShoppingCart />,
    children: [
      {
        title: "Products",
        path: "/ecommerce",
      },
      {
        title: "Orders",
        path: "/orders",
      },
      {
        title: "Customers",
        path: "/customers",
      },
    ],
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <MdCalendarMonth />,
  },
  {
    title: "Mail",
    path: "/mail",
    icon: <MdOutlineMailOutline />,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <BsChatDots />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <MdOutlineFolder />,
  },
  {
    title: "File Manager",
    path: "/file-manager",
    icon: <MdOutlineFolder />,
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <MdDescription />,
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <MdContacts />,
  },
];

const Sidebar = () => {
  const [ecommerceOpen, setEcommerceOpen] =
    useState(false);

  const location = useLocation();

  const { collapsed } = useSidebar();

  const {
    calendarTypes,
    setCalendarTypes,
    selectedCategory,
    setSelectedCategory,
  } = useCalendar();

  const isCalendarPage =
    location.pathname === "/calendar";

  const isEcommerceRoute = [
    "/ecommerce",
    "/orders",
    "/customers",
  ].includes(location.pathname);

  const isEcommerceOpen =
    ecommerceOpen || isEcommerceRoute;

  const addCalendar = () => {
    const name = prompt("Calendar Name");

    if (!name?.trim()) return;

    if (
      calendarTypes.some(
        (item) =>
          item.name.toLowerCase() ===
          name.toLowerCase()
      )
    ) {
      alert("Calendar already exists.");
      return;
    }

    const colors = [
      "text-red-500",
      "text-cyan-500",
      "text-green-500",
      "text-yellow-500",
      "text-purple-500",
      "text-pink-500",
      "text-orange-500",
      "text-indigo-500",
    ];

    setCalendarTypes((prev) => [
      ...prev,
      {
        name,
        color:
          colors[
            Math.floor(
              Math.random() *
                colors.length
            )
          ],
      },
    ]);
  };

  const deleteCalendar = (name) => {
    const defaults = [
      "Important",
      "Meeting",
      "Event",
      "Work",
      "Other",
    ];

    if (defaults.includes(name)) {
      alert(
        "Default calendars cannot be deleted."
      );
      return;
    }

    if (
      !window.confirm(
        `Delete "${name}"?`
      )
    )
      return;

    setCalendarTypes((prev) =>
      prev.filter(
        (item) =>
          item.name !== name
      )
    );

    if (selectedCategory === name) {
      setSelectedCategory("All");
    }
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-50 hidden h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 lg:flex ${
        collapsed ? "w-[70px]" : "w-[250px]"
      }`}
    >

      {/* Logo */}

      <div className="px-6 pb-6 pt-4">

        <img
          src={logo}
          alt="Logo"
          className={`${collapsed ? "w-10 mx-auto" : "w-32"} object-contain transition-all`}
        />

      </div>

      {/* Search */}

      {!collapsed && (
      <div className="px-4">

        <div className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-3">

          <FiSearch className="text-lg text-gray-400" />

          <input
            type="text"
            placeholder="Search anything"
            className="w-full bg-transparent text-sm outline-none"
          />

        </div>

      </div>
      )}

      {/* Heading */}

      {!collapsed && (
      <h4 className="mb-3 mt-5 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Main Menu
      </h4>
      )}

      <nav className="flex-1 overflow-y-auto px-3 pb-5">

          {menuItems.map((item) => (

            <div
              key={item.title}
              className="mb-2"
            >

              {item.children ? (

                <>
                  <button
                    type="button"
                    onClick={() =>
                      setEcommerceOpen(!ecommerceOpen)
                    }
                    className={`w-full rounded-xl transition-all duration-300 ${
                      collapsed
                        ? "flex justify-center py-3"
                        : "flex items-center justify-between px-4 py-3"
                    } ${
                      isEcommerceOpen
                        ? "bg-[#B8EF84] text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >

                    <div
                      className={`flex items-center ${
                        collapsed
                          ? ""
                          : "gap-4"
                      }`}
                    >

                      <span className="text-xl">
                        {item.icon}
                      </span>

                      {!collapsed && (
                        <span className="text-[15px] font-medium">
                          {item.title}
                        </span>
                      )}

                    </div>

                    {!collapsed && (
                      <MdKeyboardArrowRight
                        className={`transition-transform ${
                          isEcommerceOpen
                            ? "rotate-90"
                            : ""
                        }`}
                      />
                    )}

                  </button>

                  {!collapsed &&
                    isEcommerceOpen && (

                      <div className="ml-8 mt-2 space-y-1">

                        {item.children.map((child) => (

                          <NavLink
                            key={child.title}
                            to={child.path}
                            className={({ isActive }) =>
                              `flex items-center gap-3 rounded-lg px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-[#E9F9D9] font-medium"
                                  : "hover:bg-gray-100"
                              }`
                            }
                          >

                            <span className="h-2 w-2 rounded-full bg-gray-500"></span>

                            {child.title}

                          </NavLink>

                        ))}

                      </div>

                    )}

                </>

              ) : (

                <NavLink
                  to={item.path}
                  onClick={() =>
                    setEcommerceOpen(false)
                  }
                  className={() => {

                    const isDashboard =
                      item.title ===
                        "Dashboard" &&
                      [
                        "/dashboard",
                        "/profile",
                        "/timeline",
                      ].includes(
                        location.pathname
                      );

                    const active =
                      isDashboard ||
                      location.pathname ===
                        item.path;

                    return `rounded-xl transition-all duration-300 ${
                      collapsed
                        ? "flex justify-center py-3"
                        : "flex items-center justify-between px-4 py-3"
                    } ${
                      active
                        ? "bg-[#B8EF84] text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`;

                  }}
                >

                  <div
                    className={`flex items-center ${
                      collapsed
                        ? ""
                        : "gap-4"
                    }`}
                  >

                    <span className="text-xl">
                      {item.icon}
                    </span>

                    {!collapsed && (
                      <span className="text-[15px] font-medium">
                        {item.title}
                      </span>
                    )}

                  </div>

                  {!collapsed &&
                    item.badge && (

                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                        {item.badge}
                      </span>

                    )}

                </NavLink>

              )}

            </div>

          ))}

        {/* Calendar Section */}

          {isCalendarPage && (
            <div className="mt-8 border-t border-gray-200 pt-6">

              {!collapsed && (
                <div className="mb-4 flex items-center justify-between px-3">

                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Calendars
                  </h4>

                  <button
                    onClick={addCalendar}
                    className="rounded-lg bg-[#21943A] p-2 text-white hover:bg-[#1B7F33]"
                  >
                    <FiPlus size={14} />
                  </button>

                </div>
              )}

              {/* All Events */}

              <button
                onClick={() => setSelectedCategory("All")}
                className={`mb-3 w-full rounded-xl transition ${
                  selectedCategory === "All"
                    ? "bg-[#B8EF84]"
                    : "hover:bg-gray-100"
                } ${
                  collapsed
                    ? "flex justify-center py-3"
                    : "flex items-center gap-3 px-3 py-3"
                }`}
              >

                <div className="h-3 w-3 rounded-full border-2 border-current"></div>

                {!collapsed && (
                  <span className="text-sm font-medium">
                    All Events
                  </span>
                )}

              </button>

              <div className="space-y-2">

                {calendarTypes.map((item) => (

                  <div
                    key={item.name}
                    className={`group rounded-xl transition hover:bg-gray-100 ${
                      collapsed
                        ? "flex justify-center py-3"
                        : "flex items-center justify-between px-3 py-3"
                    }`}
                  >

                    <button
                      onClick={() =>
                        setSelectedCategory(item.name)
                      }
                      className={`flex items-center ${
                        collapsed ? "" : "gap-3 flex-1"
                      } ${
                        selectedCategory === item.name
                          ? "font-semibold text-[#21943A]"
                          : ""
                      }`}
                    >

                      <FiCircle
                        className={`${item.color} fill-current`}
                      />

                      {!collapsed && (
                        <span className="text-sm">
                          {item.name}
                        </span>
                      )}

                    </button>

                    {!collapsed &&
                      ![
                        "Important",
                        "Meeting",
                        "Event",
                        "Work",
                        "Other",
                      ].includes(item.name) && (

                        <button
                          onClick={() =>
                            deleteCalendar(item.name)
                          }
                          className="opacity-0 transition group-hover:opacity-100"
                        >
                          <FiTrash2
                            size={15}
                            className="text-red-500"
                          />
                        </button>

                      )}

                  </div>

                ))}

              </div>

            </div>
          )}

      </nav>

    </aside>
  );
};

export default Sidebar;