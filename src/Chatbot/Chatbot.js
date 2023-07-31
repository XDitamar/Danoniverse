import React, { useState } from 'react';
import './Chatbot.css';
import chatbotIcon from './chatbot.png';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setErrorMessage(''); // Clear error message when input value changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const command = inputValue.trim().toLowerCase();
      switch (command) {
        case 'weatherai':
          window.location.href = '/AI/WeatherAI';
          break;
        case 'translator':
          window.location.href = '/Translator';
          break;
        case 'binary':
          window.location.href = '/binary';
          break;
        case 'decimal':
          window.location.href = '/decimal';
          break;
        case 'hexadecimal':
          window.location.href = '/hexadecimal';
          break;
        case 'prediction':
          window.location.href = '/prediction';
          break;
        case 'stock':
          window.location.href = '/stock';
          break;
        case 'ai':
          window.location.href = '/AI';
          break;
        case 'settings':
          window.location.href = '/settings';
          break;
        case 'user-settings':
          window.location.href = '/user-settings';
          break;
        case 'learn':
          window.location.href = '/Code-Course';
          break;
        case '3211':
            window.location.href = '/hacking/location';
            break;
        case 'home':
            window.location.href = '/';
            break;
        case 'help':
          setErrorMessage('');
          break;
        default:
          setErrorMessage('Unrecognized command. Type "help" for a list of available commands.');
          break;
      }
      setInputValue('');
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {errorMessage && (
              <div className="message bot error-message">{errorMessage}</div>
            )}
            {inputValue.trim().toLowerCase() === 'help' && (
              <div className="help-container">
                <div className="help-content">
                  <h3>Available Commands:</h3>
                  <ul>
                    <li>home</li>
                   
                    <li>translator</li>
                    <li>binary</li>
                    <li>decimal</li>
                    <li>hexadecimal</li>
                    <li>prediction</li>
                    <li>stock</li>
                    <li>ai</li> 
                    <li>weatherai</li>
                    <li>settings</li>
                    <li>learn</li>
                    <li>user-settings</li>
                  </ul>
                  <p>For more information, type one of the available commands.</p>
                </div>
              </div>
            )}
          </div>
          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter your command..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-submit">
              Send
            </button>
          </form>
        </div>
      )}
      <div className="chatbot-toggle" onClick={handleToggle}>
        <img src={chatbotIcon} alt="Chatbot Icon" className="chatbot-icon" />
      </div>
    </div>
  );
}

export default Chatbot;
