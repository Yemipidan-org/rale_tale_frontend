"use client";
import React, { useState } from "react";

export default function PropertyMarketingAndExposureForm({
  initialData,
  onBack,
  onNext,
}) {
  const [formData, setFormData] = useState(
    initialData || {
      featuredBoost: false,
      premiumHighlight: false,
      boostDuration: "7 Days",
      targetedPromotion: false,
      targetKeywords: ["Family Homes", "Luxury Properties", "Urban Living"],
      exclusiveListing: false,
    }
  );

  const [newKeyword, setNewKeyword] = useState("");

  const handleToggle = (key) => {
    setFormData({ ...formData, [key]: !formData[key] });
  };

  const handleKeywordAdd = (e) => {
    e.preventDefault();
    if (
      newKeyword.trim() &&
      !formData.targetKeywords.includes(newKeyword.trim())
    ) {
      setFormData({
        ...formData,
        targetKeywords: [...formData.targetKeywords, newKeyword.trim()],
      });
      setNewKeyword("");
    }
  };

  const handleKeywordRemove = (keyword) => {
    setFormData({
      ...formData,
      targetKeywords: formData.targetKeywords.filter((k) => k !== keyword),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const inputStyle =
    "w-full bg-[#111] border border-[#2a2a2a] rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-600 transition";

  const cardStyle =
    "bg-[#181818] p-5 rounded-xl border border-transparent hover:border-[#2a2a2a] transition space-y-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          Step 10: Marketing & Exposure
        </h2>
        <span className="text-gray-400 text-sm">Step 10 of 11</span>
      </div>
      <p className="text-gray-400">
        Enhance your listing's visibility and reach potential buyers.
      </p>

      {/* ===== Featured Listing & Highlight ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Listing Boost */}
        <div className={cardStyle}>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">
              Featured Listing Boost
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featuredBoost}
                onChange={() => handleToggle("featuredBoost")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></span>
            </label>
          </div>
          <p className="text-sm text-gray-400">
            Increase your listing's visibility in search results and homepage.
          </p>
          {formData.featuredBoost && (
            <div className="mt-3">
              <label className="block text-gray-400 text-sm mb-1">
                Boost Duration
              </label>
              <select
                value={formData.boostDuration}
                onChange={(e) =>
                  setFormData({ ...formData, boostDuration: e.target.value })
                }
                className={inputStyle}
              >
                <option>3 Days</option>
                <option>7 Days</option>
                <option>14 Days</option>
                <option>30 Days</option>
              </select>
            </div>
          )}
        </div>

        {/* Premium Highlight */}
        <div className={cardStyle}>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">
              Premium Highlight
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.premiumHighlight}
                onChange={() => handleToggle("premiumHighlight")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></span>
            </label>
          </div>
          <p className="text-sm text-gray-400">
            Add a special badge and border to make your listing stand out.
          </p>
        </div>
      </div>

      {/* ===== Targeted Audience Promotion ===== */}
      <div className={cardStyle}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">
            Targeted Audience Promotion
          </h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.targetedPromotion}
              onChange={() => handleToggle("targetedPromotion")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600"></div>
            <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></span>
          </label>
        </div>
        <p className="text-sm text-gray-400">
          Promote your listing to specific demographics or interest groups for
          higher engagement.
        </p>

        {formData.targetedPromotion && (
          <>
            <form onSubmit={handleKeywordAdd} className="flex mt-3 space-x-2">
              <input
                type="text"
                placeholder="e.g., family homes, luxury, urban living"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                className={inputStyle}
              />
              <button
                type="submit"
                className="bg-green-700 px-4 py-2 rounded-md text-white hover:bg-green-600"
              >
                Add
              </button>
            </form>
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.targetKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="bg-[#222] text-green-400 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                >
                  <span>{keyword}</span>
                  <button
                    onClick={() => handleKeywordRemove(keyword)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ===== Exclusive Listing Agreement ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">
          Exclusive Listing Agreement
        </h3>
        <p className="text-sm text-gray-400">
          Confirm this property is listed exclusively with Raletale for maximum
          marketing efforts.
        </p>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={formData.exclusiveListing}
            onChange={() => handleToggle("exclusiveListing")}
            className="form-checkbox h-4 w-4 text-green-600 bg-[#111] border-[#2a2a2a] focus:ring-0"
          />
          <span className="text-sm text-gray-400">
            By confirming, you grant Raletale exclusive rights to market this
            property across all channels for 6 months.
          </span>
        </label>
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
