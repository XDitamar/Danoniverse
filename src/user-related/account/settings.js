import React from 'react';
import './UserSettings.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PreferencesIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { Button } from '@mui/material';
import axios from 'axios';

const UserSettings = ({ handleLogout, username, password }) => {
  const handleDeleteAccount = async () => {
    try {
      const userData = {
        username: username,
        password: password,
      };

      const response = await axios.post('/api/delete-account', userData);
      console.log(response.data);

      if (response.data.message === 'User deleted successfully') {
        handleLogout(); // Log out the user after deleting the account
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleManageAccount = () => {
    // Implement manage account logic here
    console.log('Account management');
  };

  const handleSecurity = () => {
    // Implement security settings logic here
    console.log('Security settings');
  };

  const handleNotifications = () => {
    // Implement notifications settings logic here
    console.log('Notifications settings');
  };

  const handlePreferences = () => {
    // Implement preferences settings logic here
    console.log('Preferences settings');
  };

  const handleHelp = () => {
    // Implement help page logic here
    console.log('Help');
  };

  return (
    <div className="user-settings">
      <h1>User Settings</h1>
      <ul className="settings-list">
        <li className="settings-item" onClick={handleDeleteAccount}>
          <DeleteIcon />
          <span className="settings-text">Delete Account</span>
        </li>
        <li className="settings-item" onClick={handleManageAccount}>
          <ManageAccountsIcon />
          <span className="settings-text">Manage Account</span>
        </li>
        <li className="settings-item" onClick={handleSecurity}>
          <SecurityIcon />
          <span className="settings-text">Security</span>
        </li>
        <li className="settings-item" onClick={handleNotifications}>
          <NotificationsIcon />
          <span className="settings-text">Notifications</span>
        </li>
        <li className="settings-item" onClick={handlePreferences}>
          <PreferencesIcon />
          <span className="settings-text">Preferences</span>
        </li>
        <li className="settings-item" onClick={handleHelp}>
          <HelpIcon />
          <span className="settings-text">Help</span>
        </li>
      </ul>
      <Button variant="contained" color="primary" fullWidth>
        Save Settings
      </Button>
    </div>
  );
};

export default UserSettings;
