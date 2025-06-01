import { Cloud, Sun, CloudRain, CloudSnow, Eye, Wind } from 'lucide-react';

// Maps raw weather status codes from the API to human-friendly descriptions. 
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

// Return weather icon to suit weather status
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

// Convert wind direction in degrees to compass direction
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
