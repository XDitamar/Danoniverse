import React, { useState } from 'react';
import axios from 'axios';
import './SignupForm.css'; // Import the CSS file for styling

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the user data
    const userData = {
      username: username,
      password: password,
      email: email,
    };

    try {
      // Send the user data to the backend server
      const response = await axios.post('/api/signup', userData);
      console.log(response.data); // Handle the response from the server

      // Perform additional actions after successful signup, such as redirecting to a new page
      // You can use a router library like React Router to handle the redirection
      // Example: history.push('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      setError('Error signing up. Please try again.');
    }

    // Reset the form fields
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      {error && <div className="error">{error}</div>}
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
