// components/FilterBar.jsx
import { useState } from "react";
import {
  advancedFilterConfig,
  smartFilterConfig,
  sortingOptions,
} from "./formConfig";

const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Default to closed

  return (
    <div className="border-b bg border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 text-left"
      >
        <span className="font-medium text-gray-200">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96 mb-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const FilterBar = ({ onFilterChange, onSortChange }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: { min: "", max: "" },
    propertyType: [],
    bedrooms: "",
    amenities: [],
    furnishing: [],
    condition: [],
    parking: "",
    propertySize: { min: "", max: "" },
    floorDetails: { floor: "", totalFloors: "" },
    yearBuilt: "",
    securityFeatures: [],
    utilities: [],
    lifestyleAmenities: [],
    accessibility: [],
    communityServices: [],
    environment: {
      floodZone: "",
      trafficLevel: "",
      noiseLevel: "",
    },
    smartFilters: {
      verificationStatus: [],
      paymentOptions: [],
      inspectionAvailability: [],
    },
    sortBy: "newest",
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const propertyTypes = [
    "House",
    "Apartment",
    "Villa",
    "Townhouse",
    "Land",
    "Commercial",
  ];

  const amenities = [
    "Swimming Pool",
    "Garden",
    "Garage",
    "Security",
    "Gym",
    "Air Conditioning",
  ];

  return (
    <div className="relative bg-transparent">
      {/* Filter Toggle Button */}
      <div className="flex items-center">
        <button
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className="mb- inline-flex items-center px-4 py-2 bg-[#2A2A2A] rounded-lg text-sm text-gray-300 hover:bg-[#3A3A3A]"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filters{" "}
          {filters.propertyType.length > 0 &&
            `(${filters.propertyType.length})`}
        </button>

        {/* Compact Sort Dropdown */}
        <select
          className="ml-2 bg-[#2A2A2A] px-3 py-2 rounded text-sm border border-gray-700 focus:border-green-500 focus:outline-none text-gray-300"
          value={filters.sortBy}
          onChange={(e) => {
            handleFilterChange("sortBy", e.target.value);
            onSortChange?.(e.target.value);
          }}
        >
          {sortingOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Filters Panel - Updated for left positionind */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-80 bg-[#1A1A1A]/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out
        border-r border-gray-700/50 shadow-xl
        ${isFilterVisible ? "translate-x-0" : "-translate-x-full"}
        overflow-y-auto
      `}
      >
        <div className="p-4 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Filters</h3>
            <button
              onClick={() => setIsFilterVisible(false)}
              className="p-2 hover:bg-[#2A2A2A]/80 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Quick Filters */}
          <div className="space-y-2 border-b border-gray-700/50 pb-4">
            <h4 className="text-sm font-medium text-gray-300">Quick Filters</h4>
            <div className="flex flex-wrap gap-2">
              {smartFilterConfig.verificationStatus.map((option) => (
                <button
                  key={option.value}
                  className={`px-3 py-1 rounded-full text-xs ${
                    filters.smartFilters.verificationStatus.includes(
                      option.value
                    )
                      ? "bg-green-500 text-black"
                      : "bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]"
                  }`}
                  onClick={() => {
                    const newValue =
                      filters.smartFilters.verificationStatus.includes(
                        option.value
                      )
                        ? filters.smartFilters.verificationStatus.filter(
                            (v) => v !== option.value
                          )
                        : [
                            ...filters.smartFilters.verificationStatus,
                            option.value,
                          ];
                    handleFilterChange("smartFilters", {
                      ...filters.smartFilters,
                      verificationStatus: newValue,
                    });
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Existing Filter Sections - more compact */}
          <div className="space-y-2">
            {/* Price Range */}
            <FilterSection title="Price Range">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    placeholder="Min Price"
                    className="w-full bg-[#2A2A2A] px-3 py-2 rounded text-sm border border-gray-700 focus:border-green-500 focus:outline-none"
                    value={filters.priceRange.min}
                    onChange={(e) =>
                      handleFilterChange("priceRange", {
                        ...filters.priceRange,
                        min: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Max Price"
                    className="w-full bg-[#2A2A2A] px-3 py-2 rounded text-sm border border-gray-700 focus:border-green-500 focus:outline-none"
                    value={filters.priceRange.max}
                    onChange={(e) =>
                      handleFilterChange("priceRange", {
                        ...filters.priceRange,
                        max: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </FilterSection>

            {/* Property Type */}
            <FilterSection title="Property Type">
              <div className="grid grid-cols-2 gap-2">
                {propertyTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.propertyType.includes(type)}
                      onChange={(e) => {
                        const newTypes = e.target.checked
                          ? [...filters.propertyType, type]
                          : filters.propertyType.filter((t) => t !== type);
                        handleFilterChange("propertyType", newTypes);
                      }}
                      className="rounded border-gray-700 text-green-500 focus:ring-green-500 bg-[#2A2A2A]"
                    />
                    <span className="text-sm text-gray-300">{type}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Bedrooms */}
            <FilterSection title="Bedrooms">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, "5+"].map((num) => (
                  <button
                    key={num}
                    className={`px-4 py-2 rounded text-sm ${
                      filters.bedrooms === num
                        ? "bg-green-500 text-black"
                        : "bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]"
                    }`}
                    onClick={() => handleFilterChange("bedrooms", num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </FilterSection>

            {/* Amenities */}
            <FilterSection title="Amenities">
              <div className="grid grid-cols-2 gap-2">
                {amenities.map((amenity) => (
                  <label key={amenity} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.amenities.includes(amenity)}
                      onChange={(e) => {
                        const newAmenities = e.target.checked
                          ? [...filters.amenities, amenity]
                          : filters.amenities.filter((a) => a !== amenity);
                        handleFilterChange("amenities", newAmenities);
                      }}
                      className="rounded border-gray-700 text-green-500 focus:ring-green-500 bg-[#2A2A2A]"
                    />
                    <span className="text-sm text-gray-300">{amenity}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Advanced Filters */}
            <FilterSection title="Advanced Filters">
              <div className="space-y-4">
                {/* Furnishing */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">
                    Furnishing
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {advancedFilterConfig.furnishing.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={filters.furnishing.includes(option)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...filters.furnishing, option]
                              : filters.furnishing.filter((f) => f !== option);
                            handleFilterChange("furnishing", newValue);
                          }}
                          className="rounded border-gray-700 text-green-500 focus:ring-green-500 bg-[#2A2A2A]"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Property Details */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">
                    Property Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Parking Spaces"
                      className="w-full bg-[#2A2A2A] px-3 py-2 rounded text-sm border border-gray-700 focus:border-green-500 focus:outline-none"
                      value={filters.parking}
                      onChange={(e) =>
                        handleFilterChange("parking", e.target.value)
                      }
                    />
                    <input
                      type="number"
                      placeholder="Year Built"
                      className="w-full bg-[#2A2A2A] px-3 py-2 rounded text-sm border border-gray-700 focus:border-green-500 focus:outline-none"
                      value={filters.yearBuilt}
                      onChange={(e) =>
                        handleFilterChange("yearBuilt", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </FilterSection>

            {/* Neighborhood & Lifestyle */}
            <FilterSection title="Neighborhood & Lifestyle">
              <div className="space-y-4">
                {/* Security Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">
                    Security Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {advancedFilterConfig.securityFeatures.map((feature) => (
                      <label
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={filters.securityFeatures.includes(feature)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...filters.securityFeatures, feature]
                              : filters.securityFeatures.filter(
                                  (f) => f !== feature
                                );
                            handleFilterChange("securityFeatures", newValue);
                          }}
                          className="rounded border-gray-700 text-green-500 focus:ring-green-500 bg-[#2A2A2A]"
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Environment */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">
                    Environment
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      className="w-full bg-[#2A2A2A] px-3 py-2 rounded text-sm border border-gray-700 focus:border-green-500 focus:outline-none"
                      value={filters.environment.trafficLevel}
                      onChange={(e) =>
                        handleFilterChange("environment", {
                          ...filters.environment,
                          trafficLevel: e.target.value,
                        })
                      }
                    >
                      <option value="">Traffic Level</option>
                      {advancedFilterConfig.trafficLevel.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    <select
                      className="w-full bg-[#2A2A2A] px-3 py-2 rounded text-sm border border-gray-700 focus:border-green-500 focus:outline-none"
                      value={filters.environment.noiseLevel}
                      onChange={(e) =>
                        handleFilterChange("environment", {
                          ...filters.environment,
                          noiseLevel: e.target.value,
                        })
                      }
                    >
                      <option value="">Noise Level</option>
                      {advancedFilterConfig.noiseLevel.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </FilterSection>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={() => {
              setFilters({
                priceRange: { min: "", max: "" },
                propertyType: [],
                bedrooms: "",
                amenities: [],
                smartFilters: {
                  verificationStatus: [],
                  paymentOptions: [],
                  inspectionAvailability: [],
                },
                sortBy: "newest",
              });
            }}
            className="w-full mt-4 px-4 py-2 bg-[#2A2A2A]/80 text-gray-300 rounded hover:bg-[#3A3A3A]/80 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isFilterVisible && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-30"
          onClick={() => setIsFilterVisible(false)}
        />
      )}
    </div>
  );
};

export default FilterBar;
