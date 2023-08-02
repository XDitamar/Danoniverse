import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
    }
  return (
    <div className="home">
      <h1>Welcome to My Website</h1>
      <p>Experience the best services and products</p>
      <div className="button-container">
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
        <button onClick={handleLogout}>
                        Logout
                    </button>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
