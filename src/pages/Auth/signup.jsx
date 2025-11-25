"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Phone number is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrors({});

    // Client-side validation
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://rale-tale-backend.onrender.com/api/users/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            telephone: formData.telephone,
            password: formData.password,
            confirm_password: formData.confirm_password,
            role: formData.role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle backend validation errors
        if (data && typeof data === "object") {
          const backendErrors = {};
          Object.keys(data).forEach((key) => {
            if (Array.isArray(data[key])) {
              backendErrors[key] = data[key][0];
            } else {
              backendErrors[key] = data[key];
            }
          });
          setErrors(backendErrors);
        } else {
          setErrors({ submit: "An error occurred. Please try again." });
        }
        return;
      }

      // Success
      setSuccess(true);
      setSuccessMessage("Account created successfully! Redirecting...");
      setFormData({
        fullName: "",
        email: "",
        telephone: "",
        password: "",
        confirm_password: "",
        role: "",
      });
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      setErrors({ submit: "Network error. Please try again later." });
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (fieldName) => errors[fieldName];
  const hasError = (fieldName) => !!errors[fieldName];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-4 py-8">
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

        {/* Success Alert */}
        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle
              className="text-green-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="text-sm font-medium text-green-800">
                {successMessage}
              </p>
            </div>
          </div>
        )}

        {/* General Submit Error */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle
              className="text-red-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <p className="text-sm text-red-800">{errors.submit}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none transition-all ${
                hasError("fullName")
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-green-500"
              }`}
            />
            {hasError("fullName") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("fullName")}
              </p>
            )}
          </div>

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
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none transition-all ${
                hasError("email")
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-green-500"
              }`}
            />
            {hasError("email") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("email")}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none transition-all ${
                hasError("telephone")
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-green-500"
              }`}
            />
            {hasError("telephone") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("telephone")}
              </p>
            )}
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
              className={`w-full border rounded-lg px-3 py-2 bg-white focus:outline-none transition-all ${
                hasError("role")
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-green-500"
              }`}
            >
              <option value="">Select a Role</option>
              <option value="owner">Owner</option>
              <option value="agent">Agent</option>
              <option value="user">User</option>
            </select>
            {hasError("role") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("role")}
              </p>
            )}
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
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none transition-all ${
                hasError("password")
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-green-500"
              }`}
            />
            {hasError("password") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("password")}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none transition-all ${
                hasError("confirm_password")
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-green-500"
              }`}
            />
            {hasError("confirm_password") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("confirm_password")}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition-all"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
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
