import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F7FBFB] flex items-center justify-center overflow-hidden relative">

      {/* Background Circles */}
      <div className="absolute w-[1200px] h-[1200px] border border-[#EAF4F2] rounded-full"></div>
      <div className="absolute w-[900px] h-[900px] border border-[#EDF6F5] rounded-full"></div>
      <div className="absolute w-[650px] h-[650px] border border-[#F1F8F7] rounded-full"></div>

      <div className="relative z-10 text-center">

        <h1 className="text-[180px] leading-none font-extrabold text-[#21943A]">
          404
        </h1>

        <h2 className="mt-6 text-[56px] font-semibold text-[#404040]">
          We can't seem to find that
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 mt-12 bg-[#21943A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1b7d31] transition"
        >
          <FiArrowLeft size={20} />
          Back to Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;