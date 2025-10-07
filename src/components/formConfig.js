export const propertyTypesByPurpose = {
  Residential: [
    "Apartment / Flat",
    "Duplex, Bungalow",
    "Terrace House",
    "Penthouse",
    "Mansion",
    "Villa",
    "Studio Apartment",
    "Self-Contain / Mini Flat",
  ],
  Commercial: [
    "Office Space",
    "Shop",
    "Showroom",
    "Hotel / Guest House",
    "Event Centre",
    "Restaurant / Bar",
    "Mall / Plaza Unit",
    "Co-working Space",
  ],
  Industrial: ["Warehouse", "Factory", "Workshop", "Industrial Land"],
  Land: [
    "Residential Land",
    "Commercial Land",
    "Industrial Land",
    "Agricultural Land",
    "Mixed-use Land",
  ],
  "Mixed/Other": [
    "Block of Flats",
    "Short-let Apartment",
    "Hostel / Student Housing",
    "Religious Building (Church, Mosque)",
    "Filling Station",
    "School / Educational Facility",
    "Hospital / Clinic",
    "Farm / Agricultural Facility",
  ],
};

// Keep the original propertyTypes array for backward compatibility
export const propertyTypes = [
  ...new Set([
    ...propertyTypesByPurpose.Residential,
    ...propertyTypesByPurpose.Commercial,
    ...propertyTypesByPurpose.Industrial,
    ...propertyTypesByPurpose.Land,
    ...propertyTypesByPurpose["Mixed/Other"],
  ]),
];

export const propertyPurposes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Mixed/Other",
];

export const contactPreferences = [
  "Phone Call",
  "SMS",
  "Phone Call and SMS",
  "Email",
  "WhatsApp",
  "All of the above",
];

export const fieldConfig = {
  Buy: [
    {
      label: "I need property to?",
      type: "select",
      options: ["Buy", "Rent", "Short Let", "Lease", "Join Ventures"],
    },
    { label: "Property Purpose", type: "select", options: propertyPurposes },
    // We'll handle Property Type options dynamically in the component
    { label: "Property Type", type: "select", options: [] },
    { label: "State", type: "text" },
    { label: "Local Government Area", type: "text" },
    { label: "Landmark", type: "text" },
    {
      section: "Budget",
      fields: [
        { label: "Budget From (₦)", type: "number" },
        { label: "Budget To (₦)", type: "number" },
      ],
    },
    {
      section: "I am available for inspection on:",
      fields: [
        { label: "Inspection Date", type: "date" },
        { label: "Inspection Time", type: "time" },
      ],
    },
  ],
  Rent: [
    {
      label: "Property Need",
      type: "select",
      options: ["Buy", "Sell", "Lease"],
    },
    { label: "Property Purpose", type: "select", options: propertyPurposes },
    { label: "Property Type", type: "select", options: [] },
    { label: "State", type: "text" },
    { label: "Landmark", type: "text" },
    { label: "Budget From", type: "number" },
    { label: "Budget To", type: "number" },
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
    { label: "Property Type", type: "select", options: [] },
    { label: "State", type: "text" },
    { label: "Local Government Area", type: "text" },
    { label: "Landmark", type: "text" },
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
    type: "multiselect", // render as a dropdown that contains checkboxes
    options: contactPreferences,
  },
];

const bedroomOptions = ["1", "2", "3", "4", "5", "6", "Others"];
const storyOptions = ["1-20", "21-40", "41-60", "61-80", "81-100", "100+"];

export const getAdditionalFields = (propertyType) => {
  switch (propertyType) {
    case "Flat":
    case "Duplex":
    case "Bungalow":
      return [
        {
          label: "Number of Bedrooms",
          type: "select",
          options: bedroomOptions,
        },
      ];
    case "Shopping Complex":
      return [{ label: "Number of Suites", type: "number", min: 1 }];
    case "Story Building":
      return [
        {
          label: "Number of Stories",
          type: "select",
          options: storyOptions,
        },
      ];
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

export const advancedFilterConfig = {
  furnishing: ["Furnished", "Semi-Furnished", "Unfurnished"],
  condition: ["New", "Renovated", "Needs Some Work"],
  securityFeatures: [
    "Gated Community",
    "24/7 Security",
    "CCTV",
    "Street Lights",
  ],
  utilities: ["Stable Electricity", "Borehole", "Backup Power", "Estate Water"],
  lifestyleAmenities: [
    "Swimming Pool",
    "Gym",
    "Playgrounds",
    "Green Areas",
    "Clubhouse",
  ],
  accessibility: [
    "Schools Nearby",
    "Hospitals Nearby",
    "Markets Nearby",
    "Airport Nearby",
    "Business District Nearby",
  ],
  communityServices: [
    "Waste Disposal",
    "Estate Management",
    "Fire Service Access",
  ],
  trafficLevel: ["Low", "Medium", "High"],
  noiseLevel: ["Quiet", "Medium", "Busy"],
};

export const smartFilterConfig = {
  verificationStatus: [
    { label: "Verified Listings Only", value: "verified" },
    { label: "Exclusive Listings", value: "exclusive" },
    { label: "Featured/Premium", value: "premium" },
  ],
  paymentOptions: [
    { label: "Installment", value: "installment" },
    { label: "Mortgage", value: "mortgage" },
    { label: "Outright", value: "outright" },
  ],
  inspectionAvailability: [
    { label: "Next 3 Days", value: "next3days" },
    { label: "This Weekend", value: "weekend" },
    { label: "Anytime", value: "anytime" },
  ],
};

export const sortingOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Most Viewed", value: "most_viewed" },
  { label: "Closest to Me", value: "nearest" },
];
