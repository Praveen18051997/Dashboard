import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import { useSidebar } from "../context/SidebarContext";

const Layout = ({ children }) => {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[#F8F9FB]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className={`min-h-screen flex flex-col transition-all duration-300
        ml-0
        ${collapsed ? "lg:ml-[70px]" : "lg:ml-[250px]"}`}
      >

        <Navbar />

        <main className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>

      </div>

    </div>
  );
};

export default Layout;