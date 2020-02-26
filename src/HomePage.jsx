import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className='HomePage' >
      <h1>Home Page</h1>
      <p>For more information about the site, see <a href="https://github.com/yitzhak-bloy/freeCodeCamp-JavaScript-Algorithms" rel="noopener noreferrer" target="_blank" >here</a>.</p>
      <div className='Links'>
        <Link to='/PalindromeChecker' className='link linkHome' >Palindrome Checker</Link>
        <Link to='/CaesarsCipher' className='link linkHome' >Caesars Cipher</Link>
        <Link to='/cashRegister' className='link linkHome' >Cash Register</Link>
        <Link to='/RomanNumeralConverter' className='link linkHome' >Roman Numeral Converter</Link>
        <Link to='/TelephoneNumberValidator' className='link linkHome' >Telephone Number Validator</Link>
      </div>
    </div>
  );
}

export default HomePage;