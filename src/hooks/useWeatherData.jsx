import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherService';
import { isValidCache, getCachedData, setCachedData } from '../services/cacheService';

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load data on component mount
  useEffect(() => {
    loadWeatherData();
  }, []);

  // Main function to load weather data (with caching logic)
  const loadWeatherData = async () => {
  try {
    setLoading(true);

    // Use cached data if valid
    if (isValidCache()) {
      const cachedData = getCachedData();
      console.log(`[CACHE HIT] Using cached data at: ${new Date().toLocaleTimeString()}`);
      setWeatherData(cachedData);
      setLoading(false);
      return;
    }

    // Fetch new data from API
    const data = await fetchWeatherData();
    setCachedData(data);
    console.log(`[API CALL] New data fetched at: ${new Date().toLocaleTimeString()}`);
    setWeatherData(data);

  } catch (err) {
    setError(err);
    console.error('Error loading weather data:', err);
  } finally {
    setLoading(false);
  }
};

  return { weatherData, loading, error, refetch: loadWeatherData };
}