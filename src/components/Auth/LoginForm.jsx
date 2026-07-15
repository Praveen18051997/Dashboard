import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

import googleIcon from "../../assets/images/google.png";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (!form.password) {
      toast.error("Password is required");
      return;
    }

    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    const success = login(form.email, form.password);

    if (!success) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login Successful");

    navigate("/dashboard");
  };

  return (
    <div className="w-full">

      {/* Heading */}

      <h1 className="text-center text-[46px] font-bold leading-tight text-[#404040]">
        Login To Your Account
      </h1>

      {/* Google */}

            <button
        type="button"
        onClick={() => toast("Google Sign-In coming soon!")}
        className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white transition hover:bg-gray-50"
        >
        <img
            src={googleIcon}
            alt="Google"
            className="w-6 h-6"
        />

        <span className="text-gray-700 font-medium">
            Login with Google
        </span>
        </button>

      {/* Divider */}

      <div className="my-10 flex items-center">

        <div className="h-px flex-1 bg-gray-200"></div>

        <span className="px-4 text-[11px] font-medium uppercase tracking-wider text-gray-400">
          OR LOGIN WITH EMAIL
        </span>

        <div className="h-px flex-1 bg-gray-200"></div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Email */}

        <div>

          <label className="mb-3 block text-[16px] font-medium text-[#6B7280]">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="cooper@example.com"
            value={form.email}
            onChange={handleChange}
            className="h-14 w-full rounded-xl border border-gray-200 px-5 text-[16px] outline-none transition focus:border-[#21943A]"
          />

        </div>

        {/* Password */}

        <div>

          <label className="mb-3 block text-[16px] font-medium text-[#6B7280]">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-gray-200 px-5 pr-14 text-[16px] outline-none transition focus:border-[#21943A]"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#21943A]"
            >
              {showPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="h-5 w-5 accent-[#21943A]"
            />

            <span className="text-[15px] text-gray-600">
              Remember Me
            </span>

          </label>

            <Link
            to="/reset-password"
            className="text-[#21943A] hover:underline"
            >
            Forgot Password?
            </Link>

        </div>

        {/* Login */}

        <button
          type="submit"
          className="mt-2 h-14 w-full rounded-xl bg-[#21943A] text-lg font-semibold text-white transition hover:bg-[#1b7f33]"
        >
          Log In
        </button>

      </form>

      {/* Footer */}

      <p className="mt-12 text-center text-[15px] text-gray-500">

        Don't have an account?{" "}

        <Link
          to="/signup"
          className="font-semibold text-[#21943A] hover:underline"
        >
          Sign Up
        </Link>

      </p>

    </div>
  );
};

export default LoginForm;