import React, { useState, useEffect } from "react";
import Search from "./components/search/search";
import "./WeatherAI.css";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Forecast from "./components/forecast/forecast";
import SunnyDay from './state/sunny-day.jpg';
import SunnyNight from './state/sunny-night.jpg';
import CloudyDay from './state/cloudy-day.jpg';
import CloudyNight from './state/cloudy-night.jpg';
import RainyDay from './state/rainy-day.jpg';
import RainyNight from './state/rainy-night.jpg';
import SnowyDay from './state/snowy-day.jpg';
import SnowyNight from './state/snowy-night.jpg';

const weatherBackgrounds = {
  "01d": SunnyDay,
  "01n": SunnyNight,
  "02d": CloudyDay,
  "02n": CloudyNight,
  "03d": CloudyDay,
  "03n": CloudyNight,
  "04d": CloudyDay,
  "04n": CloudyNight,
  "09d": RainyDay,
  "09n": RainyNight,
  "10d": RainyDay,
  "10n": RainyNight,
  "11d": RainyDay,
  "11n": RainyNight,
  "13d": SnowyDay,
  "13n": SnowyNight,
  "50d": CloudyDay,
  "50n": CloudyNight,
};

function WeatherAI() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };
  useEffect(() => {
    // Request geolocation permission on component mount
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const currentWeatherFetch = fetch(
          `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastFetch = fetch(
          `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );
        Promise.all([currentWeatherFetch, forecastFetch])
          .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            setCurrentWeather({ city: "Your Location", ...weatherResponse });
            setForecast({ city: "Your Location", ...forecastResponse });
          })
          .catch(console.log);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        // Handle the case when the user denies the geolocation permission or there's an error
        // For example, you could display an error message or show weather data for a default location.
      }
    );
  }, []);

  useEffect(() => {
    if (currentWeather && currentWeather.weather && currentWeather.weather[0].icon) {
      const weatherIcon = currentWeather.weather[0].icon;
      const backgroundImage = weatherBackgrounds[weatherIcon];
      document.body.style.backgroundImage = `url(${backgroundImage})`;
    }

    return () => {
      document.body.style.backgroundImage = ""; // Revert to default white background
    };
  }, [currentWeather]);

  return (
    <>
      <div className="full-screen-background"></div>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
}

export default WeatherAI;
