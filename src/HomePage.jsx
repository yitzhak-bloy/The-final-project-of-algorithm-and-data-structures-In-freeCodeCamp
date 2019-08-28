import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <h1>Home Page</h1>
      <div>
        <Link to='/PalindromeChecker' className='link' >Palindrome Checker</Link>
      </div>
      <Link to='/RomanNumeralConverter' className='link' >Roman Numeral Converter</Link>
      <div>
        <Link to='/CaesarsCipher' className='link' >Caesars Cipher</Link>
      </div>
      <div>
        <Link to='/TelephoneNumberValidator' className='link' >Telephone Number Validator</Link>
      </div>
      <div>
        <Link to='/cashRegister' className='link' >Cash Register</Link>
      </div>
    </div>
  );
}

export default HomePage;