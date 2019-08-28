import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox'
import Button from '../button/button'
import './PalindromeChecker.css';

class PalindromeChecker extends Component {
  constructor() {
      super();
      this.state = {
        Sentence: '',
        IsItPalindrome: ''
      };
    }

  handleChange = (sentence) => {
    this.setState({ Sentence: sentence.target.value })
  }

  handleClick = () => {
    const alphanumeric = (this.state.Sentence.match(/[A-Za-z0-9]/g).join('').toLowerCase());
    const alphanumericInReverse = (alphanumeric.split('').reverse().join(''))
  
    this.setState({IsItPalindrome: alphanumeric === alphanumericInReverse}) 
  }

  render() {
    return (
      <div className="PalindromeChecker">
        <h1>Palindrome Checker</h1>
        <InputBox 
          handleChange={this.handleChange} 
          sentenceWithinTheInputFrame='Write a statement to check'  
        />
        <Button
          handleClick={this.handleClick} 
          WordWrittenInAButton='check' 
        />
        { 
          this.state.IsItPalindrome === true
          ? 
          <h1>It's a palindrome!</h1>
          : 
          (
            this.state.IsItPalindrome === false
            ?       
            <h1>Sorry, that's not a palindrome.</h1>
            : 
            <span>Enter some alpha-numeric characters</span>
          )
        }
        <div>
          <Link to='/' className='link' >HomePage</Link>
        </div>
      </div>
    );
  }
}

export default PalindromeChecker;
