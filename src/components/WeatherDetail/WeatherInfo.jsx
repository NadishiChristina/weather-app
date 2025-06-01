import React, { useState, useEffect } from 'react';
import { getWeatherIcon } from '../../utils/weatherUtils';

const WeatherInfo = ({ city }) => {
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = getWeatherIcon(city.weather[0].main);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation classes based on weather type
  const getWeatherAnimation = (weatherType) => {
    switch (weatherType.toLowerCase()) {
      case 'rain':
        return 'animate-bounce';
      case 'snow':
        return 'animate-pulse';
      case 'clouds':
        return 'animate-float';
      case 'clear':
        return 'animate-spin-slow';
      case 'thunderstorm':
        return 'animate-shake';
      case 'drizzle':
        return 'animate-bounce';
      case 'mist':
      case 'fog':
      case 'haze':
        return 'animate-sway';
      default:
        return 'animate-float';
    }
  };

  return (
    <>
      {/* City Info */}
      <div className={`text-center mb-8 pt-4 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
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
      <div className={`flex items-center justify-center space-x-12 mb-8 transition-all duration-1000 delay-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="text-center">
          {/* Animated Weather Icon */}
          <div className="relative mb-4">
            <IconComponent 
              className={`w-24 h-24 text-white mx-auto transition-all duration-500 hover:scale-110 ${
                getWeatherAnimation(city.weather[0].main)
              }`}
            />
            {/* Glow effect for sun */}
            {city.weather[0].main.toLowerCase() === 'clear' && (
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-yellow-300 opacity-20 animate-ping"></div>
            )}
          </div>
          <p className="text-xl text-blue-100 capitalize">{city.weather[0].description}</p>
        </div>
        
        <div className="text-center">
          <div className={`text-8xl font-bold mb-2 transition-all duration-1000 delay-500 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            {Math.round(city.main.temp)}°c
          </div>
          <div className={`text-blue-100 space-y-1 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}>
            <p>Temp Min: {Math.round(city.main.temp_min)}°c</p>
            <p>Temp Max: {Math.round(city.main.temp_max)}°c</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(-3px) translateY(-5px); }
          66% { transform: translateX(3px) translateY(-3px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default WeatherInfo;