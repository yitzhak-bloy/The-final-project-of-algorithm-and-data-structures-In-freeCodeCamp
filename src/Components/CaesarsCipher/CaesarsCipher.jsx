import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckerBox from '../checkerBox/checkerBox';

// import CheckerBox from '../checkerBox/checkerBox';

class  CaesarsCipher extends Component {
  constructor() {
      super();
      this.state = {
        Sentence: '',
        IsItPalindrome: ''
      };
    }

  render() {
    return (
      <div className="CaesarsCipher">
        <h1>Caesars Cipher</h1>
        <CheckerBox 
          handleChange={this.handleChange} 
          handleClick={this.handleClick} 
          sentenceWithinTheInputFrame='Write a statement to convert'  
          WordWrittenInAButton='convert' 
        />
        <div>
          <Link to='/' >HomePage</Link>
        </div>
      </div>
    );
  }
}

export default CaesarsCipher;
