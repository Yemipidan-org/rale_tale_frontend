// components/RealEstateCard.jsx
import { Video, Calendar, MapPin, Bed, Bath } from "lucide-react";

const PropertyCard = ({ image, title, location, price, size }) => {
  return (
    <div className="bg-[#333333] shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg text-white font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">
          <MapPin size={16} className="inline-block mr-1" /> {location}
        </p>
        <div className="flex gap-4 text-sm text-gray-700">
          <p className="text-[#4FC3F7]">
            <Bed size={16} className="inline-block mr-1" /> 4 Beds
          </p>
          <p className="text-[#4FC3F7]">
            <Bath size={16} className="inline-block mr-1" /> 4 Baths
          </p>
        </div>
        <div className="flex justify-between text-[20px] font-semibold text-gray-700">
          <span className="text-[#00E676]">₦{price.toLocaleString()}</span>
          {/* <span>{size}m²</span> */}
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex items-center gap-1 px-3 py-2 bg-[#00FF94] text-black text-sm rounded hover:bg-green-700">
            <Calendar size={16} />
            Book Inspection - ₦4,000
          </button>
          <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-sm rounded hover:bg-gray-100">
            <Video size={16} />
            Virtual Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
