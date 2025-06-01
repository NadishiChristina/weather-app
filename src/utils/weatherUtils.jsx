import { Cloud, Sun, CloudRain, CloudSnow, Eye, Wind } from 'lucide-react';

export function getWeatherDescription(status) {
  const descriptions = {
    'Clear': 'Clear Sky',
    'Clouds': 'Few Clouds',
    'Rain': 'Light Rain',
    'Mist': 'Mist',
    'Snow': 'Snow',
    'Thunderstorm': 'Thunderstorm',
    'Drizzle': 'Drizzle',
    'Fog': 'Fog',
    'Haze': 'Haze'
  };
  return descriptions[status] || status;
}

export function getWeatherIcon(status) {
  switch (status) {
    case 'Clear': return Sun;
    case 'Rain': 
    case 'Drizzle': 
      return CloudRain;
    case 'Clouds': 
    case 'Mist':
    case 'Fog':
    case 'Haze':
      return Cloud;
    case 'Snow': return CloudSnow;
    case 'Thunderstorm': return CloudRain;
    default: return Cloud;
  }
}

export function formatWindDirection(deg) {
  if (typeof deg === 'undefined' || deg === null) return 'N/A';
  
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[Math.round(deg / 45) % 8];
}

// Convert Unix timestamp to readable time
export function formatTime(timestamp, timezone = 0) {
  if (!timestamp) return 'N/A';
  
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
}

// Fallback function for mock data (kept for development/fallback purposes)
export function enhanceWeatherData(citiesData) {
  return citiesData.map(city => ({
    id: parseInt(city.CityCode),
    name: city.CityName,
    main: {
      temp: parseFloat(city.Temp),
      feels_like: parseFloat(city.Temp) + (Math.random() * 4 - 2),
      humidity: Math.floor(Math.random() * 40) + 40,
      pressure: Math.floor(Math.random() * 50) + 1000,
      temp_min: parseFloat(city.Temp) - Math.random() * 5,
      temp_max: parseFloat(city.Temp) + Math.random() * 5
    },
    weather: [{
      main: city.Status,
      description: getWeatherDescription(city.Status),
      icon: getWeatherIcon(city.Status)
    }],
    wind: {
      speed: Math.random() * 10 + 2,
      deg: Math.floor(Math.random() * 360)
    },
    visibility: Math.floor(Math.random() * 5000) + 5000,
    sys: {
      country: 'XX',
      sunrise: Math.floor(Date.now() / 1000) + 6 * 3600,
      sunset: Math.floor(Date.now() / 1000) + 18 * 3600
    },
    coord: {
      lat: 0,
      lon: 0
    },
    dt: Math.floor(Date.now() / 1000)
  }));
}