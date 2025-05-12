// Handles interactions with your local database (e.g., Firebase Firestore, IndexedDB).

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore();

/**
 * Save weather data to Firestore.
 * @param {string} city - The city name (used as the document ID).
 * @param {Object} data - The weather data to save.
 */
export const saveWeatherData = async (city, data) => {
  const docRef = doc(db, "weather", city);
  await setDoc(docRef, data);
};

/**
 * Get weather data from Firestore.
 * @param {string} city - The city name (used as the document ID).
 * @returns {Object|null} - The weather data, or null if not found.
 */
export const getWeatherData = async (city) => {
  const docRef = doc(db, "weather", city);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null; // No data found
  }
};
