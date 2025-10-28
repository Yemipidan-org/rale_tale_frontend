"use client";
import React, { useState } from "react";

export default function PropertyLocationForm({ initialData, onBack, onNext }) {
  const [formData, setFormData] = useState(
    initialData || {
      address: "",
      busStop: "",
      landmarks: "",
      city: "",
      state: "Lagos",
      lga: "Eti-Osa",
      latitude: "6.4281",
      longitude: "3.4093",
      features: [],
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleFeature = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6">Property Location</h2>

      {/* ===== Address Details ===== */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Address Details</h3>

        <div className="space-y-4">
          <input
            name="address"
            placeholder="e.g., 123 Main Street, Victoria Island"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
          />
          <input
            name="busStop"
            placeholder="e.g., TBS Bus Stop, Ozumba Mbadiwe Road"
            value={formData.busStop}
            onChange={handleChange}
            className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
          />
          <textarea
            name="landmarks"
            placeholder="e.g., Eko Atlantic, Nike Art Gallery, Lekki Conservation Centre"
            value={formData.landmarks}
            onChange={handleChange}
            className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2 h-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              name="city"
              placeholder="e.g., Lagos"
              value={formData.city}
              onChange={handleChange}
              className="bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
            >
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Oyo</option>
              <option>Rivers</option>
            </select>
            <select
              name="lga"
              value={formData.lga}
              onChange={handleChange}
              className="bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
            >
              <option>Eti-Osa</option>
              <option>Ikeja</option>
              <option>Surulere</option>
              <option>Alimosho</option>
            </select>
          </div>
        </div>
      </div>

      {/* ===== Map Section ===== */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Locate on Map</h3>
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764b8a?auto=format&fit=crop&w=900&q=60"
          alt="Map"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
          />
          <input
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
          />
        </div>
        <p className="text-gray-500 text-sm">
          Drag the pin on the map to accurately mark your property’s location.
        </p>
      </div>

      {/* ===== Neighborhood Features ===== */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Neighborhood Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Transportation",
              items: [
                "Access to Public Transport (Buses, Taxis)",
                "Proximity to Metro/Train Station",
                "Dedicated Bus Stop within walking distance",
              ],
            },
            {
              title: "Education",
              items: [
                "Primary Schools",
                "Secondary Schools",
                "Universities / Tertiary Institutions",
              ],
            },
            {
              title: "Amenities",
              items: [
                "Shopping Malls / Retail Centers",
                "Supermarkets / Local Markets",
                "Restaurants / Cafes",
                "Cinemas / Entertainment Spots",
                "Gyms / Fitness Centers",
              ],
            },
            {
              title: "Recreation",
              items: [
                "Parks / Green Spaces",
                "Beaches / Waterfront Access",
                "Walking / Jogging Trails",
              ],
            },
            {
              title: "Safety & Health",
              items: [
                "Hospitals / Medical Centers",
                "Clinics / Pharmacies",
                "Police Station / Security Posts",
                "Fire Station",
              ],
            },
          ].map((group) => (
            <div key={group.title} className="space-y-2">
              <h4 className="text-sm font-semibold text-white mb-2">
                {group.title}
              </h4>
              {group.items.map((item) => (
                <label
                  key={item}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <input
                    type="checkbox"
                    checked={formData.features.includes(item)}
                    onChange={() => toggleFeature(item)}
                    className="form-checkbox bg-[#111] border-[#2a2a2a] text-green-500 rounded-sm"
                  />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
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
          className="px-4 py-2 text-sm sm:text-base bg-green-500 text-black font-medium rounded-md hover:bg-green-400"
          onClick={() => onNext(formData)}
        >
          Next
        </button>

        <button
          type="submit"
          className="px-4 py-2 text-sm sm:text-base bg-green-700 text-white font-medium rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
