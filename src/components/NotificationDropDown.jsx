import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import avatar from "../assets/images/Avatar.png";

const notifications = [
  {
    id: 1,
    name: "Regina Cooper",
    time: "1 min ago",
  },
  {
    id: 2,
    name: "Judith Black",
    time: "5 min ago",
    active: true,
  },
  {
    id: 3,
    name: "Ronald Robertson",
    time: "3 hour ago",
  },
  {
    id: 4,
    name: "Dustin Williamson",
    time: "15 hour ago",
  },
  {
    id: 5,
    name: "Calvin Flores",
    time: "Yesterday",
  },
  {
    id: 6,
    name: "Robert Edwards",
    time: "Yesterday",
  },
];

const NotificationDropdown = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="absolute right-0 top-16 z-50
                     w-[340px] max-w-[90vw]
                     bg-white rounded-3xl shadow-2xl
                     overflow-hidden border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Notifications
            </h2>

            <span className="w-6 h-6 rounded-xl bg-red-400 text-white text-sm font-semibold flex items-center justify-center">
              8
            </span>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* List */}
          <div className="max-h-[520px] overflow-y-auto py-1">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`mx-2 mb-1 rounded-2xl px-3 py-2.5 flex items-center justify-between transition ${
                  item.active ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <span className="absolute bottom-0 right-0 w-3.5 h-2.5 rounded-full bg-green-400 border-2 border-white"></span>
                  </div>

                  {/* Name */}
                  <div>
                    <h3 className="text-base font-medium text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 text-xs">
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Close icon */}
                {item.active && (
                  <button className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-200 transition">
                    <FiX className="text-base text-gray-500" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationDropdown;