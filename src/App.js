import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import PalindromeChecker from './Components/PalindromeChecker/PalindromeChecker';
import RomanNumeralConverter from './Components/RomanNumeralConverter/RomanNumeralConverter'
import CaesarsCipher from './Components/CaesarsCipher/CaesarsCipher'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/PalindromeChecker' component={PalindromeChecker} />
      <Route path='/RomanNumeralConverter' component={RomanNumeralConverter} />
      <Route path='/CaesarsCipher' component={CaesarsCipher} />
    </div>
  );
}

export default App;