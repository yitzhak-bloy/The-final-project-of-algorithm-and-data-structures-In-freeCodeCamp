import React from 'react';
import { Route } from 'react-router-dom';
import PalindromeChecker from './Components/PalindromeChecker/PalindromeChecker';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/PalindromeChecker' component={PalindromeChecker} />
    </div>
  );
}

export default App;
