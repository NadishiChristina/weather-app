import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { User, LogOut, ChevronDown, Shield } from 'lucide-react';

const UserProfile = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout({ 
      logoutParams: { 
        returnTo: window.location.origin 
      } 
    });
  };

  return (
    <div className="relative">
      
      {/* User Profile Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <User className="w-5 h-5" />
          )}
        </div>
        <span className="hidden sm:block text-sm font-medium">
          {user.name || user.email}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown Content */}
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
            {/* User Info Section */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  {user.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <User className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {user.name || 'User'}
                  </p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>

            {/* User Details */}
            <div className="p-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>
                  Verified: {user.email_verified ? 'Yes' : 'No'}
                </span>
              </div>
              
              {user.updated_at && (
                <div className="text-xs text-gray-500">
                  Last updated: {new Date(user.updated_at).toLocaleDateString()}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 px-4 py-3 text-left text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;