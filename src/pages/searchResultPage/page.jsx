import FilterBar from "../../components/filterbar";
import PropertyCard from "../../components/propertyCard";

const listings = [
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Modern Villa in Lekki',
    location: 'Lekki Phase 1, Lagos',
    price: 45000000,
    size: 250,
  },
  // Add more listings as needed
];



const ListingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
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
    </div>
  );
};

export default ListingPage;
