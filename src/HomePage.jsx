import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <div>
        <Link to='/PalindromeChecker' >PalindromeChecker</Link>
      </div>
      <Link to='/RomanNumeralConverter' >RomanNumeralConverter</Link>
      <h3>לחיצה</h3>
    </div>
  );
}

export default HomePage;