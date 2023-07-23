import React, { useState } from 'react';
import axios from 'axios';
import './WeatherPage.css';

const WeatherPage = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`
      );
      setWeatherData(response.data);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setWeatherData(null);
      setError('Failed to fetch weather data.');
    }
  };

  return (
    <div className="weather-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={handleLocationChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-details">
          <h2 className="location">{weatherData.name}, {weatherData.sys.country}</h2>
          <div className="weather-info">
            <div className="temperature">
              <span className="label">Temperature:</span>
              <span className="value">{weatherData.main.temp}°C</span>
            </div>
            <div className="weather-description">
              <span className="label">Weather:</span>
              <span className="value">{weatherData.weather[0].description}</span>
            </div>
            <div className="wind-speed">
              <span className="label">Wind Speed:</span>
              <span className="value">{weatherData.wind.speed} m/s</span>
            </div>
          </div>
          <div className="image-container">
            <img
              src="path_to_your_image.jpg"
              alt="Weather Image"
              className="weather-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
