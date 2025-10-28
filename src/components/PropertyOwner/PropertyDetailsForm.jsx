"use client";
import React, { useState } from "react";

export default function PropertyDetailsForm({ initialData, onNext }) {
  const [formData, setFormData] = useState(
    initialData || {
      propertyType: "Apartment",
      listingType: "For Sale",
      price: "500000",
      paymentFrequency: "Monthly",
      paymentTerms: "12_months",
      rentEscalation: "5",
      agencyFee: "25000.00",
      legalFee: "10000.00",
      cautionFee: "50000.00",
      features: [], // Add this line to ensure features array exists
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => onNext(formData);

  // Add safety check when checking features
  const isFeatureSelected = (feature) => {
    return formData.features?.includes(feature) || false;
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Basic Property Details</h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Property Identification */}
        <div className="lg:col-span-2 bg-[#181818] p-5 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            Property Identification
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Define the fundamental characteristics of your property.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Property Type</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
              >
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Duplex</option>
                <option>Land</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Listing Type</label>
              <select
                name="listingType"
                value={formData.listingType}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
              >
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Lease</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="bg-[#181818] p-5 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-2">Pricing Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Price (NGN)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">
                Payment Frequency
              </label>
              <select
                name="paymentFrequency"
                value={formData.paymentFrequency}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
              >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Annually</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Terms + Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-[#181818] p-5 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Terms & Escalation</h3>
          <div className="space-y-4">
            <input
              type="text"
              name="paymentTerms"
              value={formData.paymentTerms}
              onChange={handleChange}
              placeholder="Payment Terms (Months)"
              className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
            />
            <input
              type="number"
              name="rentEscalation"
              value={formData.rentEscalation}
              onChange={handleChange}
              placeholder="Rent Escalation (%)"
              className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="bg-[#181818] p-5 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Price Breakdown</h3>
          <div className="space-y-4">
            {["agencyFee", "legalFee", "cautionFee"].map((field) => (
              <input
                key={field}
                type="number"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.replace(/([A-Z])/g, " $1")}
                className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Buttons ===== */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
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
          onClick={handleNext}
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
    </div>
  );
}
