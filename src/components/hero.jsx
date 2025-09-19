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

  const getFieldValue = (field) => {
    if (field.label === "Property Type" && !selectedPurpose) {
      return null;
    }
    return (
      <div key={field.label}>
        {field.type === "select" ? (
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
        ) : (
          <input
            type={field.type}
            value={formData[field.label] || ""}
            onChange={(e) => handleInputChange(field.label, e.target.value)}
            className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
            placeholder={field.label}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <section className="min-h-screen bg-[#0A0A0A] px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Find Your Perfect Property Within Minutes
            </h1>
            <p className="my-4 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Connecting property owners, buyers, and real estate professionals
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Column */}
            <div className="flex- w-[70%]">
              <div className="bg-[#FFFFFF0D] p-6 sm:p-8 rounded-lg w-full">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {fieldConfig[propertyPurpose].map((field) =>
                      getFieldValue(field)
                    )}
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

                  {/* Requester Info */}
                  <h3 className="text-md font-semibold mt-6 mb-2 text-white">
                    How should we contact you?
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
            </div>

            {/* Image Column */}
            <div className="flex-1 bg-[#FFFFFF0D rounded-lg overflow-hidden w-[40%]">
              <div className="relativ h-full min-h-[300px lg:min-h-[00px]">
                <div className="absolut inset- bg-black/ flex items-cente justify-center">
                  <div className="text-center p-">
                    <img
                      src="./raletale1.png"
                      alt="Logo"
                      className="w-full rounded"
                    />
                    {/* <div className="border-2 border-dashed border-gray-500 rounded-lg p-8 flex flex-col items-center">
                      <svg
                        className="w-12 h-12 text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <p className="text-gray-400 text-sm">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // Handle image upload
                            console.log("File selected:", file);
                          }
                        }}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
