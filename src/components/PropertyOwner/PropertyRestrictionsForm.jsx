"use client";
import React, { useState } from "react";

export default function PropertyRestrictionsForm({
  initialData,
  onBack,
  onNext,
}) {
  const [restrictions, setRestrictions] = useState(
    initialData || {
      petPolicy: "No Pets Allowed",
      businessPolicy: "No Business Use Permitted",
      sublettingPolicy: "Subletting Not Allowed",
    }
  );

  const handleChange = (field, value) => {
    setRestrictions({ ...restrictions, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(restrictions);
  };

  const cardStyle =
    "bg-[#181818] p-5 rounded-xl space-y-3 border border-transparent hover:border-[#2a2a2a] transition";

  const radioStyle =
    "form-radio text-green-500 border-[#2a2a2a] focus:ring-0 bg-[#111]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Property Restrictions</h2>

      {/* ===== Pet Policy ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">Pet Policy</h3>
        <div className="flex flex-col space-y-2 text-gray-300">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="petPolicy"
              value="No Pets Allowed"
              checked={restrictions.petPolicy === "No Pets Allowed"}
              onChange={(e) => handleChange("petPolicy", e.target.value)}
              className={radioStyle}
            />
            <span>No Pets Allowed</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="petPolicy"
              value="Pets Allowed (Specify Conditions)"
              checked={
                restrictions.petPolicy === "Pets Allowed (Specify Conditions)"
              }
              onChange={(e) => handleChange("petPolicy", e.target.value)}
              className={radioStyle}
            />
            <span>Pets Allowed (Specify Conditions)</span>
          </label>
        </div>
      </div>

      {/* ===== Business Use Policy ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">
          Business Use Policy
        </h3>
        <div className="flex flex-col space-y-2 text-gray-300">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="businessPolicy"
              value="No Business Use Permitted"
              checked={
                restrictions.businessPolicy === "No Business Use Permitted"
              }
              onChange={(e) => handleChange("businessPolicy", e.target.value)}
              className={radioStyle}
            />
            <span>No Business Use Permitted</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="businessPolicy"
              value="Business Use Permitted (Specify Conditions)"
              checked={
                restrictions.businessPolicy ===
                "Business Use Permitted (Specify Conditions)"
              }
              onChange={(e) => handleChange("businessPolicy", e.target.value)}
              className={radioStyle}
            />
            <span>Business Use Permitted (Specify Conditions)</span>
          </label>
        </div>
      </div>

      {/* ===== Subletting Permission ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">
          Subletting Permission
        </h3>
        <div className="flex flex-col space-y-2 text-gray-300">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sublettingPolicy"
              value="Subletting Not Allowed"
              checked={
                restrictions.sublettingPolicy === "Subletting Not Allowed"
              }
              onChange={(e) => handleChange("sublettingPolicy", e.target.value)}
              className={radioStyle}
            />
            <span>Subletting Not Allowed</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sublettingPolicy"
              value="Subletting Allowed (Specify Conditions)"
              checked={
                restrictions.sublettingPolicy ===
                "Subletting Allowed (Specify Conditions)"
              }
              onChange={(e) => handleChange("sublettingPolicy", e.target.value)}
              className={radioStyle}
            />
            <span>Subletting Allowed (Specify Conditions)</span>
          </label>
        </div>
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
