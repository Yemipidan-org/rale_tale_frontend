"use client";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = await loginUser(formData);

      // Save access token in localStorage
      localStorage.setItem("accessToken", data.access);

      setSuccess("Login successful! Redirecting...");
      console.log("Login Response:", data);

      // Redirect to dashboard or profile
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          Object.values(err.response?.data || {}).flat().join(" ") ||
          "Login failed"
      );
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-semibold text-black"
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-green-400 font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
