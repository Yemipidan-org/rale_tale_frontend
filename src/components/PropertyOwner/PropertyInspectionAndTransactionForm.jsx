"use client";
import React, { useState } from "react";
import { format } from "date-fns";

export default function PropertyInspectionAndTransactionForm({
  initialData,
  onBack,
  onNext,
}) {
  const [formData, setFormData] = useState(
    initialData || {
      inspectionDate: new Date(),
      processingFee: 150.0,
      legalFee: 50.0,
      marketingFee: 25.0,
    }
  );

  const handleFeeChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) || 0 });
  };

  const totalFees =
    (parseFloat(formData.processingFee) || 0) +
    (parseFloat(formData.legalFee) || 0) +
    (parseFloat(formData.marketingFee) || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ ...formData, totalFees });
  };

  const inputStyle =
    "w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-600 transition";

  const cardStyle =
    "bg-[#181818] p-5 rounded-xl border border-transparent hover:border-[#2a2a2a] transition space-y-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          Step 9: Inspection & Transaction Details
        </h2>
        <span className="text-gray-400 text-sm">Step 9 of 11</span>
      </div>
      <p className="text-gray-400">
        Schedule inspections and review additional fees.
      </p>

      {/* ===== Main Layout ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ===== Inspection Schedule ===== */}
        <div className={cardStyle}>
          <h3 className="text-lg font-semibold text-white">
            Inspection Schedule
          </h3>
          <div className="flex flex-col items-center">
            <input
              type="date"
              value={format(formData.inspectionDate, "yyyy-MM-dd")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  inspectionDate: new Date(e.target.value),
                })
              }
              className="bg-[#111] text-white border border-[#2a2a2a] rounded-md px-4 py-2 focus:ring-1 focus:ring-green-600"
            />
            <p className="text-sm text-gray-400 mt-3 text-center">
              Select preferred date for property inspection.
            </p>
          </div>
        </div>

        {/* ===== Additional Fees ===== */}
        <div className={cardStyle}>
          <h3 className="text-lg font-semibold text-white">Additional Fees</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-gray-400 text-sm mb-1">
                Processing Fee
              </label>
              <input
                type="number"
                name="processingFee"
                step="0.01"
                value={formData.processingFee}
                onChange={handleFeeChange}
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">
                Legal Fee
              </label>
              <input
                type="number"
                name="legalFee"
                step="0.01"
                value={formData.legalFee}
                onChange={handleFeeChange}
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">
                Marketing Fee
              </label>
              <input
                type="number"
                name="marketingFee"
                step="0.01"
                value={formData.marketingFee}
                onChange={handleFeeChange}
                className={inputStyle}
              />
            </div>
            <div className="pt-3 border-t border-[#2a2a2a]">
              <label className="block text-gray-400 text-sm mb-1">
                Total Estimated Fees
              </label>
              <input
                type="text"
                value={`₦${totalFees.toLocaleString()}`}
                disabled
                className="w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2 text-green-500 font-semibold"
              />
            </div>
          </div>
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
