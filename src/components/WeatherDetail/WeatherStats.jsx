import React from 'react';
import { Wind, Sunrise, Sunset, Cloudy } from 'lucide-react'; // Add Cloud icon import
import { formatWindDirection, formatTime } from '../../utils/weatherUtils';

const WeatherStats = ({ city }) => {
  return (
    <div className="bg-gray-800 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 mb-1">Pressure:</p>
            <p className="text-white font-semibold">{city.main.pressure} hPa</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Humidity:</p>
            <p className="text-white font-semibold">{city.main.humidity}%</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Visibility:</p>
            <p className="text-white font-semibold">
              {city.visibility ? (city.visibility / 1000).toFixed(1) : 'N/A'} km
            </p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Feels Like:</p>
            <p className="text-white font-semibold">{Math.round(city.main.feels_like)}°C</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Wind className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-gray-400">Wind</p>
              <p className="text-white font-semibold">
                {city.wind?.speed ? city.wind.speed.toFixed(1) : '0'} m/s {formatWindDirection(city.wind?.deg)} 
                {city.wind?.deg ? ` (${city.wind.deg}°)` : ''}
              </p>
            </div>
          </div>

          {city.clouds && (
            <div className="flex items-center space-x-2">
              <Cloudy className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-400">Cloudiness:</p>
                <p className="text-white font-semibold">{city.clouds.all}%</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Sunrise className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-gray-400">Sunrise:</p>
              <p className="text-white font-semibold">
                {formatTime(city.sys.sunrise, city.timezone)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Sunset className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-gray-400">Sunset:</p>
              <p className="text-white font-semibold">
                {formatTime(city.sys.sunset, city.timezone)}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherStats;
