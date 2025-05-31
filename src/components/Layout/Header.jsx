import React from 'react';
import { CloudSun } from 'lucide-react';
import SearchBar from '../Dashboard/SearchBar';
import UserProfile from '../Auth/UserProfile';

const Header = ({ showSearch = false }) => {
  return (
    <header className="bg-gray-800 p-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Top Row: Centered Title, Right-Aligned Profile */}
        <div className="relative flex justify-center items-center mb-4">
          <div className="flex items-center space-x-3">
            <CloudSun className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Weather App</h1>
          </div>

          {/* UserProfile in top-right corner */}
          <div className="absolute right-0 top-0">
            <UserProfile />
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="flex justify-center">
            <SearchBar />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
