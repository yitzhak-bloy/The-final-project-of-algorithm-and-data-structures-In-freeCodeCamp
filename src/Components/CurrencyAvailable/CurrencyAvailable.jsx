import React from 'react';
import './CurrencyAvailable.css';

function CurrencyAvailable({ handlePenny, handleNickel, handleDime, handleQuarter, handleOne, handleFive, handleTen, handleTwenty, handleOneHundred }) {
  return (
    <div>
        <h1>Currency </h1>
        <input className="number" type="number" step="0.01" min="0" placeholder={'Penny'} onChange={handlePenny} />
        <input className="number" type="number" step="0.05" min="0" placeholder={'Nickel'} onChange={handleNickel} />
        <input className="number" type="number" step="0.1" min="0" placeholder={'Dime'} onChange={handleDime} />
        <input className="number" type="number" step="0.25" min="0" placeholder={'Quarter'} onChange={handleQuarter} />
        <input className="number" type="number" step="1" min="0" placeholder={'Dollar'} onChange={handleOne} />
        <input className="number" type="number" step="5" min="0" placeholder={'Five Dollars'} onChange={handleFive} />
        <input className="number" type="number" step="10" min="0" placeholder={'Ten Dollars'} onChange={handleTen} />
        <input className="number" type="number" step="20" min="0" placeholder={'Twenty Dollars	'} onChange={handleTwenty} />
        <input className="number" type="number" step="100" min="0" placeholder={'One-hundred Dollars'} onChange={handleOneHundred} />
    </div>
  );
}

export default CurrencyAvailable;