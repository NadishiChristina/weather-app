import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import LoginScreen from '../components/Auth/LoginScreen';

const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated, error } = useAuth0();

  // Show loading spinner while Auth0 is initializing
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Show error screen if there's an authentication error
  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h2>
          <p className="text-red-500 mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Only show login screen if definitely not authenticated
  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  // User is authenticated — show the protected content
  return <>{children}</>;
};

export default ProtectedRoute;