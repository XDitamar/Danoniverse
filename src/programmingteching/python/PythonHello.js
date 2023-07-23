import React from 'react';
import { Link } from 'react-router-dom';
import '../design/hellopage.css';
const PythonHello = () => {
  return (
    <div className="hello-container">
      <div className="hello-content">
        <h1 className="hello-heading">Welcome to the Python Course!</h1>
        <p className="hello-text">
          In this comprehensive Python course, you will embark on a journey to become a pro in Python programming.
          Whether you're a beginner or have some coding experience, this course will take your skills to the next level.
        </p>
        <p className="hello-text">
          Python is a powerful and popular programming language known for its versatility and readability.
          By the end of this course, you will have the knowledge and skills to build amazing applications, solve complex problems, and unlock exciting opportunities.
        </p>
        <div className="hello-button-container">
          <Link to="/python/lesson1" className="hello-button">
            Let's Begin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PythonHello;
