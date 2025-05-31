import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center space-x-2 max-w-md mx-auto">
      <input 
        type="text" 
        placeholder="Enter a city name" 
        className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
        Add City
      </button>
    </div>
  );
};

export default SearchBar;