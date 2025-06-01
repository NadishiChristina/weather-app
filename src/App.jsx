import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import useWeatherData from './hooks/useWeatherData';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCityIndex, setSelectedCityIndex] = useState(null);
  const { weatherData, loading, error } = useWeatherData();

  // Open detailed view when dashboard card is been clicked
  const handleCityClick = (city, index) => {
    setSelectedCity(city);
    setSelectedCityIndex(index); // Store the index
    setCurrentPage('weather-detail');
  };

  // Handle back navigation from detailed view back to dashboard
  const handleBackClick = () => {
    setCurrentPage('dashboard');
    setSelectedCity(null);
    setSelectedCityIndex(null); // Reset index
  };

  return (
    <ProtectedRoute>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="min-h-screen bg-red-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Weather Data Error</h2>
            <p className="text-red-500 mb-4">{error.message || 'Failed to load weather data'}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        <>
          {currentPage === 'dashboard' ? (
            <Dashboard 
              weatherData={weatherData} 
              onCityClick={handleCityClick} 
            />
          ) : (
            <WeatherDetail 
              city={selectedCity} 
              cityIndex={selectedCityIndex} // Pass the index
              onBackClick={handleBackClick} 
            />
          )}
        </>
      )}
    </ProtectedRoute>
  );
}

export default App;