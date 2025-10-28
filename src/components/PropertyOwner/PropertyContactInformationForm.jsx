"use client";
import React, { useState } from "react";

export default function PropertyContactInformationForm({
  initialData,
  onBack,
  onNext,
}) {
  const [contactInfo, setContactInfo] = useState(
    initialData || {
      developerName: "",
      rcNumber: "",
      ownerName: "",
      role: "",
      licenseNumber: "",
      phone: "",
      email: "",
      verificationStatus: "Verified",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(contactInfo);
  };

  const inputStyle =
    "w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-600 transition";

  const cardStyle =
    "bg-[#181818] p-5 rounded-xl border border-transparent hover:border-[#2a2a2a] transition space-y-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">
        Contact & Verification Information
      </h2>

      {/* ===== Developer / Builder Info ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">
          Developer/Builder Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="developerName"
            placeholder="e.g., Raletale Developments"
            value={contactInfo.developerName}
            onChange={handleChange}
            className={inputStyle}
          />
          <input
            type="text"
            name="rcNumber"
            placeholder="e.g., RC12345 or www.raletale.com"
            value={contactInfo.rcNumber}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* ===== Owner / Agent Details ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">
          Owner/Agent Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="ownerName"
            placeholder="e.g., John Doe"
            value={contactInfo.ownerName}
            onChange={handleChange}
            className={inputStyle}
          />
          <input
            type="text"
            name="role"
            placeholder="e.g., Owner, Agent"
            value={contactInfo.role}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
        <input
          type="text"
          name="licenseNumber"
          placeholder="e.g., L#98765"
          value={contactInfo.licenseNumber}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      {/* ===== Contact Info ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">Contact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="phone"
            placeholder="e.g., +1 123 456 7890"
            value={contactInfo.phone}
            onChange={handleChange}
            className={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="e.g., user@example.com"
            value={contactInfo.email}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* ===== Verification Status ===== */}
      <div className="bg-[#181818] p-5 rounded-xl border border-transparent hover:border-[#2a2a2a] transition space-y-2">
        <h3 className="text-lg font-semibold text-white">
          Verification Status
        </h3>
        <p className="text-green-500 font-semibold">
          {contactInfo.verificationStatus}
        </p>
        <p className="text-sm text-gray-400">
          Information automatically verified based on provided details.
        </p>
      </div>

      {/* ===== Buttons ===== */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-[#1a1a1a] text-gray-400 rounded-md hover:bg-[#222]"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </form>
  );
}
