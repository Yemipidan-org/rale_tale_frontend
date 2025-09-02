// components/RealEstateCard.jsx
import { Video, Calendar } from "lucide-react";

const PropertyCard = ({ image, title, location, price, size }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between text-sm text-gray-700">
          <span>₦{price.toLocaleString()}</span>
          <span>{size}m²</span>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">
            <Calendar size={16} />
            Book Inspection - ₦10,000
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
