import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiClipboard,
  FiSettings,
  FiLock,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

import avatar from "../assets/images/Avatar.png";

const ProfileDropdown = ({ open }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();

    toast.success("Account logged out successfully");

    navigate("/login", { replace: true });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.97 }}
          transition={{ duration: 0.22 }}
          className="absolute right-0 top-12 z-50 w-64 max-w-[90vw] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-2">
            <div className="flex items-center gap-4">
              <img
                src={avatar}
                alt="Avatar"
                className="w-11 h-11 rounded-full object-cover"
              />

              <div>
                <h3 className="text-[18px] font-semibold text-gray-900">
                  ArtTemplate
                </h3>

                <p className="text-sm text-gray-400">
                  Manager
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100"></div>

          {/* Menu */}
          <div className="space-y-1 px-4 py-0.5">

            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-5 w-full px-3 py-2 rounded-2xl hover:bg-gray-50 transition"
            >
              <FiUser className="text-base text-gray-500" />

              <span className="text-lg font-medium text-gray-700">
                My Profile
              </span>
            </button>

            <button className="flex w-full items-center gap-5 rounded-2xl px-3 py-2 hover:bg-gray-50 transition">
              <FiMail className="text-base text-gray-500" />

              <span className="text-lg font-medium text-gray-700">
                My Messages
              </span>
            </button>

            <button className="flex w-full items-center gap-5 rounded-2xl px-3 py-2 hover:bg-gray-50 transition">
              <FiClipboard className="text-base text-gray-500" />

              <span className="text-lg font-medium text-gray-700">
                My Tasks
              </span>
            </button>

          </div>

          <div className="border-t border-gray-100"></div>

          {/* Settings */}
          <div className="px-4 py-0.5">

            <button className="flex w-full items-center gap-5 rounded-2xl px-3 py-4">
              <FiSettings className="text-2xl text-gray-700" />

              <span className="text-lg font-medium text-gray-700">
                Settings
              </span>
            </button>

            <button className="mt-2 flex w-full items-center gap-5 rounded-2xl px-4 py-0.5 hover:bg-gray-50 transition">
              <FiLock className="text-2xl text-gray-500" />

              <span className="text-lg font-medium text-gray-700">
                Lock Screen
              </span>
            </button>

          </div>

          <div className="border-t border-gray-100"></div>

          {/* Logout */}
          <div className="px-4 py-0.5">

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-5 rounded-2xl px-4 py-3 hover:bg-red-50 transition"
            >
              <FiLogOut className="text-2xl text-red-500" />

              <span className="text-lg font-medium text-red-500">
                Logout
              </span>
            </button>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileDropdown;