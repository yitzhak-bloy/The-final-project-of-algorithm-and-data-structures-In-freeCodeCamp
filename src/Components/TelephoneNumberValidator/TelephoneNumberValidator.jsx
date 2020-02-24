import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox';
import Button from '../button/button';
import './TelephoneNumberValidator.css';

const TelephoneNumberValidator = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setresult] = useState('');


  const handleChange = (phoneNumber) => {
    setPhoneNumber(phoneNumber.target.value);
  }

  const handleClick = () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    setresult(regex.test(phoneNumber));
  }

  return (
    <div className="telephoneNumberValidator">
      <div>
        <Link to='/' className='link link1' >HomePage</Link>
      </div>
      <h1>telephone Number Validator</h1>
      <p className='spanOfTelephone'>Return true if the passed string looks like a valid US phone number</p>
      <InputBox 
        handleChange={handleChange} 
        sentenceWithinTheInputFrame='Write a number to check'
        isTelephoneNumberValidator
      />
      <Button
        handleClick={handleClick} 
        WordWrittenInAButton='check' 
      />
      {
        result
        ?
          <div>
            <p className='pBig'>This number is a real phone number!</p>
          </div>
        : 
          result === ''
          ?       
            <p>Enter a phone number for review</p>
          : 
            <p className='pBig'>Sorry, this is not a real phone number. Try again.</p>
      }
    </div>
  );
}

export default TelephoneNumberValidator;