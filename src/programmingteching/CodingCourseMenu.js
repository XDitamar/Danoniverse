import React from 'react';
import { Link } from 'react-router-dom';
import './CodingCourseMenu.css';
import pythonIcon from './pic/python.png';
import javascriptIcon from './pic/javascript.png';
import javaIcon from './pic/java.png';
import csharpIcon from './pic/csharp.png';

const CodingCourseMenu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Coding Courses</h1>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/Code-Course/python-course" className="menu-link">
            <img src={pythonIcon} alt="Python Icon" className="menu-icon" />
            Python Course
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Code-Course/javascript-course" className="menu-link">
            <img src={javascriptIcon} alt="JavaScript Icon" className="menu-icon" />
            JavaScript Course
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Code-Course/java-course" className="menu-link">
            <img src={javaIcon} alt="Java Icon" className="menu-icon" />
            Java Course
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Code-Course/csharp-course" className="menu-link">
            <img src={csharpIcon} alt="C# Icon" className="menu-icon" />
            C# Course
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CodingCourseMenu;
