import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

import googleIcon from "../../assets/images/google.png";

const SignupForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
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
    const user = {
  fullname: form.fullname,
  email: form.email,
  password: form.password,
};

localStorage.setItem("user", JSON.stringify(user));

    // Full Name Validation
    if (!form.fullname.trim()) {
      toast.error("Full name is required");
      return;
    }

    // Email Validation
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

    // Password Validation
    if (!form.password) {
      toast.error("Password is required");
      return;
    }

    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    // Confirm Password
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Terms
    if (!form.terms) {
      toast.error("Please accept Terms & Conditions");
      return;
    }

    // Get Existing Users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check Duplicate Email
    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() ===
        form.email.toLowerCase()
    );

    if (existingUser) {
      toast.error("Email already registered");
      return;
    }

    // Save User
    const newUser = {
      fullname: form.fullname,
      email: form.email,
      password: form.password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    toast.success("Account created successfully");

    // Reset Form
    setForm({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="w-full">

      {/* Heading */}
      <h1 className="text-center text-[46px] font-bold leading-tight text-[#404040]">
        Create Account
      </h1>

      {/* Google Button */}
            <button
        type="button"
        onClick={() => toast("Google Sign-Up coming soon!")}
        className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white transition hover:bg-gray-50"
        >
        <img
            src={googleIcon}
            alt="Google"
            className="w-6 h-6"
        />

        <span className="text-gray-700 font-medium">
            Sign Up with Google
        </span>
        </button>

      {/* Divider */}
      <div className="my-10 flex items-center">
        <div className="h-px flex-1 bg-gray-200"></div>

        <span className="px-4 text-[11px] font-medium uppercase tracking-wider text-gray-400">
          OR SIGN UP WITH EMAIL
        </span>

        <div className="h-px flex-1 bg-gray-200"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="mb-3 block text-[16px] font-medium text-[#6B7280]">
            Full Name
          </label>

          <input
            type="text"
            name="fullname"
            placeholder="Regina Cooper"
            value={form.fullname}
            onChange={handleChange}
            className="h-14 w-full rounded-xl border border-gray-200 px-5 text-[16px] outline-none transition focus:border-[#21943A]"
          />
        </div>

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
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#21943A]"
            >
              {showPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-3 block text-[16px] font-medium text-[#6B7280]">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-gray-200 px-5 pr-14 text-[16px] outline-none transition focus:border-[#21943A]"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#21943A]"
            >
              {showConfirmPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="h-5 w-5 accent-[#21943A]"
          />

          <span className="text-[15px] text-gray-600">
            I accept the{" "}
            <span className="font-medium text-[#21943A]">
              Terms & Conditions
            </span>
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 h-14 w-full rounded-xl bg-[#21943A] text-lg font-semibold text-white transition hover:bg-[#1B7F33]"
        >
          Create Account
        </button>
      </form>

      {/* Footer */}
      <p className="mt-12 text-center text-[15px] text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#21943A] hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;