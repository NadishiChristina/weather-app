import { CITIES_DATA } from '../utils/constants';
import { enhanceWeatherData } from '../utils/weatherUtils';

export async function fetchWeatherData() {
  try {
    // Extract city codes
    const cityCodes = CITIES_DATA.List.map(city => city.CityCode);
    const cityIds = cityCodes.join(',');
    
    // Using Real API here:
    // const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    // const response = await fetch(
    //   `http://api.openweathermap.org/data/2.5/group?id=${cityIds}&units=metric&appid=${API_KEY}`
    // );
    // const data = await response.json();
    // return data.list;

    // For demo, returning mock data
    return enhanceWeatherData(CITIES_DATA.List);
    
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}