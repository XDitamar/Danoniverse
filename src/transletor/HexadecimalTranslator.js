import React, { useState } from 'react';
import './HexadecimalTranslator.css';

const HexadecimalTranslator = () => {
  const [hexadecimalValue, setHexadecimalValue] = useState('');
  const [binaryValue, setBinaryValue] = useState('');
  const [decimalValue, setDecimalValue] = useState('');
  const [octalValue, setOctalValue] = useState('');

  const handleHexadecimalChange = (e) => {
    const value = e.target.value;
    setHexadecimalValue(value);

    const binary = parseInt(value, 16).toString(2);
    setBinaryValue(binary);

    const decimal = parseInt(value, 16).toString(10);
    setDecimalValue(decimal);

    const octal = parseInt(value, 16).toString(8);
    setOctalValue(octal);
  };

  return (
    <div className="HexadecimalTranslator">
      <div className="HexadecimalTranslator-content">
        <h2>Hexadecimal Translator</h2>
        <label htmlFor="hexadecimalInput">Enter a Hexadecimal Number: </label>
        <input
          type="text"
          id="hexadecimalInput"
          value={hexadecimalValue}
          onChange={handleHexadecimalChange}
        />

        <p>Binary: {binaryValue}</p>
        <p>Decimal: {decimalValue}</p>
        <p>Octal: {octalValue}</p>
      </div>
    </div>
  );
};

export default HexadecimalTranslator;
