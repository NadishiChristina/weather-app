import React from 'react';
import { getWeatherIcon } from '../../utils/weatherUtils';

const WeatherInfo = ({ city }) => {
  const IconComponent = getWeatherIcon(city.weather[0].main);

  return (
    <>
      {/* City Info */}
      <div className="text-center mb-8 pt-4">
        <h2 className="text-3xl font-bold mb-2">{city.name}</h2>
        <p className="text-blue-100">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Main Weather Display */}
      <div className="flex items-center justify-center space-x-12 mb-8">
        <div className="text-center">
          <IconComponent className="w-24 h-24 text-white mx-auto mb-4" />
          <p className="text-xl text-blue-100">{city.weather[0].description}</p>
        </div>
        
        <div className="text-center">
          <div className="text-8xl font-bold mb-2">{Math.round(city.main.temp)}°c</div>
          <div className="text-blue-100 space-y-1">
            <p>Temp Min: {Math.round(city.main.temp_min)}°c</p>
            <p>Temp Max: {Math.round(city.main.temp_max)}°c</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;