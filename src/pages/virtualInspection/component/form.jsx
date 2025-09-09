"use client";
import React, { useState } from "react";
import { Lock, CreditCard, Banknote, Wallet } from "lucide-react";

export default function ScheduleViewingForm() {
  const [paymentMethod, setPaymentMethod] = useState("visa");

  return (
    <div className="w-full md:w-[30%] bg-[#161616] text-white p-4 md:p-6 rounded-2xl shadow-md">
      {/* Title */}
      <h2 className="text-xl font-semibold">Schedule Viewing</h2>
      <p className="text-green-400 text-sm mt-1">₦4,000 per viewing</p>

      {/* Form Fields */}
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-zinc-700 focus:border-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-zinc-700 focus:border-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-zinc-700 focus:border-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Property ID</label>
          <input
            type="text"
            value="VIP-2024-001"
            readOnly
            className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-zinc-700 text-gray-400"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm mb-2">Payment Method</label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPaymentMethod("visa")}
              className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border ${
                paymentMethod === "visa"
                  ? "border-green-500 bg-zinc-900"
                  : "border-zinc-700 bg-zinc-800"
              }`}
            >
              <CreditCard className="w-5 h-5 text-green-500" /> VISA
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("cash")}
              className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border ${
                paymentMethod === "cash"
                  ? "border-green-500 bg-zinc-900"
                  : "border-zinc-700 bg-zinc-800"
              }`}
            >
              <Banknote className="w-5 h-5 text-gray-400" /> Cash
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("paypal")}
              className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border ${
                paymentMethod === "paypal"
                  ? "border-green-500 bg-zinc-900"
                  : "border-zinc-700 bg-zinc-800"
              }`}
            >
              <Wallet className="w-5 h-5 text-gray-400" /> PayPal
            </button>
          </div>
        </div>

        {/* Fees Section */}
        <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 text-sm flex flex-col sm:flex-row justify-between">
          <div>
            <p>Viewing Fee</p>
            <p>Processing Fee</p>
          </div>
          <div className="text-right mt-2 sm:mt-0">
            <p>₦4,000</p>
            <p>₦0</p>
          </div>
        </div>

        {/* Pay Button */}
        <button
          type="submit"
          className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Pay ₦4,000 Now
        </button>
      </form>

      {/* Secure Payment */}
      <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
        <Lock className="w-4 h-4" />
        Secure Payment
      </div>
    </div>
  );
}
