import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RomanNumeralConverter extends Component {
  constructor() {
      super();
      this.state = {
      };
    }

  render() {
    return (
      <div className="RomanNumeralConverter">
          <h1>Roman Numeral Converter</h1>
          <Link to='/'>HomePage</Link>
      </div>
    );
  }
}

export default RomanNumeralConverter;
