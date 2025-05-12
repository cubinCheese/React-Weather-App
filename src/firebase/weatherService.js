// Handles interactions with external APIs (e.g., OpenWeather API, WorldTime API)

// import modules
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import { worldTimeApiOptions, WORLDTIME_API_URL } from "../api";

// Function to fetch current weather data from OpenWeatherMap API
/**
 * Fetch current weather data from the OpenWeather API.
 * @param {string} lat - Latitude of the location.
 * @param {string} lon - Longitude of the location.
 * @returns {Promise<Object>} - The current weather data.
 */
export const fetchCurrentWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch current weather data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to fetch weather forecast data from OpenWeatherMap API
/**
 * Fetch weather forecast data from the OpenWeather API.
 * @param {string} lat - Latitude of the location.
 * @param {string} lon - Longitude of the location.
 * @returns {Promise<Object>} - The weather forecast data.
 */
export const fetchWeatherForecast = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather forecast data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Fetch current time data from the WorldTime API.
 * @param {string} lat - Latitude of the location.
 * @param {string} lon - Longitude of the location.
 * @returns {Promise<Object>} - The current time data.
 */
export const fetchLocationTime = async (lat, lon) => {
    const response = await fetch(
      `${WORLDTIME_API_URL}?lat=${lat}&lon=${lon}`,
      worldTimeApiOptions
    );
    if (!response.ok) {
      throw new Error("Failed to fetch location time data");
    }
    return response.json();
};