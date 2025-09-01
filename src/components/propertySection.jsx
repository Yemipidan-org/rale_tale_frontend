"use client";
import {
  Home,
  Building2,
  Handshake,
  BarChart2,
  Shield,
  Users,
} from "lucide-react";

function FeatureCard({ icon: Icon, title, description, buttonText }) {
  return (
    <div className="bg-[#111] p-6 rounded-lg shadow-md flex flex-col justify-between text-white">
      <div>
        <Icon className="w-8 h-8 text-green-500 mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>
      <button className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-sm font-medium px-4 py-2 rounded-md w-fit">
        {buttonText}
      </button>
    </div>
  );
}

function BenefitItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-6 h-6 text-green-500" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-400">{value}</h2>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

export default function PropertySections() {
  return (
    <div className="bg-black text-white space-y- ">
      {/* Top Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-20 px-6">
        <FeatureCard
          icon={Home}
          title="Find Your Dream Property"
          description="Browse through our curated selection of premium properties"
          buttonText="Start Searching"
        />
        <FeatureCard
          icon={Building2}
          title="List Your Property"
          description="Reach thousands of potential buyers and tenants"
          buttonText="Start Listing"
        />
        <FeatureCard
          icon={Handshake}
          title="Join Our Network"
          description="Partner with us as a professional realtor"
          buttonText="Become a Partner"
        />
      </div>

      {/* Benefits Section */}
      <div className="bg-[#111] py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <BenefitItem
            icon={BarChart2}
            title="Smart Property Matching"
            description="Advanced algorithms to find your perfect property match"
          />
          <BenefitItem
            icon={Shield}
            title="Secure Transactions"
            description="Safe and transparent property transactions"
          />
          <BenefitItem
            icon={Users}
            title="Professional Network"
            description="Connect with verified realtors and property owners"
          />
          <BenefitItem
            icon={BarChart2}
            title="Market Analytics"
            description="Real-time insights and property market trends"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 py-20">
        <StatItem value="15,000+" label="Properties Listed" />
        <StatItem value="25,000+" label="Happy Clients" />
        <StatItem value="500+" label="Professional Realtors" />
        <StatItem value="100+" label="Cities Covered" />
      </div>
    </div>
  );
}
