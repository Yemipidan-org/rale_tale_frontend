"use client";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/authService";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        telephone: formData.telephone,
        password: formData.password,
        confirm_password: formData.confirmPassword, // Match backend field name
      });

      setSuccess("Registration successful! You can now log in.");
      console.log("Register Response:", data);

      // redirect after success:
      // navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          Object.values(err.response?.data || {}).flat().join(" ") ||
          "Registration failed"
      );
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create an Account
        </h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
          />

          <div className="flex items-center">
            <Mail className="mr-2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <div className="flex items-center">
            <input
              type="text"
              name="telephone"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <div className="flex items-center">
            <Lock className="mr-2 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <div className="flex items-center">
            <Lock className="mr-2 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-semibold text-black"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
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