import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CloudSun, Lock, Shield } from 'lucide-react';
import Footer from '../Layout/Footer'; 

const LoginScreen = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'login'
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">

        {/* Weather App Branding */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CloudSun className="w-12 h-12 text-blue-300" />
            <h1 className="text-4xl font-bold text-white">Weather App</h1>
          </div>
          <p className="text-blue-200 text-lg">
            Get real-time weather updates from around the world
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Please sign in to access weather data</p>
          </div>

          {/* Security Features */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Secure Authentication</span>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-7">
              <li>• Multi-factor authentication enabled with OTP + Email</li>
              <li>• Restricted access for authorized users only</li>
            </ul>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                <span>Sign In</span>
              </>
            )}
          </button>

          {/* Test Account Info */}
          <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-800 font-medium mb-1">Test Account:</p>
            <p className="text-xs text-yellow-700">careers@fidenz.com</p>
            <p className="text-xs text-yellow-700">Pass#fidenz</p>
          </div>
        </div>

          {/* Footer */}
          <Footer />
      </div>
    </div>
  );
};

export default LoginScreen;