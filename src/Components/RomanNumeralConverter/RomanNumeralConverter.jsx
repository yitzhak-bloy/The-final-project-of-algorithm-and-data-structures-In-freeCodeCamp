import React, { Component } from 'react';
import CheckerBox from '../checkerBox/checkerBox';
import { Link } from 'react-router-dom';

class RomanNumeralConverter extends Component {
  constructor() {
      super();
      this.state = {
        Number: ''
      };
    }

  handleChange = (sentence) => {
    this.setState({ Number: sentence.target.value })
    console.log(this.state.Number)
  }

  handleClick = () => {

  }

  render() {
    return (
      <div className="RomanNumeralConverter">
          <h1>Roman Numeral Converter</h1>
          <CheckerBox 
            handleChange={this.handleChange} 
            handleClick={this.handleClick}
            sentenceWithinTheInputFrame='Write a number to convert'  
            WordWrittenInAButton='convert'  
          />
          <Link to='/'>HomePage</Link>
      </div>
    );
  }
}

export default RomanNumeralConverter;