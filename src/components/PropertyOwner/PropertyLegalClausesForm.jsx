"use client";
import React, { useState } from "react";

export default function PropertyLegalClausesForm({
  initialData,
  onBack,
  onSubmit,
}) {
  const [agreements, setAgreements] = useState(
    initialData || {
      authenticity: false,
      legalAuthority: false,
      termsAccepted: false,
      marketingConsent: false,
    }
  );

  const toggleAgreement = (key) => {
    setAgreements({ ...agreements, [key]: !agreements[key] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allChecked = Object.values(agreements).every(Boolean);
    if (!allChecked) {
      alert("Please agree to all terms before submitting.");
      return;
    }
    onSubmit(agreements);
  };

  const cardStyle =
    "bg-[#181818] p-6 rounded-xl border border-transparent hover:border-[#2a2a2a] transition space-y-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Step 11: Legal Clauses</h2>
        <span className="text-gray-400 text-sm">Step 11 of 11</span>
      </div>
      <p className="text-gray-400">
        Please review and agree to the terms and conditions to finalize your
        listing.
      </p>

      {/* ===== Confirmations & Agreements ===== */}
      <div className={cardStyle}>
        <h3 className="text-lg font-semibold text-white">
          Confirmations & Agreements
        </h3>
        <div className="space-y-3 text-sm text-gray-300">
          {/* Authenticity */}
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreements.authenticity}
              onChange={() => toggleAgreement("authenticity")}
              className="mt-1 form-checkbox h-4 w-4 text-green-600 bg-[#111] border-[#2a2a2a] focus:ring-0"
            />
            <span>
              I confirm that all uploaded documents are authentic, accurate, and
              legally binding for this property.
            </span>
          </label>

          {/* Legal Authority */}
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreements.legalAuthority}
              onChange={() => toggleAgreement("legalAuthority")}
              className="mt-1 form-checkbox h-4 w-4 text-green-600 bg-[#111] border-[#2a2a2a] focus:ring-0"
            />
            <span>
              I acknowledge and confirm that I have the full legal authority to
              list and transact this property through Raletale.
            </span>
          </label>

          {/* Terms of Service */}
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreements.termsAccepted}
              onChange={() => toggleAgreement("termsAccepted")}
              className="mt-1 form-checkbox h-4 w-4 text-green-600 bg-[#111] border-[#2a2a2a] focus:ring-0"
            />
            <span>
              I have read and agree to Raletale’s{" "}
              <a href="/terms" className="text-green-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-green-500 hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          {/* Marketing Consent */}
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreements.marketingConsent}
              onChange={() => toggleAgreement("marketingConsent")}
              className="mt-1 form-checkbox h-4 w-4 text-green-600 bg-[#111] border-[#2a2a2a] focus:ring-0"
            />
            <span>
              I consent to Raletale using property information for marketing
              purposes, as outlined in the marketing terms.
            </span>
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
          className="px-5 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-600"
        >
          Submit Listing
        </button>
      </div>
    </form>
  );
}
