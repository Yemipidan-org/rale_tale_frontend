// components/Pagination.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 bg-[#1A1A1A] text-white">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-1 sm:p-2 text-blue-400 hover:text-blue-600 disabled:opacity-30"
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium
            ${
              page === currentPage
                ? "bg-green-500 text-white"
                : "hover:bg-gray-700"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-1 sm:p-2 text-blue-400 hover:text-blue-600 disabled:opacity-30"
      >
        <ChevronRight size={16} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default Pagination;
