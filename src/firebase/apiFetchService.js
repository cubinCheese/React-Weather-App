// Handles interactions with your local database (e.g., Firebase Firestore, IndexedDB).

import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import { worldTimeApiOptions, WORLDTIME_API_URL } from "../api";

/**
 * Fetch current weather data from the OpenWeather API.
 * @param {string} lat - Latitude of the location.
 * @param {string} lon - Longitude of the location.
 * @returns {Promise<Response>} - The fetch response for current weather.
 */
export const currentWeatherFetch = (lat, lon) => {
    return fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
  };
  
  /**
   * Fetch weather forecast data from the OpenWeather API.
   * @param {string} lat - Latitude of the location.
   * @param {string} lon - Longitude of the location.
   * @returns {Promise<Response>} - The fetch response for weather forecast.
   */
  export const forecastFetch = (lat, lon) => {
    return fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
  };
  
  /**
   * Fetch location time data from the WorldTime API.
   * @param {string} lat - Latitude of the location.
   * @param {string} lon - Longitude of the location.
   * @returns {Promise<Response>} - The fetch response for location time.
   */
  export const worldTimeFetch = (lat, lon) => {
    return fetch(
      `${WORLDTIME_API_URL}?lat=${lat}&lon=${lon}`,
      worldTimeApiOptions
    );
  };
  
  // Export all functions as a single object for convenience
  export default {
    currentWeatherFetch,
    forecastFetch,
    worldTimeFetch,
  };