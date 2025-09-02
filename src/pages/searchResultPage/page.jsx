import { useState } from "react";
import FilterBar from "../../components/filterbar";
import PropertyCard from "../../components/propertyCard";
import Pagination from "../../components/pagination";

const listings = [
  {
    image:
      "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=870&auto=format&fit=crop",
    title: "Modern Villa in Lekki",
    location: "Lekki Phase 1, Lagos",
    price: 45000000,
    size: 250,
  },
  {
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=870&auto=format&fit=crop",
    title: "Luxury Apartment in Ikoyi",
    location: "Ikoyi, Lagos",
    price: 60000000,
    size: 180,
  },
  {
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=870&auto=format&fit=crop",
    title: "Beachfront House in Victoria Island",
    location: "Victoria Island, Lagos",
    price: 120000000,
    size: 320,
  },
  {
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=870&auto=format&fit=crop",
    title: "Affordable 2-Bedroom Flat",
    location: "Surulere, Lagos",
    price: 18000000,
    size: 90,
  },
  {
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=870&auto=format&fit=crop",
    title: "Modern Bungalow",
    location: "Gwarinpa, Abuja",
    price: 35000000,
    size: 140,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop",
    title: "5-Bedroom Mansion",
    location: "Asokoro, Abuja",
    price: 95000000,
    size: 400,
  },
  {
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870&auto=format&fit=crop",
    title: "Student Hostel Apartment",
    location: "University of Ibadan, Oyo",
    price: 8000000,
    size: 65,
  },
  {
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=870&auto=format&fit=crop",
    title: "Smart Home with Pool",
    location: "Banana Island, Lagos",
    price: 150000000,
    size: 500,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e6e4c76f9a6?q=80&w=870&auto=format&fit=crop",
    title: "3-Bedroom Duplex",
    location: "Port Harcourt, Rivers",
    price: 28000000,
    size: 160,
  },
  {
    image:
      "https://images.unsplash.com/photo-1599423300749-8b61e3c7e140?q=80&w=870&auto=format&fit=crop",
    title: "Luxury Penthouse",
    location: "Maitama, Abuja",
    price: 125000000,
    size: 350,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=870&auto=format&fit=crop",
    title: "Townhouse with Garage",
    location: "Magodo, Lagos",
    price: 40000000,
    size: 200,
  },
  {
    image:
      "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=870&auto=format&fit=crop",
    title: "Studio Apartment",
    location: "Yaba, Lagos",
    price: 12000000,
    size: 55,
  },
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=870&auto=format&fit=crop",
    title: "Classic Family House",
    location: "Enugu, Nigeria",
    price: 22000000,
    size: 130,
  },
  {
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=870&auto=format&fit=crop",
    title: "Cozy Apartment",
    location: "Abeokuta, Ogun",
    price: 10000000,
    size: 75,
  },
  {
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=870&auto=format&fit=crop",
    title: "Luxury Estate Villa",
    location: "Eko Atlantic City, Lagos",
    price: 200000000,
    size: 600,
  },
];


const ListingPage = () => {

  const [currentPage, setCurrentPage] = useState(3); // Default to page 3
  const totalPages = 5;

  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">245 Properties Found</h2>
      <FilterBar />
      <div className="flex justify-end mb-4">
        <select className="border px-3 py-2 rounded">
          <option>Sort Newest First</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <PropertyCard key={index} {...listing} />
        ))}
      </div>
      <div className=" mt-8 bg-[#1A1A1A] text-white">
        {/* Your property cards would go here */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ListingPage;
