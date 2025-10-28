"use client";
import React, { useState } from "react";
import PropertyDetailsForm from "../../components/PropertyOwner/PropertyDetailsForm";
import PropertyLocationForm from "../../components/PropertyOwner/PropertyLocationForm";
import PropertyMediaForm from "../../components/PropertyOwner/PropertyMediaForm";
import PropertyFeaturesForm from "../../components/PropertyOwner/PropertyFeaturesForm";
import PropertyDocumentsForm from "../../components/PropertyOwner/PropertyDocumentsForm";
import PropertyRestrictionsForm from "../../components/PropertyOwner/PropertyRestrictionsForm";
import PropertyTechnicalDetailsForm from "../../components/PropertyOwner/PropertyTechnicalDetailsForm";
import PropertyContactInformationForm from "../../components/PropertyOwner/PropertyContactInformationForm";
import PropertyInspectionAndTransactionForm from "../../components/PropertyOwner/PropertyInspectionAndTransactionForm";
import PropertyMarketingAndExposureForm from "../../components/PropertyOwner/PropertyMarketingAndExposureForm";
import PropertyLegalClausesForm from "../../components/PropertyOwner/PropertyLegalClausesForm";

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

  // Add new states for steps 6-11
  const [propertyRestrictions, setPropertyRestrictions] = useState({
    ageRestrictions: [],
    petPolicies: [],
    occupancyLimits: "",
    useRestrictions: [],
  });

  const [technicalDetails, setTechnicalDetails] = useState({
    buildingAge: "",
    constructionType: "",
    roofType: "",
    foundation: "",
    utilities: [],
  });

  const [contactInformation, setContactInformation] = useState({
    agentName: "",
    agentPhone: "",
    agentEmail: "",
    preferredContactMethod: "",
    availabilityHours: [],
  });

  const [inspectionAndTransaction, setInspectionAndTransaction] = useState({
    inspectionDays: [],
    inspectionHours: "",
    paymentMethods: [],
    documentationRequired: [],
  });

  const [marketingExposure, setMarketingExposure] = useState({
    listingVisibility: "",
    promotionalFeatures: [],
    specialOffers: "",
    featuredListing: false,
  });

  const [legalClauses, setLegalClauses] = useState({
    termsAndConditions: false,
    disclaimers: [],
    privacyPolicy: false,
    legalDisclosures: [],
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
        setStep(6);
        break;
      case 6:
        setPropertyRestrictions(data);
        setStep(7);
        break;
      case 7:
        setTechnicalDetails(data);
        setStep(8);
        break;
      case 8:
        setContactInformation(data);
        setStep(9);
        break;
      case 9:
        setInspectionAndTransaction(data);
        setStep(10);
        break;
      case 10:
        setMarketingExposure(data);
        setStep(11);
        break;
      case 11:
        setLegalClauses(data);
        handleFinalSubmit();
        break;
    }
  };

  const handleFinalSubmit = () => {
    const finalData = {
      ...propertyDetails,
      ...propertyLocation,
      ...propertyMedia,
      ...propertyDocs,
      ...propertyFeatures,
      ...propertyRestrictions,
      ...technicalDetails,
      ...contactInformation,
      ...inspectionAndTransaction,
      ...marketingExposure,
      ...legalClauses,
    };
    console.log("Final submission:", finalData);
    alert("Property listing submitted successfully! 🎉");
  };

  const handleBack = () => setStep(step - 1);

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
      {step === 6 && (
        <PropertyRestrictionsForm
          initialData={propertyRestrictions}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 7 && (
        <PropertyTechnicalDetailsForm
          initialData={technicalDetails}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 8 && (
        <PropertyContactInformationForm
          initialData={contactInformation}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 9 && (
        <PropertyInspectionAndTransactionForm
          initialData={inspectionAndTransaction}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 10 && (
        <PropertyMarketingAndExposureForm
          initialData={marketingExposure}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 11 && (
        <PropertyLegalClausesForm
          initialData={legalClauses}
          onBack={handleBack}
          onNext={handleNext}
          isFinalStep={true}
        />
      )}
    </div>
  );
}
