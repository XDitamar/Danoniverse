import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import Login from './user-related/login';
import Logout from './user-related/logout';
import Navbar from './bar/navbar';
import Signup from './user-related/signup';
import UserSettings from './user-related/userSettings';
import Weather from './Ais/weather-ai/WeatherAI';
import Settings from './user-related/account/settings';
import Translate from './transletor/TranslatorMenu';
import Biner from './transletor/binery-tran';
import DecimalTranslator from './transletor/DecimalTranslator';
import HexadecimalTranslator from './transletor/HexadecimalTranslator';
import ScorePrediction from './soccer/ScorePrediction';
import StockAi from './stock-ai/stockai';
import Ai from './Ais/AiMenuPage';
import Chatbot from './Chatbot/Chatbot'; // Import the Chatbot component
import ProgramingCourses from './programmingteching/CodingCourseMenu';
import PythonHello from './programmingteching/python/PythonHello';
import PythonLesson1 from './programmingteching/python/PyLesson1';
import PythonLesson2 from './programmingteching/python/PyLesson2';
import PythonLesson3 from './programmingteching/python/PyLesson3';
import Locations from './Hacking/location';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    // Implement the logout logic here
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          username={username}
          password={password}
        />
        <Chatbot /> {/* Add the Chatbot component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="/logout"
            element={<Logout setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/user-settings" element={<UserSettings />} />
          <Route path="/AI/WeatherAI" element={<Weather />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Translator" element={<Translate />} />
          <Route path="/binary" element={<Biner />} />
          <Route path="/decimal" element={<DecimalTranslator />} />
          <Route path="/hexadecimal" element={<HexadecimalTranslator />} />
          <Route path="/prediction" element={<ScorePrediction />} />
          <Route path="/stock" element={<StockAi />} />
          <Route path="/AI" element={<Ai />} />
          <Route path="/Code-Course" element={<ProgramingCourses />} />
          <Route path="/Code-Course/python-course" element={<PythonHello />} />
          <Route path="/python/lesson1" element={<PythonLesson1 />} />
          <Route path="/python/lesson2" element={<PythonLesson2 />} />
          <Route path="/python/lesson3" element={<PythonLesson3 />} />
          <Route path="/location" element={<Locations />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
