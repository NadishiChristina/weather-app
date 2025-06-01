const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

let cache = {
  data: null,
  timestamp: null,
  error: null
};

export function isValidCache() {
  return cache.data && 
        cache.timestamp && 
        (Date.now() - cache.timestamp < CACHE_DURATION);
}

export function getCachedData() {
  return cache.data;
}

export function setCachedData(data) {
  cache.data = data;
  cache.timestamp = Date.now();
  cache.error = null; // Clear any previous errors
}

export function setCachedError(error) {
  cache.error = error;
  cache.timestamp = Date.now();
  cache.data = null;
}

export function getCachedError() {
  return cache.error;
}

export function hasValidErrorCache() {
  return cache.error && 
         cache.timestamp && 
         (Date.now() - cache.timestamp < 60 * 1000); // Cache errors for 1 minute
}

export function clearCache() {
  cache.data = null;
  cache.timestamp = null;
  cache.error = null;
}