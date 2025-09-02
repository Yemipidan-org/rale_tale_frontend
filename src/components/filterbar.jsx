// components/FilterBar.jsx
const FilterBar = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <select className="border px-3 py-2 rounded w-40">
        <option>Property Type</option>
      </select>
      <select className="border px-3 py-2 rounded w-40">
        <option>Price Range</option>
      </select>
      <select className="border px-3 py-2 rounded w-40">
        <option>Location</option>
      </select>
      <select className="border px-3 py-2 rounded w-40">
        <option>Bedrooms</option>
      </select>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Search
      </button>
    </div>
  );
};

export default FilterBar;
