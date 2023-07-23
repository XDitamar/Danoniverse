import React, { useState } from 'react';
import './DecimalTranslator.css';

const DecimalTranslator = () => {
  const [decimalValue, setDecimalValue] = useState('');
  const [binaryValue, setBinaryValue] = useState('');
  const [hexadecimalValue, setHexadecimalValue] = useState('');
  const [octalValue, setOctalValue] = useState('');

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimalValue(value);

    const binary = parseInt(value).toString(2);
    setBinaryValue(binary);

    const hexadecimal = parseInt(value).toString(16);
    setHexadecimalValue(hexadecimal);

    const octal = parseInt(value).toString(8);
    setOctalValue(octal);
  };

  return (
    <div className="DecimalTranslator">
      <div className="DecimalTranslator-content">
        <h2>Decimal Translator</h2>
        <label htmlFor="decimalInput">Enter a Decimal Number: </label>
        <input
          type="text"
          id="decimalInput"
          value={decimalValue}
          onChange={handleDecimalChange}
        />

        <p>Binary: {binaryValue}</p>
        <p>Hexadecimal: {hexadecimalValue}</p>
        <p>Octal: {octalValue}</p>
      </div>
    </div>
  );
};

export default DecimalTranslator;
