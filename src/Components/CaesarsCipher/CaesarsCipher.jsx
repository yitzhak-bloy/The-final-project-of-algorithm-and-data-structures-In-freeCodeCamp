import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          <Link to='/' >HomePage</Link>
        </div>
      </div>
    );
  }
}

export default CaesarsCipher;
