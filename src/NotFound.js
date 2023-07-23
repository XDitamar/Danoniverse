import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Oops!</h2>
      <p className="not-found__message">The page you're looking for does not exist.</p>
      <a href="/" className="not-found__link">Go back to Home</a>
    </div>
  );
}

export default NotFound;
