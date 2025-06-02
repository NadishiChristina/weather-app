import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center space-x-2 max-w-md mx-auto">
      <input 
        type="text" 
        placeholder="Enter a city name" 
        className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="relative group">
      <button 
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
      >
        Add City
      </button>
      <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
        This functionality is not required for the assignment
      </span>
    </div>
    </div>
  );
};

export default SearchBar;