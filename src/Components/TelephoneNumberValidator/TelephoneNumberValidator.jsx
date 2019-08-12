import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckerBox from '../checkerBox/checkerBox';

class  TelephoneNumberValidator extends Component {
  constructor() {
    super();
    this.state = {
      Sentence: '',
      result1: ''
    };
  }

  render() {
    return (
      <div className="telephoneNumberValidator">
        <h1>telephone Number Validator</h1>
      <CheckerBox 
        handleChange={this.handleChange} 
        handleClick={this.handleClick} 
        sentenceWithinTheInputFrame='Write a number to verify'  
        WordWrittenInAButton='verify' 
      />
      <Link to='/' className='link' >HomePage</Link>
      </div>
    );
  }
}

export default TelephoneNumberValidator;
