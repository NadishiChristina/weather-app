import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import useWeatherData from './hooks/useWeatherData';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCity, setSelectedCity] = useState(null);
  const { weatherData, loading, error } = useWeatherData();

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setCurrentPage('weather-detail');
  };

  const handleBackClick = () => {
    setCurrentPage('dashboard');
    setSelectedCity(null);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {currentPage === 'dashboard' ? (
        <Dashboard 
          weatherData={weatherData} 
          onCityClick={handleCityClick} 
        />
      ) : (
        <WeatherDetail 
          city={selectedCity} 
          onBackClick={handleBackClick} 
        />
      )}
    </div>
  );
}

export default App;