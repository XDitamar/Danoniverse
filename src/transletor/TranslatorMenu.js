import React from 'react';
import { Link } from 'react-router-dom';
import './TranslatorMenu.css';
import binaryIcon from './binary-code.png';
import decimalIcon from './decimal.png';
import hexadecimalIcon from './hexadecimal.png';

const TranslatorMenu = () => {
  return (
    <div className="menu-container background-white">
      <h1 className="menu-heading">Translation Menu</h1>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/binary" className="menu-link">
            <img src={binaryIcon} alt="Binary Icon" className="menu-icon" />
            Binary Translator
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/decimal" className="menu-link">
            <img src={decimalIcon} alt="Decimal Icon" className="menu-icon" />
            Decimal Translator
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/hexadecimal" className="menu-link">
            <img src={hexadecimalIcon} alt="Hexadecimal Icon" className="menu-icon" />
            Hexadecimal Translator
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TranslatorMenu;
