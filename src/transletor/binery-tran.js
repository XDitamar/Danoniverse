import React, { useState } from 'react';
import './BinaryTranslator.css';

const BinaryTranslator = () => {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  const handleBinaryChange = (event) => {
    setBinary(event.target.value);
  };

  const handleTranslate = () => {
    const decimalValue = parseInt(binary, 2);
    setDecimal(decimalValue);
  };

  return (
    <div className="BinaryTranslator">
      <div className="BinaryTranslator-content">
        <h2>Binary to Decimal Translator</h2>
        <input
          type="text"
          value={binary}
          onChange={handleBinaryChange}
          placeholder="Enter binary number"
        />
        <button onClick={handleTranslate}>Translate</button>
        {decimal !== '' && <p>illays iq: {decimal}</p>}
      </div>
    </div>
  );
};

export default BinaryTranslator;
