"use client";
import React, { useState } from "react";
import { Upload, FileText, AlertTriangle } from "lucide-react";

export default function PropertyDocumentsForm({ initialData, onBack, onNext }) {
  const [docs, setDocs] = useState(
    initialData || {
      proofOfOwnership: null,
      buildingApproval: null,
      developersLicense: null,
      verificationStatus: "Pending Review",
    }
  );

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) setDocs({ ...docs, [type]: file });
  };

  const removeFile = (type) => {
    setDocs({ ...docs, [type]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(docs);
  };

  const cardStyle =
    "bg-[#181818] rounded-xl p-5 shadow-md border border-transparent hover:border-[#2a2a2a] transition";
  const buttonStyle =
    "flex items-center space-x-2 bg-[#0f0f0f] text-gray-300 border border-gray-600 rounded-md px-3 py-2 text-sm hover:bg-[#1a1a1a] transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Property Documents</h2>

      {/* Upload Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Proof of Ownership */}
        <div className={cardStyle}>
          <div className="flex items-center space-x-2 mb-2">
            <FileText size={18} className="text-green-400" />
            <h3 className="font-semibold text-white">Proof of Ownership</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Ensure documents are valid and clearly legible.
          </p>
          <label className={buttonStyle}>
            <Upload size={14} />
            <span>Upload File</span>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              className="hidden"
              onChange={(e) => handleFileUpload(e, "proofOfOwnership")}
            />
          </label>
          {docs.proofOfOwnership && (
            <div className="flex justify-between items-center mt-3 bg-[#111] px-3 py-2 rounded-md">
              <span className="text-sm text-gray-300 truncate w-48">
                {docs.proofOfOwnership.name}
              </span>
              <button
                type="button"
                onClick={() => removeFile("proofOfOwnership")}
                className="text-red-400 text-xs hover:text-red-500"
              >
                ✕
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">Max 5MB</p>
        </div>

        {/* Building Approval */}
        <div className={cardStyle}>
          <div className="flex items-center space-x-2 mb-2">
            <FileText size={18} className="text-green-400" />
            <h3 className="font-semibold text-white">Building Approval</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Provide official building permits or approvals.
          </p>
          <label className={buttonStyle}>
            <Upload size={14} />
            <span>Upload File</span>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              className="hidden"
              onChange={(e) => handleFileUpload(e, "buildingApproval")}
            />
          </label>
          {docs.buildingApproval && (
            <div className="flex justify-between items-center mt-3 bg-[#111] px-3 py-2 rounded-md">
              <span className="text-sm text-gray-300 truncate w-48">
                {docs.buildingApproval.name}
              </span>
              <button
                type="button"
                onClick={() => removeFile("buildingApproval")}
                className="text-red-400 text-xs hover:text-red-500"
              >
                ✕
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">Max 5MB</p>
        </div>

        {/* Developer’s License */}
        <div className={cardStyle}>
          <div className="flex items-center space-x-2 mb-2">
            <FileText size={18} className="text-green-400" />
            <h3 className="font-semibold text-white">Developer’s License</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Upload a valid developer’s license document.
          </p>
          <label className={buttonStyle}>
            <Upload size={14} />
            <span>Upload File</span>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              className="hidden"
              onChange={(e) => handleFileUpload(e, "developersLicense")}
            />
          </label>
          {docs.developersLicense && (
            <div className="flex justify-between items-center mt-3 bg-[#111] px-3 py-2 rounded-md">
              <span className="text-sm text-gray-300 truncate w-48">
                {docs.developersLicense.name}
              </span>
              <button
                type="button"
                onClick={() => removeFile("developersLicense")}
                className="text-red-400 text-xs hover:text-red-500"
              >
                ✕
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">Max 5MB</p>
        </div>
      </div>

      {/* ===== Verification Status ===== */}
      <div className="bg-[#0f260f] border border-[#0b3a0b] rounded-xl p-5 text-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <AlertTriangle size={16} className="text-yellow-400" />
          <h3 className="font-semibold text-white">
            Title Verification Status
          </h3>
        </div>

        <span className="inline-block bg-yellow-600 text-black text-xs px-2 py-1 rounded mb-2">
          {docs.verificationStatus}
        </span>

        <p className="text-sm text-gray-300">
          Your documents are currently under review by our legal team.
          Verification typically takes <strong>2–3 business days</strong>. You
          will be notified of the outcome via email.
        </p>
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
          onClick={() => onNext(docs)}
          className="px-4 py-2 text-sm sm:text-base bg-green-500 text-black font-medium rounded-md hover:bg-green-400"
        >
          Next
        </button>
      </div>
    </form>
  );
}
