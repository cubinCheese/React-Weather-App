import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import LocationTime from "./components/current-location-time/current-location-time";
//import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
//import { worldTimeApiOptions, WORLDTIME_API_URL } from "./api";
import { useState } from "react";
import animatedBackground from './gifs/raingirl.gif'; // Import the AnimatedBackground component

// Import services
import { fetchCurrentWeather, fetchWeatherForecast, fetchLocationTime } from "./firebase/weatherService";
import { saveWeatherData, getWeatherData } from "./firebase/databaseService";



function App() {
  // Creates set-weather() and current-weather value() through useState
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [locationTime, setLocationTime] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    try {
      // Step 1: Check the database for cached data
      const cachedData = await getWeatherData(searchData.label);
      if (cachedData) {
        console.log("Using cached data from the database");
        setCurrentWeather(cachedData.currentWeather);
        setForecast(cachedData.forecast);
        setLocationTime(cachedData.locationTime);
        return;
      }

      // Step 2: Fetch data from APIs if not in the database
      console.log("Fetching data from APIs");
      const [currentWeather, forecast, locationTime] = await Promise.all([
        fetchCurrentWeather(lat, lon),
        fetchWeatherForecast(lat, lon),
        fetchLocationTime(lat, lon),
      ]);

      // Step 3: Save the fetched data to the database
      await saveWeatherData(searchData.label, {
        currentWeather,
        forecast,
        locationTime,
      });

      // Step 4: Update state with the fetched data
      setCurrentWeather(currentWeather);
      setForecast(forecast);
      setLocationTime(locationTime);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // now get current weather and forecast for usage
  //console.log(currentWeather);
  //console.log(forecast);
  console.log(locationTime);

  return (
    <div>
      <img
        src={animatedBackground}
        alt="Animated Background"
        className="animated-background"
      />

      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <div className="parallel-components">
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {locationTime && (
            <LocationTime data={locationTime} weatherData={currentWeather} />
          )}
        </div>
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
