// components/RealEstateCard.jsx
import { Video, Calendar, MapPin, Bed, Bath } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import CustomVideoPlayer from "./videoPlayer";

const PropertyCard = ({
  image,
  title,
  location,
  price,
  size,
  onSelect,
  isSelected,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`bg-[#333333] shadow-md rounded-lg overflow-hidden w-full ${
        isSelected ? "ring-2 ring-[#00FF94]" : ""
      }`}
    >
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
          <button
            className={`flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 ${
              isSelected
                ? "bg-gray-700 text-white"
                : "bg-[#00FF94] text-black hover:bg-green-700"
            } text-xs sm:text-sm rounded w-full sm:w-auto`}
            onClick={onSelect}
          >
            <Calendar size={14} />
            {isSelected ? "Remove Booking" : "Book Inspection - ₦4,000"}
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 text-xs sm:text-sm rounded hover:bg-gray-100 w-full sm:w-auto"
          >
            <Video size={14} />
            Virtual Tour
          </button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <div className="aspect-video">
              <CustomVideoPlayer />
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/vi"
                className="inline-block bg-[#00FF94] text-black px-6 py-2 rounded-lg hover:bg-green-700"
              >
                View Full Virtual Tour
              </Link>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
