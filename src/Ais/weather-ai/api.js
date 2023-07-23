
import axios from "axios";

export const geoApiOptions = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  headers: {
    'X-RapidAPI-Key': 'c7fea72c57msh924a417a71ab1ffp11bafcjsn00d5126ceb9d',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(geoApiOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "91bc70a23d1c69b704c75ff8c0c4e38a"; // enter your key from openweather API