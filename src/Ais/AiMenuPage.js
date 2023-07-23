import React from 'react';
import { Link } from 'react-router-dom';
import './AiMenuPage.css';
import WeatherIcon from './cloudy.png';
const AiMenuPage = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Translation Menu</h1>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/AI/WeatherAI" className="menu-link">
            <img src={WeatherIcon} alt="Binary Icon" className="menu-icon" />
            Weather AI
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AiMenuPage;
