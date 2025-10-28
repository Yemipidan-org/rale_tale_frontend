"use client";
import React, { useState } from "react";

export default function PropertyFeaturesForm({ initialData, onBack, onNext }) {
  const [form, setForm] = useState({
    bedrooms: "",
    bathrooms: "",
    parking: "",
    landSize: "",
    buildingSize: "",
    condition: [],
    facilities: [],
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleCheckbox = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(form);
  };

  const inputStyle =
    "w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-600 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">
        Property Features & Condition
      </h2>

      {/* ===== Basic Accommodations ===== */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Basic Accommodations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            placeholder="e.g., 3"
            className={inputStyle}
          />
          <input
            name="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            placeholder="e.g., 2"
            className={inputStyle}
          />
          <input
            name="parking"
            value={form.parking}
            onChange={handleChange}
            placeholder="e.g., 1"
            className={inputStyle}
          />
        </div>
      </div>

      {/* ===== Dimensions ===== */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold text-white">Dimensions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="landSize"
            value={form.landSize}
            onChange={handleChange}
            placeholder="e.g., 1500"
            className={inputStyle}
          />
          <input
            name="buildingSize"
            value={form.buildingSize}
            onChange={handleChange}
            placeholder="e.g., 1200"
            className={inputStyle}
          />
        </div>
      </div>

      {/* ===== Condition ===== */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-3">
        <h3 className="text-lg font-semibold text-white">Condition</h3>
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
          {["Newly Built", "Well Maintained", "Needs Renovation"].map(
            (cond) => (
              <label
                key={cond}
                className="flex items-center space-x-2 text-gray-300"
              >
                <input
                  type="checkbox"
                  checked={form.condition.includes(cond)}
                  onChange={() => toggleCheckbox("condition", cond)}
                  className="form-checkbox bg-[#111] border-[#2a2a2a] text-green-500 rounded-sm"
                />
                <span className="text-sm">{cond}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* ===== Facilities & Systems ===== */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Facilities & Systems
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              title: "CORE UTILITIES",
              items: ["Electricity", "Water", "Gas"],
            },
            {
              title: "BUILDING SYSTEMS",
              items: ["Elevator", "Air Conditioning"],
            },
            {
              title: "ENERGY & SUSTAINABILITY",
              items: ["Solar Panels", "High Insulation"],
            },
            {
              title: "LUXURY",
              items: ["Swimming Pool", "Home Theater"],
            },
            {
              title: "FIRE SAFETY",
              items: ["Sprinklers", "Smoke Alarms"],
            },
            {
              title: "ACCESSIBILITY & INCLUSION",
              items: ["Ramps", "Accessible Bathrooms"],
            },
          ].map((group) => (
            <div key={group.title} className="space-y-2">
              <h4 className="text-sm font-semibold text-white">
                {group.title}
              </h4>
              <div className="flex flex-col space-y-1">
                {group.items.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <input
                      type="checkbox"
                      checked={form.facilities.includes(item)}
                      onChange={() => toggleCheckbox("facilities", item)}
                      className="form-checkbox bg-[#111] border-[#2a2a2a] text-green-500 rounded-sm"
                    />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Buttons ===== */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 text-sm sm:text-base bg-[#1a1a1a] text-gray-400 rounded-md hover:bg-[#222222]"
        >
          Back
        </button>

        <button
          type="button"
          className="px-4 py-2 text-sm sm:text-base bg-[#2c2c2c] text-white rounded-md hover:bg-[#3a3a3a]"
        >
          Save Draft
        </button>

        <button
          type="button"
          onClick={() => onNext(form)}
          className="px-4 py-2 text-sm sm:text-base bg-green-500 text-black font-medium rounded-md hover:bg-green-400"
        >
          Next
        </button>
      </div>
    </form>
  );
  // }
}
