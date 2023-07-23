import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SettingsIcon from '@mui/icons-material/Settings';
const Navbar = ({ isLoggedIn, handleLogout, username, password }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      const userData = {
        username: username,
        password: password,
        number: 1,
      };

      const response = await axios.post('/api/login', userData);
      console.log(response.data);

      if (response.data.success) {
        handleLogout();
        navigate('/'); // Redirect to the home page
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <nav className="navbar">
      <h3 className="logo">WebGlow</h3>
      <ul className="menu">
        {isLoggedIn && (
          <>
            <li className="menu-item">
              <NavLink to="/weather" className="link">
                Weather
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/settings" className="link">
                <SettingsIcon />
              </NavLink>
            </li>
            <li className="menu-item">
              <button onClick={handleLogoutClick} className="link logout-button">
                <LogoutIcon />
              </button>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li className="menu-item">
              <NavLink to="/signup" className="link">
                <PersonAddAltIcon className="signup-icon" />
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/login" className="link">
                <LoginIcon />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
