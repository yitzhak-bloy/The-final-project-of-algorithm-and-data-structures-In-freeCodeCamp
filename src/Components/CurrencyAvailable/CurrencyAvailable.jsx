import React from 'react';
import './CurrencyAvailable.css';

function CurrencyAvailable(handleChange) {
  return (
    <div>
        <h1>Currency </h1>
        <input className="number" type="number" step="0.01" min="0" placeholder={'Penny'} onChange={handleChange} />
        <input className="number" type="number" step="0.05" min="0" placeholder={'Nickel'} onChange={handleChange} />
        <input className="number" type="number" step="0.1" min="0" placeholder={'Dime'} onChange={handleChange} />
        <input className="number" type="number" step="0.25" min="0" placeholder={'Quarter'} onChange={handleChange} />
        <input className="number" type="number" step="1" min="0" placeholder={'Dollar'} onChange={handleChange} />
        <input className="number" type="number" step="5" min="0" placeholder={'Five Dollars'} onChange={handleChange} />
        <input className="number" type="number" step="10" min="0" placeholder={'Ten Dollars'} onChange={handleChange} />
        <input className="number" type="number" step="20" min="0" placeholder={'Twenty Dollars	'} onChange={handleChange} />
        <input className="number" type="number" step="100" min="0" placeholder={'One-hundred Dollars'} onChange={handleChange} />
    </div>
  );
}

export default CurrencyAvailable;