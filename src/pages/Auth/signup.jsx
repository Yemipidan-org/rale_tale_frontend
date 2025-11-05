"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic (API call, validation, etc.)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Sign Up for Raletale
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Create your account to start your journey.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@example.com"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">Select a Role</option>
              <option value="owner">Owner</option>
              <option value="agent">Agent</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-lg transition-all"
          >
            Sign Up
          </button>

          {/* OR divider */}
          {/* <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div> */}

          {/* Google Button */}
          {/* <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button> */}
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By signing up, you agree to Raletale{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms & Privacy
          </a>
        </p>
      </div>
    </div>
  );
}
