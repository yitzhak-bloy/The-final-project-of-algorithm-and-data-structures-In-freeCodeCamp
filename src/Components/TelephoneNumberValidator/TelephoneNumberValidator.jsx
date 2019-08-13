import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckerBox from '../checkerBox/checkerBox';

class  TelephoneNumberValidator extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      result: ''
    };
  }

  handleChange = (phoneNumber) => {
    this.setState({ phoneNumber: phoneNumber.target.value })
  }

  handleClick = () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    this.setState({ result: regex.test(this.state.phoneNumber)}) 
  }

  render() {
    return (
      <div className="telephoneNumberValidator">
        <h1>telephone Number Validator</h1>
        <CheckerBox 
          handleChange={this.handleChange} 
          handleClick={this.handleClick} 
          sentenceWithinTheInputFrame='Write a verification phone number'  
          WordWrittenInAButton='validation' 
        />
        {
          this.state.result
          ?
          <div>
            <h1>This number is a real phone number!</h1>
          </div>
          : 
            (
              this.state.result === ''
              ?       
              <span>Enter a phone number for review</span>
              : 
              <h3>Sorry, this is not a real phone number. Try again.</h3>
            )
        }
        <div>
          <Link to='/' className='link' >HomePage</Link>
        </div>
      </div>
    );
  }
}

export default TelephoneNumberValidator;
