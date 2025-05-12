// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYboSK2q9kK1jriABCAqcTpRxcFwERuE4",
  authDomain: "react-weather-app-e84b5.firebaseapp.com",
  projectId: "react-weather-app-e84b5",
  storageBucket: "react-weather-app-e84b5.firebasestorage.app",
  messagingSenderId: "569263562658",
  appId: "1:569263562658:web:4d03ece5829e879ccedcfb",
  measurementId: "G-GEJ7RV45Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);