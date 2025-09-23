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
                  className={`w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400 ${
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
                        className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400"
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
                <form className="space-y-6">
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
                              className={`w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none text-sm placeholder-gray-400 ${
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
