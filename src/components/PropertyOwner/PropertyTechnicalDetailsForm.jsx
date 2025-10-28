"use client";
import React, { useState } from "react";

export default function PropertyTechnicalDetailsForm({
  initialData,
  onBack,
  onNext,
}) {
  const [details, setDetails] = useState(
    initialData || {
      floorNumber: "",
      totalFloors: "",
      yearBuilt: "",
      furnishing: "Unfurnished",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleRadio = (value) => {
    setDetails({ ...details, furnishing: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(details);
  };

  const inputStyle =
    "w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-600 transition";

  const cardStyle =
    "bg-[#181818] p-5 rounded-xl border border-transparent hover:border-[#2a2a2a] transition space-y-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Technical Details</h2>

      {/* ===== Building Structure ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">Building Structure</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            name="floorNumber"
            value={details.floorNumber}
            onChange={handleChange}
            placeholder="e.g., 3"
            className={inputStyle}
          />
          <input
            type="text"
            name="totalFloors"
            value={details.totalFloors}
            onChange={handleChange}
            placeholder="e.g., 10"
            className={inputStyle}
          />
          <input
            type="text"
            name="yearBuilt"
            value={details.yearBuilt}
            onChange={handleChange}
            placeholder="YYYY"
            className={inputStyle}
          />
        </div>
      </div>

      {/* ===== Furnishing ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">Furnishing</h3>

        <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-300 space-y-2 sm:space-y-0">
          {["Unfurnished", "Partially Furnished", "Fully Furnished"].map(
            (option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="furnishing"
                  value={option}
                  checked={details.furnishing === option}
                  onChange={() => handleRadio(option)}
                  className="form-radio text-green-500 border-[#2a2a2a] bg-[#111] focus:ring-0"
                />
                <span className="text-sm">{option}</span>
              </label>
            )
          )}
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
