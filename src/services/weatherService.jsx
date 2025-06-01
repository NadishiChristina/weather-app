import { CITIES_DATA } from '../utils/constants';

export async function fetchWeatherData() {
  try {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    if (!API_KEY) {
      throw new Error('API key not configured');
    }

    // Use city codes (IDs) only
    const cityCodes = CITIES_DATA.List.map(city => city.CityCode);
    const cityIds = cityCodes.join(',');

    // http://api.openweathermap.org/data/2.5/group?id=1850147,1248991&units=metric&appid=d3d0268bd340d3bf3405f92cf0bbc6de - doesn't work
    const url = `https://api.openweathermap.org/data/2.5/group?id=${cityIds}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data.list; // Array of weather data per city
    } else {
      const errorText = await response.text();
      console.warn('Group API failed, falling back to individual calls:', errorText);
      return await fetchCitiesIndividually(cityCodes, API_KEY);
    }

  } catch (error) {
    console.error('Error fetching weather data:', error);
    const { enhanceWeatherData } = await import('../utils/weatherUtils');
    return enhanceWeatherData(CITIES_DATA.List);
  }
}

// Fallback to individual city fetches (by city code)
async function fetchCitiesIndividually(cityCodes, apiKey) {
  const results = [];

  for (const cityCode of cityCodes) {
    try {
      // http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&appid=d3d0268bd340d3bf3405f92cf0bbc6de - This works
      const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        results.push(data);
        console.log(`Successfully fetched: ${data.name}`);
      } else {
        console.warn(`Failed to fetch city ${cityCode}: ${response.status}`);
      }

      await new Promise(resolve => setTimeout(resolve, 100)); // Avoid rate limits
    } catch (error) {
      console.error(`Error fetching city ${cityCode}:`, error);
    }
  }
  console.log(`Successfully fetched ${results.length} cities individually`);
  return results;
}
