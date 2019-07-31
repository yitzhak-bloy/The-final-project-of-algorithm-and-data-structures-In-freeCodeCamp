import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <Link to='/PalindromeChecker' >PalindromeChecker</Link>
        <h3>לחיצה</h3>
    </div>
  );
}

export default HomePage;

