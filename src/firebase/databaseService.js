// Handles interactions with your local database (e.g., Firebase Firestore, IndexedDB).

import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Save weather data to Firestore.
 * @param {string} city - The city name (used as the document ID).
 * @param {Object} data - The weather data to save.
 */
const saveCachedData = async (city, data) => {
  try {
    const docRef = doc(db, "weather", city);
    await setDoc(docRef, data);
    console.log(`Saved weather data for ${city}`);
  } catch (error) {
    console.error(`Failed to save weather data for ${city}:`, error);
  }
};

/**
 * Get weather data from Firestore.
 * @param {string} city - The city name (used as the document ID).
 * @returns {Object|null} - The weather data, or null if not found or on error.
 */
const getCachedData = async (city) => {
  try {
    const docRef = doc(db, "weather", city);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(`Fetched cached data for ${city}`);
      return docSnap.data();
    } else {
      console.log(`No cached data found for ${city}`);
      return null;
    }
  } catch (error) {
    console.error(`Failed to get weather data for ${city}:`, error);
    return null;
  }
};

// Export all functions as a single object
export default {
  saveCachedData,
  getCachedData,
};
