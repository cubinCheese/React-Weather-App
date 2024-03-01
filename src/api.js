// File is: overhead for API calls


// fetch method for geo API
// copied from geoAPI
// exported as geoApiOptions
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const worldTimeApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_WORLD_TIME_API_KEY,
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
};


// API urls
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WORLDTIME_API_URL = 'https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime';


// API keys
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
