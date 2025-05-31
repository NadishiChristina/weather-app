const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
let cache = {
  data: null,
  timestamp: null
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
}

export function clearCache() {
  cache.data = null;
  cache.timestamp = null;
}