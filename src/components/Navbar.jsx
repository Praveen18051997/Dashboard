import { useEffect, useRef, useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";

import defaultAvatar from "../assets/images/Avatar.png";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropDown";

import { useSidebar } from "../context/SidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);

  const [showSearch, setShowSearch] =
    useState(false);

  const [currentUser] = useState(() => {
    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    return {
      fullname: user?.fullname || "Guest User",
      email: user?.email || "",
      role: user?.role || "User",
      profileImage:
        user?.profileImage || "",
    };
  });

  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    if (showSearch) {
      searchRef.current?.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(
          e.target
        )
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(
          e.target
        )
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 flex h-16 md:h-[72px] items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-5 md:px-6 lg:px-8">

      {/* Left */}

      <div className="flex items-center">

        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 text-xl transition hover:bg-gray-100 hover:text-[#21943A] md:text-2xl"
        >
          <FiMenu />
        </button>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">

        {/* Search */}

        <div className="relative">

          <button
            onClick={handleSearchClick}
            className="text-gray-600 transition hover:text-[#21943A]"
          >
            <FiSearch className="text-xl md:text-[22px]" />
          </button>

          {showSearch && (

            <div className="absolute right-0 top-12 z-50">

              <input
                ref={searchRef}
                type="text"
                placeholder="Search..."
                className="w-56 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-xl outline-none focus:border-[#21943A] sm:w-64 md:w-72"
              />

            </div>

          )}

        </div>

        {/* Notification */}

        <div
          className="relative"
          ref={notificationRef}
        >

          <button
            onClick={() => {
              setShowNotifications(
                (prev) => !prev
              );

              setShowProfile(false);
            }}
            className="relative text-gray-600 transition hover:text-[#21943A]"
          >

            <FiBell className="text-xl md:text-[22px]" />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </button>

          <NotificationDropdown
            open={showNotifications}
          />

        </div>

        {/* Divider */}

        <div className="hidden h-8 w-px bg-gray-200 sm:block"></div>

        {/* Profile */}

        <div
          className="relative"
          ref={profileRef}
        >

          <button
            onClick={() => {
              setShowProfile(
                (prev) => !prev
              );

              setShowNotifications(false);
            }}
            className="flex items-center gap-2 md:gap-3"
          >

            <img
              src={
                currentUser.profileImage ||
                defaultAvatar
              }
              alt="Profile"
              className="h-9 w-9 rounded-full object-cover md:h-10 md:w-10"
            />

            <div className="hidden xl:block text-left">

              <h4 className="text-sm font-semibold text-gray-800">
                {currentUser.fullname}
              </h4>

              <p className="text-xs text-gray-400">
                {currentUser.role}
              </p>

            </div>

            <FiChevronDown
              className={`hidden xl:block transition-transform duration-300 ${
                showProfile
                  ? "rotate-180"
                  : ""
              }`}
            />

          </button>

          <ProfileDropdown
            open={showProfile}
          />

        </div>

      </div>

    </header>
  );
};

export default Navbar;