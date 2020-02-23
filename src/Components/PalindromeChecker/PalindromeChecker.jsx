import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox'
import Button from '../button/button'
import './PalindromeChecker.css';

const PalindromeChecker = () => {
  const [sentence, setSentence] = useState('');
  const [isItPalindrome, setIsItPalindrome] = useState('');

  const handleChange = (sentence) => {
    setSentence(sentence.target.value);
  };

  const handleClick = () => {
    if (sentence.search(/[A-Za-z0-9]/g) >= 0) {
      const alphanumeric = (sentence.match(/[A-Za-z0-9]/g).join('').toLowerCase());
      const alphanumericInReverse = (alphanumeric.split('').reverse().join(''))
      setIsItPalindrome(alphanumeric === alphanumericInReverse);
    }
  };

  return (
    <div className="PalindromeChecker">
      <Link to='/' className='link1 link ' >HomePage</Link>
      <h1>Palindrome Checker</h1>
      <p>Checks whether the given string is <a href="https://en.wikipedia.org/wiki/Palindrome" rel="noopener noreferrer" target="_blank" >Palindrome</a> or not.</p>
      <InputBox 
        handleChange={handleChange} 
        sentenceWithinTheInputFrame='Write a statement to check' 
        CaesarsCipher
      />
      <Button
        handleClick={handleClick} 
        WordWrittenInAButton='check' 
      />
      { 
        isItPalindrome === true
        ? 
          <p className='pBig'>It's a palindrome!</p>
        : 
          isItPalindrome === false
          ?       
            <p className='pBig'>Sorry, that's not a palindrome.</p>
          : 
            <p>Enter some alpha-numeric characters</p>
      }
    </div>
  );
}

export default PalindromeChecker;