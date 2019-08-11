import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <div>
        <Link to='/PalindromeChecker' className='link' >PalindromeChecker</Link>
      </div>
      <Link to='/RomanNumeralConverter' className='link' >RomanNumeralConverter</Link>
      <div>
        <Link to='/CaesarsCipher' className='link' >CaesarsCipher</Link>
      </div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;