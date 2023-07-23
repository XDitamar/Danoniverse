import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Website</h1>
      <p>Experience the best services and products</p>
      <div className="button-container">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Home;
