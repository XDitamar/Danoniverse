import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import TranslatorLogo from './translator-language-svgrepo-com.png';
import WeatherLogo from './cloudy.png';
import UserSettingsIcon from './gear.png';
import SoccerIcon from './strategy.png'
import StockIcon from './treasury.png';
import AiIcon from './artificial-intelligence.png';
import CodingCourse  from './programming.png';
const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      const response = await axios.post('/api/logout');
      console.log(response.data);

      if (response.data.success) {
        handleLogout();
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleTranslatorClick = () => {
    navigate('/translator');
  };
  const handleWeatherClick = () => {
    navigate('/weather');
  };
  const handleSettingsClick = () => {
    navigate('/settings');
  };
  const handleSoccerClick = () => {
    navigate('/prediction');
  };
  const handleStocksClick = () => {
    navigate('/stock');
  };

  const handleAisClick = () => {
    navigate('/AI');
  };
  const handleCodingCourseClick = () => {
    navigate('/Code-Course');
  };
  return (
    <nav className="navbar">
      <h3 className="logo">WebGlow</h3>
      <ul className="menu">
      <li className="menu-item">
          <button onClick={handleTranslatorClick} className="link logout-button">
            <img src={TranslatorLogo} alt="Translator Logo" className="logo" />
          </button>
        </li>
        <li className="menu-item">
          <button onClick={handleAisClick} className="link logout-button">
            <img src={AiIcon} alt="Translator Logo" className="logo" />
          </button>
        </li>
        {/* <li className="menu-item">
          <button onClick={handleSoccerClick} className="link logout-button">
            <img src={SoccerIcon} alt="Translator Logo" className="logo" />
          </button>
        </li>
        <li className="menu-item">
          <button onClick={handleStocksClick} className="link logout-button">
            <img src={StockIcon} alt="Translator Logo" className="logo" />
          </button>
        </li> */}
        {/* <li className="menu-item">
          <button onClick={handleWeatherClick} className="link logout-button">
            <img src={WeatherLogo} alt="Translator Logo" className="logo" />
          </button>
        </li> */}
        <li className="menu-item">
          <button onClick={handleCodingCourseClick} className="link logout-button">
            <img src={CodingCourse} alt="Translator Logo" className="logo" />
          </button>
        </li>
        <li className="menu-item">
          <button onClick={handleSettingsClick} className="link logout-button">
            <img src={UserSettingsIcon} alt="Translator Logo" className="logo" />
          </button>
        </li>

       
        {/* <li className="menu-item">
          <NavLink to="/weather" className="link logout-button">
            Weather
          </NavLink>
        </li> */}
        {/* <li className="menu-item">
          <NavLink to="/settings" className="link logout-button">
            <SettingsIcon />
          </NavLink>
        </li> */}
        <li className="menu-item">
          <button onClick={handleLogoutClick} className="link logout-button">
            <LogoutIcon />
          </button>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
