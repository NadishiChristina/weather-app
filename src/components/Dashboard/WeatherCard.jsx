import React from 'react';
import { Navigation } from 'lucide-react';
import { getWeatherIcon, formatTime } from '../../utils/weatherUtils';
import { WEATHER_CARD_COLORS } from '../../utils/constants';

// Dashboard view weather card

const WeatherCard = ({ city, index, onClick }) => {
  const IconComponent = getWeatherIcon(city.weather[0].main);
  const cardColor = WEATHER_CARD_COLORS[index % WEATHER_CARD_COLORS.length];

  return (
    <div
      onClick={onClick}
      className="rounded-xl overflow-hidden shadow-xl transition transform hover:scale-105 cursor-pointer"
    >
      {/* Top Section */}
      <div className={`p-6 bg-gradient-to-br ${cardColor} text-white`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{city.name}, {city.sys.country}</h3>
            <p className="text-sm opacity-80 mt-1">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })},
              {' ' + new Date().toLocaleDateString([], { month: 'short', day: 'numeric' })}
            </p>
          </div>
          <div className="text-5xl font-bold">{Math.round(city.main.temp)}°C</div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 text-lg">
            <IconComponent className="w-6 h-6" />
            <span className="capitalize">{city.weather[0].description}</span>
          </div>
          <div className="text-right text-sm">
            <p>Temp Min: {Math.round(city.main.temp_min)}°C</p>
            <p>Temp Max: {Math.round(city.main.temp_max)}°C</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 text-white text-sm p-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Pressure:</span>
          <span>{city.main.pressure} hPa</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Humidity:</span>
          <span>{city.main.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Visibility:</span>
          <span>{city.visibility ? (city.visibility / 1000).toFixed(1) : 'N/A'} km</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400">
            <Navigation className="w-4 h-4" />
            <span>
              {city.wind?.speed ? city.wind.speed.toFixed(1) : '0'} m/s {city.wind?.deg || 0}°
            </span>
          </div>
          <div className="text-right">
            <span className="text-gray-400">Sunrise:</span> 
            <span className="ml-1">{formatTime(city.sys.sunrise, city.timezone)}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="text-gray-400 mr-1">Sunset:</span>
          <span>{formatTime(city.sys.sunset, city.timezone)}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
