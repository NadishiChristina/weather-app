import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherService';
import { isValidCache, getCachedData, setCachedData } from '../services/cacheService';

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWeatherData();
  }, []);

  const loadWeatherData = async () => {
    try {
      setLoading(true);
      
      // Check cache first
      if (isValidCache()) {
        const cachedData = getCachedData();
        setWeatherData(cachedData);
        setLoading(false);
        return;
      }

      // Fetch new data
      const data = await fetchWeatherData();
      setCachedData(data);
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