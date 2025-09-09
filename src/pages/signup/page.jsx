"use client";
import { Mail, Lock, User, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center bg-gray-800 rounded-lg px-3">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent outline-none px-2 py-2 text-white"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-800 rounded-lg px-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none px-2 py-2 text-white"
              required
            />
          </div>

          {/* Telephone */}
          <div className="flex items-center bg-gray-800 rounded-lg px-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="telephone"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full bg-transparent outline-none px-2 py-2 text-white"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-800 rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent outline-none px-2 py-2 text-white"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center bg-gray-800 rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent outline-none px-2 py-2 text-white"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-semibold text-black"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 font-medium">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
