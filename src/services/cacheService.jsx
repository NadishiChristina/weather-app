const CACHE_KEY = 'weather_cache';    // Unique key to store cache in localStorage
const CACHE_DURATION = 5 * 60 * 1000; // cache duration in ms - 5 minutes

/**
 * Checks if cached data exists and is still valid (not expired).
 * returns True if cache is valid, false otherwise.
 */
export function isValidCache() {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY));
  return cache &&
    cache.data &&
    cache.timestamp &&
    (Date.now() - cache.timestamp < CACHE_DURATION);
}

/**
 * Retrieves the cached weather data from localStorage.
 * returns Cached data if available, otherwise null.
 */
export function getCachedData() {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY));
  return cache?.data || null;
}

/**
 * Stores new data into cache with the current timestamp.
 */
export function setCachedData(data) {
  const cache = {
    data,
    timestamp: Date.now(),
    error: null
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

/**
 * Clears the cached data from localStorage.
 */
export function clearCache() {
  localStorage.removeItem(CACHE_KEY);
}
