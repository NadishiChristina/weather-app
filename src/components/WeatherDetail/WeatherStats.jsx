import React from 'react';
import { Navigation, Sunrise, Sunset } from 'lucide-react';
import { formatWindDirection, formatTime } from '../../utils/weatherUtils';

const WeatherStats = ({ city }) => {
  return (
    <div className="bg-gray-800 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-x divide-gray-600">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-4 pr-6">
          <div className="text-center">
            <p className="text-gray-400 mb-1">Pressure:</p>
            <p className="text-white font-semibold">{city.main.pressure} hPa</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-1">Humidity:</p>
            <p className="text-white font-semibold">{city.main.humidity}%</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-1">Visibility:</p>
            <p className="text-white font-semibold">
              {city.visibility ? (city.visibility / 1000).toFixed(1) : 'N/A'} km
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-1">Feels Like:</p>
            <p className="text-white font-semibold">{Math.round(city.main.feels_like)}°C</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center justify-center text-center px-6">
          <Navigation className="w-12 h-12 text-white mb-2" />
          <p className="text-white text-lg font-semibold">
            {city.wind?.speed ? city.wind.speed.toFixed(1) : '0'} m/s {formatWindDirection(city.wind?.deg)} {city.wind?.deg ? `(${city.wind.deg}°)` : ''}
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-6 pl-0">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-1">
              <Sunrise className="w-5 h-5 text-gray-400" />
              <p className="text-gray-400">Sunrise:</p>
            </div>
            <p className="text-white font-semibold">
              {formatTime(city.sys.sunrise, city.timezone)}
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-1">
              <Sunset className="w-5 h-5 text-gray-400" />
              <p className="text-gray-400">Sunset:</p>
            </div>
            <p className="text-white font-semibold">
              {formatTime(city.sys.sunset, city.timezone)}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherStats;