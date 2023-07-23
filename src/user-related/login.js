import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login({ setIsLoggedIn, setUsername, setPassword }) {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the user data
    const userData = {
      username: usernameInput,
      password: passwordInput,
      number: 0,
    };

    try {
      // Send the user data to the backend server for authentication
      const response = await axios.post('/api/login', userData);
      console.log(response.data); // Handle the response from the server

      // Check if the login was successful
      if (response.data.success) {
        // Set the logged-in state to true
        setIsLoggedIn(true);

        // Update the username and password states in the parent component (e.g., App)
        setUsername(usernameInput);
        setPassword(passwordInput);

        // Perform additional actions after successful login, such as redirecting to a new page
        // You can use a router library like React Router to handle the redirection
        // Example: history.push('/dashboard');
      } else {
        // Set an error message for invalid login
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Reset the form fields
    setUsernameInput('');
    setPasswordInput('');
  };

  // Render the login form
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={usernameInput}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={passwordInput}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
