import { Cloud, Sun, CloudRain } from 'lucide-react';

export function getWeatherDescription(status) {
  const descriptions = {
    'Clear': 'Clear Sky',
    'Clouds': 'Few Clouds',
    'Rain': 'Light Rain',
    'Mist': 'Mist'
  };
  return descriptions[status] || status;
}

export function getWeatherIcon(status) {
  switch (status) {
    case 'Clear': return Sun;
    case 'Rain': return CloudRain;
    case 'Clouds': return Cloud;
    case 'Mist': return Cloud;
    default: return Cloud;
  }
}

export function formatWindDirection(deg) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[Math.round(deg / 45) % 8];
}

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
      sunrise: new Date().setHours(6, Math.floor(Math.random() * 60)),
      sunset: new Date().setHours(18, Math.floor(Math.random() * 60))
    }
  }));
}