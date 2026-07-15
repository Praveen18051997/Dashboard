import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    // Read all users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email
    const userIndex = users.findIndex(
      (user) =>
        user.email.toLowerCase() ===
        form.email.toLowerCase()
    );

    if (userIndex === -1) {
      toast.error("Email does not exist");
      return;
    }

    // Update password
    const updatedUsers = [...users];

    updatedUsers[userIndex] = {
      ...updatedUsers[userIndex],
      password: form.password,
    };

    // Save updated users
    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    // Update current logged-in user (if any)
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (
      currentUser &&
      currentUser.email.toLowerCase() ===
        form.email.toLowerCase()
    ) {
      currentUser.password = form.password;

      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );
    }

    toast.success("Password updated successfully");

    // Clear form
    setForm({
      email: "",
      password: "",
      confirmPassword: "",
    });

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="w-full">

      {/* Lock Icon */}
      <div className="flex justify-center mb-8">

        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center">

          <span className="text-6xl">
            🔒
          </span>

        </div>

      </div>

      {/* Heading */}

      <h1 className="text-center text-[46px] font-bold text-[#404040]">
        Reset Your Password
      </h1>

      <p className="mt-2 text-center text-gray-500">
        Enter your email and choose a new password.
      </p>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 mt-10"
      >

        {/* Email */}

        <div>

          <label className="block mb-3 text-gray-500 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="cooper@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full h-14 border border-gray-200 rounded-xl px-5 outline-none focus:border-[#21943A]"
          />

        </div>

        {/* Password */}

        <div>

          <label className="block mb-3 text-gray-500 font-medium">
            New Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full h-14 border border-gray-200 rounded-xl px-5 pr-14 outline-none focus:border-[#21943A]"
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

          <label className="block mb-3 text-gray-500 font-medium">
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
              className="w-full h-14 border border-gray-200 rounded-xl px-5 pr-14 outline-none focus:border-[#21943A]"
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

        {/* Button */}

        <button
          type="submit"
          className="w-full h-14 rounded-xl bg-[#21943A] text-white text-lg font-semibold transition hover:bg-[#1B7F33]"
        >
          Reset Password
        </button>

      </form>

      {/* Footer */}

      <p className="text-center mt-10 text-gray-500">

        Go back to{" "}

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

export default ResetPasswordForm;