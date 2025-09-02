"use client";

import { useState } from "react";
import PropertySections from "./propertySection";

export default function Hero() {
  const [propertyPurpose, setPropertyPurpose] = useState("Buy");

  // Form state
  const [needPropertyFor, setNeedPropertyFor] = useState("I need Property");
  const [localGovernmentArea, setLocalGovernmentArea] = useState("");
  const [state, setState] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [inspectionDate, setInspectionDate] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [requesterCallLine, setRequesterCallLine] = useState("");
  const [requesterWhatsapp, setRequesterWhatsapp] = useState("");
  const [preferredFeedback, setPreferredFeedback] = useState("");

  // Dynamic field mapping
  const fieldConfig = {
    Buy: [
      { label: "State", value: state, setter: setState, type: "text" },
      {
        label: "Local Government Area",
        value: localGovernmentArea,
        setter: setLocalGovernmentArea,
        type: "text",
      },
      {
        label: "Neighbourhood",
        value: neighbourhood,
        setter: setNeighbourhood,
        type: "text",
      },
      {
        label: "Min Price",
        value: minPrice,
        setter: setMinPrice,
        type: "number",
      },
      {
        label: "Max Price",
        value: maxPrice,
        setter: setMaxPrice,
        type: "number",
      },
    ],
    Rent: [
      { label: "State", value: state, setter: setState, type: "text" },
      {
        label: "Neighbourhood",
        value: neighbourhood,
        setter: setNeighbourhood,
        type: "text",
      },
      {
        label: "Min Price",
        value: minPrice,
        setter: setMinPrice,
        type: "number",
      },
      {
        label: "Max Price",
        value: maxPrice,
        setter: setMaxPrice,
        type: "number",
      },
      {
        label: "Inspection Date",
        value: inspectionDate,
        setter: setInspectionDate,
        type: "date",
      },
      {
        label: "Time From",
        value: timeFrom,
        setter: setTimeFrom,
        type: "time",
      },
      { label: "Time To", value: timeTo, setter: setTimeTo, type: "time" },
    ],
    Lease: [
      { label: "State", value: state, setter: setState, type: "text" },
      {
        label: "Local Government Area",
        value: localGovernmentArea,
        setter: setLocalGovernmentArea,
        type: "text",
      },
      {
        label: "Neighbourhood",
        value: neighbourhood,
        setter: setNeighbourhood,
        type: "text",
      },
      {
        label: "Preferred Feedback",
        value: preferredFeedback,
        setter: setPreferredFeedback,
        type: "text",
      },
    ],
  };

  // Common requester info fields
  const requesterFields = [
    {
      label: "Full Name",
      value: requesterName,
      setter: setRequesterName,
      type: "text",
    },
    {
      label: "Email",
      value: requesterEmail,
      setter: setRequesterEmail,
      type: "email",
    },
    {
      label: "Call Line",
      value: requesterCallLine,
      setter: setRequesterCallLine,
      type: "tel",
    },
    {
      label: "WhatsApp",
      value: requesterWhatsapp,
      setter: setRequesterWhatsapp,
      type: "tel",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mt-12 text-center leading-tight">
          Find Your Perfect Property Match
        </h1>
        <p className="my-4 text-base sm:text-lg text-[#9CA3AF] text-center max-w-2xl">
          Connecting property owners, buyers, and real estate professionals
        </p>

        {/* Form Box */}
        <div className="bg-[#FFFFFF0D] p-6 sm:p-8 rounded-lg w-full max-w-5xl mt-6">
          {/* Toggle Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["Buy", "Rent", "Lease"].map((option) => (
              <button
                key={option}
                onClick={() => setPropertyPurpose(option)}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  propertyPurpose === option
                    ? "bg-green-500 text-black"
                    : "bg-[#FFFFFF1A] text-white hover:bg-green-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Dynamic Fields */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fieldConfig[propertyPurpose].map((field, index) => (
                <div key={index}>
                  {/* <label className="block text-sm mb-1 text-">{field.label}</label> */}
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
                    placeholder={field.label}
                  />
                </div>
              ))}
            </div>

            {/* Requester Info */}
            <h3 className="text-md font-semibold mt-6 mb-2">Requester Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {requesterFields.map((field, index) => (
                <div key={index}>
                  {/* <label className="block text-sm mb-1">{field.label}</label> */}
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
                    placeholder={field.label}
                  />
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-md font-medium mt-6 text-white hover:opacity-90 transition"
            >
              Search Property
            </button>
          </form>
        </div>
      </section>
      <PropertySections />
    </>
  );
}
