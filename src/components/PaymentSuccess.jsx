"use client";
import { CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
// import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="md:w-[30%] rounded-2xl bg-[#161616] flex items-center justify-center p-4">
      <div className="max-w-md w-full  text-white">
        {/* Success Icon */}
        <div className="flex flex-col items-center space-y-3">
          <CheckCircle className="w-14 h-14 text-green-500" />
          <h1 className="text-2xl font-bold">Payment Successful!</h1>
          <p className="text-gray-400 text-center text-sm">
            Thank you for booking your inspection. We&apos;ll be in touch
            shortly with details.
          </p>
        </div>

        {/* Payment Info Card */}
        <div className="mt-6 bg-gray-900 rounded-xl p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Amount Paid</span>
            <span className="text-green-500 font-semibold">₦4,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Payment Reference</span>
            <span className="text-white">REF-2024-0123456</span>
          </div>
          <div className="flex justify-between text-sm items-center">
            <span className="text-gray-400">Date &amp; Time</span>
            <span className="flex items-center gap-1 text-white">
              <Clock className="w-4 h-4 text-gray-400" />
              Jan 24, 2024 15:30
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition">
            Continue as Guest
          </button>
          <Link
            to="/signup"
            className="w-full block text-center py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold"
          >
            Create an Account
          </Link>
          <Link
            to="/login"
            className="w-full block text-center py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            Log In
          </Link>
        </div>

        {/* Why Create Account */}
        <div className="mt-6 bg-gray-900 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Why Create an Account?</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>✔ Save favorite properties</li>
            <li>✔ Track inspection history</li>
            <li>✔ Quick booking process</li>
            <li>✔ Exclusive property alerts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
