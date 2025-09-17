"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropertySections from "./propertySection";
import {
  fieldConfig,
  requesterFields,
  propertyTypes,
  getAdditionalFields,
  getPropertyTypesByPurpose,
} from "./formConfig";

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

  const handlePurposeChange = (purpose) => {
    setSelectedPurpose(purpose);
    handleInputChange("Property Type", ""); // Reset property type when purpose changes
  };

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
         
          {/* <div className="flex flex-wrap gap-3 mb-6">
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
          </div> */}

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fieldConfig[propertyPurpose].map((field, index) => (
                <div key={index}>
                  {field.type === "select" ? (
                    <select
                      className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm text-gray-400"
                      value={formData[field.label] || ""}
                      onChange={(e) => {
                        if (field.label === "Property Purpose") {
                          handlePurposeChange(e.target.value);
                        }
                        handleInputChange(field.label, e.target.value);
                        if (field.label === "Property Type") {
                          setPropertyType(e.target.value);
                        }
                      }}
                    >
                      <option value="">{field.label}</option>
                      {field.label === "Property Type"
                        ? getPropertyTypesByPurpose(selectedPurpose).map(
                            (opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            )
                          )
                        : field.options?.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.label] || ""}
                      onChange={(e) =>
                        handleInputChange(field.label, e.target.value)
                      }
                      className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
                      placeholder={field.label}
                    />
                  )}
                </div>
              ))}

              {additionalFields.map((field, index) => (
                <div key={index}>
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
                    <input
                      type={field.type}
                      min={field.min}
                      placeholder={field.label}
                      value={formData[field.label] || ""}
                      onChange={(e) =>
                        handleInputChange(field.label, e.target.value)
                      }
                      className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
                    />
                  )}
                </div>
              ))}
            </div>

            <input
              type="text"
              placeholder="Landmark"
              value={formData["Landmark"] || ""}
              onChange={(e) => handleInputChange("Landmark", e.target.value)}
              className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
            />

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Budget From"
                value={formData["Budget From"] || ""}
                onChange={(e) =>
                  handleInputChange("Budget From", e.target.value)
                }
                className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
              />
              <input
                type="number"
                placeholder="Budget To"
                value={formData["Budget To"] || ""}
                onChange={(e) => handleInputChange("Budget To", e.target.value)}
                className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
              />
            </div>

            <div className="flex gap-2">
              <input
                type="date"
                placeholder="Inspection Date"
                value={formData["Inspection Date"] || ""}
                onChange={(e) =>
                  handleInputChange("Inspection Date", e.target.value)
                }
                className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
              />
              <input
                type="time"
                placeholder="Inspection Time"
                value={formData["Inspection Time"] || ""}
                onChange={(e) =>
                  handleInputChange("Inspection Time", e.target.value)
                }
                className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
              />
            </div>

            {/* Requester Info */}
            <h3 className="text-md font-semibold mt-6 mb-2 text-white">
              Requester Info
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {requesterFields.map((field, index) => (
                <div key={index}>
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
                    <input
                      type={field.type}
                      placeholder={field.label}
                      value={formData[field.label] || ""}
                      onChange={(e) =>
                        handleInputChange(field.label, e.target.value)
                      }
                      className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
                    />
                  )}
                </div>
              ))}
            </div>

            <Link to="/searchResult">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-md font-medium mt-6 text-white hover:opacity-90 transition"
              >
                Search Property
              </button>
            </Link>
          </form>
        </div>
      </section>
      <PropertySections />
    </>
  );
}

//   return (
//     <>
//       <section className="flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mt-12 text-center leading-tight">
//           Find Your Perfect Property Match
//         </h1>
//         <p className="my-4 text-base sm:text-lg text-[#9CA3AF] text-center max-w-2xl">
//           Connecting property owners, buyers, and real estate professionals
//         </p>

//         {/* Form Box */}
//         <div className="bg-[#FFFFFF0D] p-6 sm:p-8 rounded-lg w-full max-w-5xl mt-6">
//           {/* Toggle Buttons */}
//           <div className="flex flex-wrap gap-3 mb-6">
//             {["Buy", "Rent", "Lease"].map((option) => (
//               <button
//                 key={option}
//                 onClick={() => setPropertyPurpose(option)}
//                 className={`px-4 py-2 rounded-md font-medium transition ${
//                   propertyPurpose === option
//                     ? "bg-green-500 text-black"
//                     : "bg-[#FFFFFF1A] text-white hover:bg-green-600"
//                 }`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           {/* Dynamic Fields */}
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {fieldConfig[propertyPurpose].map((field, index) => (
//                 <div key={index}>
//                   {/* <label className="block text-sm mb-1 text-">{field.label}</label> */}
//                   <input
//                     type={field.type}
//                     value={field.value}
//                     onChange={(e) => field.setter(e.target.value)}
//                     className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
//                     placeholder={field.label}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Requester Info */}
//             <h3 className="text-md font-semibold mt-6 mb-2">Requester Info</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {requesterFields.map((field, index) => (
//                 <div key={index}>
//                   {/* <label className="block text-sm mb-1">{field.label}</label> */}
//                   <input
//                     type={field.type}
//                     value={field.value}
//                     onChange={(e) => field.setter(e.target.value)}
//                     className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
//                     placeholder={field.label}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Submit Button */}
//             <Link to="/searchResult">
//               <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-md font-medium mt-6 text-white hover:opacity-90 transition"
//             >
//               Search Property
//             </button>
//             </Link>
//           </form>
//         </div>
//       </section>
//       <PropertySections />
//     </>
//   );
// }
//               type="submit"
//               className="w-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-md font-medium mt-6 text-white hover:opacity-90 transition"
//             >
//               Search Property
//             </button>
//             </Link>
//           </form>
//         </div>
//       </section>
//       <PropertySections />
//     </>
//   );
// }
