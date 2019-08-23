import React from 'react';
import './CurrencyAvailable.css';

function CurrencyAvailable({ handlePenny, handleNickel, handleDime, handleQuarter, handleOne, handleFive, handleTen, handleTwenty, handleOneHundred }) {
  return (
    <div>
        <h3>The amount of coins currently in the cash register</h3>
        Penny: <input className="number" type="number" step="0.01" min="0" placeholder={'Penny'} onChange={handlePenny} />
        Nickel: <input className="number" type="number" step="0.05" min="0" placeholder={'Nickel'} onChange={handleNickel} />
        Dime: <input className="number" type="number" step="0.1" min="0" placeholder={'Dime'} onChange={handleDime} />
        Quarter: <input className="number" type="number" step="0.25" min="0" placeholder={'Quarter'} onChange={handleQuarter} />
        Dollar: <input className="number" type="number" step="1" min="0" placeholder={'Dollar'} onChange={handleOne} />
        Five Dollars: <input className="number" type="number" step="5" min="0" placeholder={'Five Dollars'} onChange={handleFive} />
        Ten Dollars: <input className="number" type="number" step="10" min="0" placeholder={'Ten Dollars'} onChange={handleTen} />
        Twenty Dollars: <input className="number" type="number" step="20" min="0" placeholder={'Twenty Dollars	'} onChange={handleTwenty} />
        One-hundred Dollars: <input className="number" type="number" step="100" min="0" placeholder={'One-hundred Dollars'} onChange={handleOneHundred} />
    </div>
  );
}

export default CurrencyAvailable;