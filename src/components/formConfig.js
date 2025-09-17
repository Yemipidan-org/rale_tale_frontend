export const propertyTypesByPurpose = {
  Residential: ["Flat", "Duplex", "Bungalow", "Story Building", "Land"],
  Commercial: [
    "Flat",
    "Duplex",
    "Shopping Complex",
    "Bungalow",
    "Story Building",
    "Land",
    "Filling Station",
    "Warehouse",
    "Motel/Hotel/Guest House",
  ],
};

// Keep the original propertyTypes array for backward compatibility
export const propertyTypes = [
  ...new Set([
    ...propertyTypesByPurpose.Residential,
    ...propertyTypesByPurpose.Commercial,
  ]),
];

export const propertyPurposes = ["Residential", "Commercial"];

export const contactPreferences = [
  "Phone Call",
  "SMS",
  "Email",
  "WhatsApp",
  "All of the above",
];

export const fieldConfig = {
  Buy: [
    {
      label: "Property Need",
      type: "select",
      options: ["Buy", "Sell", "Lease"],
    },
    { label: "Property Purpose", type: "select", options: propertyPurposes },
    // We'll handle Property Type options dynamically in the component
    { label: "Property Type", type: "select", options: [] },
    { label: "State", type: "text" },
    { label: "Local Government Area", type: "text" },
    { label: "Neighbourhood", type: "text" },
    { label: "Min Price", type: "number" },
    { label: "Max Price", type: "number" },
    { label: "Landmark", type: "text" },
    { label: "Budget From", type: "number" },
    { label: "Budget To", type: "number" },
    { label: "Inspection Date", type: "date" },
    { label: "Inspection Time", type: "time" },
  ],
  Rent: [
    {
      label: "Property Need",
      type: "select",
      options: ["Buy", "Sell", "Lease"],
    },
    { label: "Property Purpose", type: "select", options: propertyPurposes },
    { label: "Property Type", type: "select", options: propertyTypes },
    { label: "State", type: "text" },
    { label: "Neighbourhood", type: "text" },
    { label: "Min Price", type: "number" },
    { label: "Max Price", type: "number" },
    { label: "Inspection Date", type: "date" },
    { label: "Time From", type: "time" },
    { label: "Time To", type: "time" },
  ],
  Lease: [
    {
      label: "Property Need",
      type: "select",
      options: ["Buy", "Sell", "Lease"],
    },
    { label: "Property Purpose", type: "select", options: propertyPurposes },
    { label: "Property Type", type: "select", options: propertyTypes },
    { label: "State", type: "text" },
    { label: "Local Government Area", type: "text" },
    { label: "Neighbourhood", type: "text" },
    { label: "Preferred Feedback", type: "text" },
  ],
};

export const requesterFields = [
  { label: "Full Name", type: "text" },
  { label: "Phone Call Line", type: "tel" },
  { label: "Valid Email", type: "email" },
  { label: "WhatsApp Line", type: "tel" },
  {
    label: "Preferred Contact Method",
    type: "select",
    options: contactPreferences,
  },
];

export const getAdditionalFields = (propertyType) => {
  switch (propertyType) {
    case "Flat":
    case "Duplex":
    case "Bungalow":
      return [{ label: "Number of Bedrooms", type: "number", min: 1 }];
    case "Shopping Complex":
      return [{ label: "Number of Suites", type: "number", min: 1 }];
    case "Story Building":
      return [{ label: "Number of Stories", type: "number", min: 1 }];
    case "Land":
      return [
        {
          label: "Land Type",
          type: "select",
          options: ["Residential", "Commercial", "Agricultural", "Industrial"],
        },
      ];
    case "Filling Station":
      return [{ label: "Number of Fuel Pumps", type: "number", min: 1 }];
    case "Warehouse":
      return [{ label: "Size (sqm)", type: "number", min: 1 }];
    case "Hotel":
    case "Motel/Guest House":
      return [{ label: "Number of Rooms", type: "number", min: 1 }];
    default:
      return [];
  }
};

export const getPropertyTypesByPurpose = (purpose) => {
  return propertyTypesByPurpose[purpose] || [];
};
