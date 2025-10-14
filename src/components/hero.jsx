"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropertySections from "./propertySection";
import {
  fieldConfig,
  requesterFields,
  propertyTypes,
  getAdditionalFields,
  getPropertyTypesByPurpose,
} from "./formConfig";
import { searchProperty } from "../services/authService";

export default function Hero() {
  const [propertyPurpose, setPropertyPurpose] = useState("Buy");
  const [formData, setFormData] = useState({});
  const [additionalFields, setAdditionalFields] = useState([]);
  const [selectedPurpose, setSelectedPurpose] = useState("");

  useEffect(() => {
    if (formData["Property Type"]) {
      setAdditionalFields(getAdditionalFields(formData["Property Type"]));
    } else {
      setAdditionalFields([]);
    }
  }, [formData["Property Type"]]);

  const handleInputChange = (fieldLabel, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldLabel]: value,
    }));
  };

  // store array of selected options for multiselect fields
  const handleCheckboxChange = (fieldLabel, option) => {
    setFormData((prev) => {
      const current = Array.isArray(prev[fieldLabel]) ? prev[fieldLabel] : [];
      const exists = current.includes(option);
      const next = exists
        ? current.filter((i) => i !== option)
        : [...current, option];
      return { ...prev, [fieldLabel]: next };
    });
  };

  // dropdown open state + click-outside handler for the multiselect
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const contactDropdownRef = useRef(null);
  useEffect(() => {
    const onDocClick = (e) => {
      if (
        contactDropdownRef.current &&
        !contactDropdownRef.current.contains(e.target)
      ) {
        setContactDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handlePurposeChange = (purpose) => {
    setSelectedPurpose(purpose);
    handleInputChange("Property Type", ""); // Reset property type when purpose changes
  };

  const getFieldValue = (field) => {
    if (field.section) {
      return (
        <div key={field.section} className="col-span-1 lg:col-span-2">
          <h3 className="text-md font-semibold mb-2 text-white">
            {field.section}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {field.fields.map((subField) => (
              <div key={subField.label}>
                <input
                  type={subField.type}
                  value={formData[subField.label] || ""}
                  onChange={(e) =>
                    handleInputChange(subField.label, e.target.value)
                  }
                  className={`w-full text-white bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400 ${
                    subField.type === "date" || subField.type === "time"
                      ? "date-time"
                      : ""
                  }`}
                  placeholder={subField.label}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (field.label === "Property Type" && !selectedPurpose) {
      return null;
    }

    return (
      <div key={field.label} className="col-span-1 space-y-2">
        {field.type === "select" ? (
          <>
            <select
              className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm text-gray-400"
              value={formData[field.label] || ""}
              onChange={(e) => {
                if (field.label === "Property Purpose") {
                  handlePurposeChange(e.target.value);
                }
                handleInputChange(field.label, e.target.value);
              }}
            >
              <option value="">{field.label}</option>
              {field.label === "Property Type"
                ? getPropertyTypesByPurpose(selectedPurpose).map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))
                : field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
            </select>
            {field.label === "Property Type" && formData["Property Type"] && (
              <div className="mt-2">
                {additionalFields.map((addField, index) => (
                  <div key={index}>
                    {addField.type === "select" ? (
                      <select
                        className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm text-gray-400"
                        value={formData[addField.label] || ""}
                        onChange={(e) =>
                          handleInputChange(addField.label, e.target.value)
                        }
                      >
                        <option value="">{addField.label}</option>
                        {addField.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={addField.type}
                        min={addField.min}
                        placeholder={addField.label}
                        value={formData[addField.label] || ""}
                        onChange={(e) =>
                          handleInputChange(addField.label, e.target.value)
                        }
                        className="w-full text-white bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <input
            type={field.type}
            value={formData[field.label] || ""}
            onChange={(e) => handleInputChange(field.label, e.target.value)}
            className={`w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400 ${
              field.type === "date" || field.type === "time" ? "date-time" : ""
            }`}
            placeholder={field.label}
          />
        )}
      </div>
    );
  };

  // Seacrh Properties.
  const handleSeacrhProperty =  async (e) => {
    e.preventDefault();
    console.log("the form data", formData);

    try {
      const data = await searchProperty(formData)


    } catch (error) {
       
    } finally {
      
    }
  };

  return (
    <>
      {/* date/time icon color adjustments (WebKit) and ensure white text */}
      <style>{`
      input.date-time {
        color: white;
      }
      input[type="date"].date-time::-webkit-calendar-picker-indicator,
      input[type="time"].date-time::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(2);
        opacity: 1;
      }
    `}</style>
      <section className="min-h-screen bg-[#0A0A0A] px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Find Your Perfect Property Within Minutes
            </h1>
            <p className="my-4 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Speed, Security, and Transparency in Every Property Deal.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Form Column */}
            <div className="flex-">
              <div className="bg-[#FFFFFF0D] p-6 sm:p-8 rounded-lg w-full">
                <form className="space-y-6 text-white">
                  {/* Main Form Fields */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {fieldConfig[propertyPurpose].map((field) =>
                      getFieldValue(field)
                    )}
                    {additionalFields.map((field, index) => (
                      <div key={index} className="col-span-1">
                        {field.type === "select" ? (
                          <select
                            className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm text-gray-400"
                            value={formData[field.label] || ""}
                            onChange={(e) =>
                              handleInputChange(field.label, e.target.value)
                            }
                          >
                            <option value="">{field.label}</option>
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <>
                            <input
                              type={field.type}
                              min={field.min}
                              placeholder={field.label}
                              value={formData[field.label] || ""}
                              onChange={(e) =>
                                handleInputChange(field.label, e.target.value)
                              }
                              className={`w-full text-white bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400 ${
                                field.type === "date" || field.type === "time"
                                  ? "date-time"
                                  : ""
                              }`}
                            />
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Contact Section */}
                  <div>
                    <h3 className="text-md font-semibold mb-2 text-white">
                      How should we contact you?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {requesterFields.map((field, index) => (
                        <div
                          key={index}
                          className="relative"
                          ref={
                            field.label === "Preferred Contact Method"
                              ? contactDropdownRef
                              : null
                          }
                        >
                          {field.type === "multiselect" ? (
                            <>
                              <button
                                type="button"
                                onClick={() =>
                                  setContactDropdownOpen((s) => !s)
                                }
                                className="w-full text-left bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm text-gray-400 flex justify-between items-center"
                              >
                                <div className="inline-block max-w-[180px] overflow-hidden">
                                  <span
                                    className="block truncate whitespace-nowrap"
                                    title={
                                      formData[field.label]?.length > 0
                                        ? formData[field.label].join(", ")
                                        : field.label
                                    }
                                  >
                                    {formData[field.label]?.length > 0
                                      ? formData[field.label].join(", ")
                                      : field.label}
                                  </span>
                                </div>
                                <svg
                                  className="w-4 h-4 text-gray-400 shrink-0 ml-2"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.064a.75.75 0 111.1 1.02l-4.25 4.66a.75.75 0 01-1.1 0l-4.25-4.66a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                              {contactDropdownOpen && (
                                <div className="absolute z-20 mt-1 w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-md p-3 shadow-lg">
                                  <div className="flex flex-col gap-2 max-h-48 overflow-auto">
                                    {field.options?.map((opt) => {
                                      const checked = (
                                        formData[field.label] || []
                                      ).includes(opt);
                                      return (
                                        <label
                                          key={opt}
                                          className="inline-flex items-center text-sm"
                                        >
                                          <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() =>
                                              handleCheckboxChange(
                                                field.label,
                                                opt
                                              )
                                            }
                                            className="h-4 w-4 text-green-500 bg-[#1E1E1E] rounded"
                                          />
                                          <span className="ml-2 text-white">
                                            {opt}
                                          </span>
                                        </label>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </>
                          ) : field.type === "select" ? (
                            <select
                              className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm text-gray-400"
                              value={formData[field.label] || ""}
                              onChange={(e) =>
                                handleInputChange(field.label, e.target.value)
                              }
                            >
                              <option value="">{field.label}</option>
                              {field.options?.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              placeholder={field.label}
                              value={formData[field.label] || ""}
                              onChange={(e) =>
                                handleInputChange(field.label, e.target.value)
                              }
                              className="w-full text-white bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/searchResult">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-md font-medium mt-6 text-white hover:opacity-90 transition"
                    // onClick={handleSeacrhProperty}
                  >
                    Search Property
                  </button>
                  </Link>
                </form>
              </div>
            </div>

            {/* Image Column */}
            {/* <div className="flex-1 bg-[#FFFFFF0D rounded-lg overflow-hidden lg:w-[40%]">
              <div className="relativ h-full min-h-[300px lg:min-h-[00px]">
                <div className="absolut inset- bg-black/ flex items-cente justify-center">
                  <div className="text-center p-">
                    <img
                      src="./raletale1.png"
                      alt="Logo"
                      className="w-full rounded"
                    />
                    
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <PropertySections />
    </>
  );
}
