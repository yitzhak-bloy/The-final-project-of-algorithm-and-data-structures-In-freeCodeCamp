import React from 'react';
import './CurrencyAvailable.css';

function CurrencyAvailable({ handlePenny, handleNickel, handleDime, handleQuarter, handleOne, handleFive, handleTen, handleTwenty, handleOneHundred }) {
  return (
    <div className='CurrencyAvailable'>
      <h3>The amount of coins currently in the cash register</h3>
      <div className='coins'>
        <div className='divOfcoins'>        
          <span className='spanOfCoins'> Penny: </span>
          <input className="number" type="number" step="0.01" min="0" placeholder={'Penny'} onChange={handlePenny} />
        </div>
        <div className='divOfcoins'>     
          <span className='spanOfCoins'> Nickel: </span>   
           <input className="number" type="number" step="0.05" min="0" placeholder={'Nickel'} onChange={handleNickel} />
        </div>
        <div className='divOfcoins'>
          <span className='spanOfCoins'> Dime: </span>        
           <input className="number" type="number" step="0.1" min="0" placeholder={'Dime'} onChange={handleDime} />
        </div>
        <div className='divOfcoins'>
          <span className='spanOfCoins'> Quarter: </span>        
          <input className="number" type="number" step="0.25" min="0" placeholder={'Quarter'} onChange={handleQuarter} />
        </div>
        <div className='divOfcoins'>
          <span className='spanOfCoins'> Dollar: </span>        
          <input className="number" type="number" step="1" min="0" placeholder={'Dollar'} onChange={handleOne} />
        </div>
        <div className='divOfcoins'>
          <span className='spanOfCoins'> Five Dollars: </span>        
          <input className="number" type="number" step="5" min="0" placeholder={'Five Dollars'} onChange={handleFive} />
        </div>
        <div className='divOfcoins'> 
          <span className='spanOfCoins'> Ten Dollars: </span>       
          <input className="number" type="number" step="10" min="0" placeholder={'Ten Dollars'} onChange={handleTen} />
        </div>
        <div className='divOfcoins'> 
          <span className='spanOfCoins'> Twenty Dollars: </span>       
          <input className="number" type="number" step="20" min="0" placeholder={'Twenty Dollars	'} onChange={handleTwenty} />
        </div>
        <div className='divOfcoins'>    
          <span className='spanOfCoins'> One-hundred Dollars: </span>    
          <input className="number" type="number" step="100" min="0" placeholder={'One-hundred Dollars'} onChange={handleOneHundred} />
        </div>
      </div>
    </div>
  );
}

export default CurrencyAvailable;