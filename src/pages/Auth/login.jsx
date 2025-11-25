"use client";
import { Mail, Lock, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const getRoleDashboardPath = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "/superAdmin";
      case "owner":
      case "agent":
        return "/propertyOwner";
      case "user":
      default:
        return "/dashboard";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setErrors({});

    // Client-side validation
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const data = await loginUser(formData);

      // Save tokens and user info in localStorage
      localStorage.setItem("accessToken", data.access);
      if (data.refresh) {
        localStorage.setItem("refreshToken", data.refresh);
      }

      // Store user role if available in response
      if (data.user) {
        localStorage.setItem("userRole", data.user.role);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess("Login successful! Redirecting...");
      console.log("Login Response:", data);

      // Redirect to dashboard based on role
      setTimeout(() => {
        const role = data.user?.role;
        const dashboardPath = getRoleDashboardPath(role);
        navigate(dashboardPath);
      }, 1500);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail ||
        Object.values(err.response?.data || {})
          .flat()
          .join(" ") ||
        "Login failed";

      setErrors({ submit: errorMessage });
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (fieldName) => errors[fieldName];
  const hasError = (fieldName) => !!errors[fieldName];

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>

        {/* Error Alert */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle
              className="text-red-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <p className="text-sm text-red-800">{errors.submit}</p>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle
              className="text-green-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <p className="text-sm font-medium text-green-800">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <div
              className={`flex items-center rounded-lg px-3 transition-all ${
                hasError("email")
                  ? "bg-red-900/30 border border-red-500"
                  : "bg-gray-800 border border-gray-700"
              }`}
            >
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none px-3 py-2 text-white placeholder-gray-500"
              />
            </div>
            {hasError("email") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("email")}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div
              className={`flex items-center rounded-lg px-3 transition-all ${
                hasError("password")
                  ? "bg-red-900/30 border border-red-500"
                  : "bg-gray-800 border border-gray-700"
              }`}
            >
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none px-3 py-2 text-white placeholder-gray-500"
              />
            </div>
            {hasError("password") && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {getFieldError("password")}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-semibold text-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-400 font-medium hover:text-green-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
