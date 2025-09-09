// components/RealEstateCard.jsx
import { Video, Calendar, MapPin, Bed, Bath } from "lucide-react";
import { Link } from "react-router-dom";

const PropertyCard = ({ image, title, location, price, size }) => {
  return (
    <div className="bg-[#333333] shadow-md rounded-lg overflow-hidden w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] sm:h-[220px] md:h-[180px] lg:h-[200px] object-cover"
      />
      <div className="p-3 sm:p-4 space-y-2">
        <h3 className="text-base sm:text-lg text-white font-semibold line-clamp-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
          <MapPin size={14} className="inline-block mr-1" /> {location}
        </p>
        <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700">
          <p className="text-[#4FC3F7]">
            <Bed size={14} className="inline-block mr-1" /> 4 Beds
          </p>
          <p className="text-[#4FC3F7]">
            <Bath size={14} className="inline-block mr-1" /> 4 Baths
          </p>
        </div>
        <div className="flex justify-between text-base sm:text-[20px] font-semibold text-gray-700">
          <span className="text-[#00E676]">₦{price.toLocaleString()}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-4">
          <button className="flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-[#00FF94] text-black text-xs sm:text-sm rounded hover:bg-green-700 w-full sm:w-auto">
            <Calendar size={14} />
            Book Inspection - ₦4,000
          </button>
          {/* <Link to="/" className="hover:text-white"> */}
          <Link to="/vi" className="flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 text-xs sm:text-sm rounded hover:bg-gray-100 w-full sm:w-auto">
            <Video size={14} />
            Virtual Tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
