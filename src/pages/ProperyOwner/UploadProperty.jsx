"use client";
import React, { useState } from "react";
import PropertyDetailsForm from "../../components/PropertyOwner/PropertyDetailsForm";
import PropertyLocationForm from "../../components/PropertyOwner/PropertyLocationForm";
import PropertyMediaForm from "../../components/PropertyOwner/PropertyMediaForm";
import PropertyFeaturesForm from "../../components/PropertyOwner/PropertyFeaturesForm";
import PropertyDocumentsForm from "../../components/PropertyOwner/PropertyDocumentsForm";

export default function PropertyListingForm() {
  const [step, setStep] = useState(1);

  // Initialize all form states
  const [propertyDetails, setPropertyDetails] = useState({
    propertyType: "Apartment",
    listingType: "For Sale",
    price: "",
    paymentFrequency: "Monthly",
    paymentTerms: "",
    rentEscalation: "",
    agencyFee: "",
    legalFee: "",
    cautionFee: "",
    features: [], // Add this line to initialize features array
  });

  const [propertyLocation, setPropertyLocation] = useState({
    address: "",
    busStop: "",
    landmarks: "",
    city: "",
    state: "Lagos",
    lga: "Eti-Osa",
    latitude: "6.4281",
    longitude: "3.4093",
    features: [], // Add this line to initialize features array
  });

  const [propertyMedia, setPropertyMedia] = useState({
    images: [],
    videos: [],
    virtualTour: "",
  });

  const [propertyDocs, setPropertyDocs] = useState({
    title: null,
    approvals: [],
    certificates: [],
  });

  const [propertyFeatures, setPropertyFeatures] = useState({
    amenities: [],
    facilities: [],
    utilities: [],
  });

  const handleNext = (data) => {
    switch (step) {
      case 1:
        setPropertyDetails(data);
        setStep(2);
        break;
      case 2:
        setPropertyLocation(data);
        setStep(3);
        break;
      case 3:
        setPropertyMedia(data);
        setStep(4);
        break;
      case 4:
        setPropertyDocs(data);
        setStep(5);
        break;
      case 5:
        setPropertyFeatures(data);
        handleSubmitAll();
        break;
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmitAll = () => {
    const finalData = {
      ...propertyDetails,
      ...propertyLocation,
      ...propertyMedia,
      ...propertyDocs,
      ...propertyFeatures,
    };
    console.log("Submitting complete property data:", finalData);
    alert("Property submitted successfully ✅");
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 sm:p-8 space-y-6">
      {step === 1 && (
        <PropertyDetailsForm
          initialData={propertyDetails}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <PropertyLocationForm
          initialData={propertyLocation}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <PropertyMediaForm
          initialData={propertyMedia}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 4 && (
        <PropertyDocumentsForm
          initialData={propertyDocs}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 5 && (
        <PropertyFeaturesForm
          initialData={propertyFeatures}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
