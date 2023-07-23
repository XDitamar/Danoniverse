import React from 'react';
import axios from 'axios';

function Logout(usernames, passwords) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the user data
    const userData = {
      username: usernames,
      password: passwords,
      number: 1,
    };

    try {
      // Send the user data to the backend server for logout
      const response = await axios.post('/api/login', userData);
      console.log(response.data); // Handle the response from the server

      // Check if the logout was successful
      if (response.data.success) {
        // Perform additional actions after successful logout
        // Example: Redirect the user to a different page
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  handleSubmit(); // Call the handleSubmit function immediately

  return null; // Return null to avoid rendering anything in the Logout component
}

export default Logout;
