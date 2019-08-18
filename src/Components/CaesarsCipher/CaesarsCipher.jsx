import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox';

// import CheckerBox from '../checkerBox/checkerBox';

class  CaesarsCipher extends Component {
  constructor() {
    super();
    this.state = {
      Sentence: '',
      result1: ''
    };
  }

  handleChange = (sentence) => {
    this.setState({ Sentence: sentence.target.value })
  }

  handleClick = () => {
    let result = [];
    let SentenceToConver = this.state.Sentence;
    for (let i = 0; i < SentenceToConver.length; i++) {
      switch (SentenceToConver[i].toUpperCase()) {
        case 'A':
          result.push('N')
        break;
        case 'B':
          result.push('O')
        break;
        case 'C':
          result.push('P')
        break;
        case 'D':
          result.push('Q')
        break;
        case 'E':
          result.push('R')
        break;
        case 'F':
          result.push('S')
        break;
        case 'G':
          result.push('T')
        break;
        case 'H':
          result.push('U')
        break;
        case 'I':
          result.push('V')
        break;
        case 'J':
          result.push('W')
        break;
        case 'K':
          result.push('X')
        break;
        case 'L':
          result.push('Y')
        break;
        case 'M':
          result.push('Z')
        break;
        case 'N':
          result.push('A')
        break;
        case 'O':
          result.push('B')
        break;
        case 'P':
          result.push('C')
        break;
        case 'Q':
          result.push('D')
        break;
        case 'R':
          result.push('E')
        break;
        case 'S':
          result.push('F')
        break;
        case 'T':
          result.push('G')
        break;
        case 'U':
          result.push('H')
        break;
        case 'V':
          result.push('I')
        break;
        case 'W':
          result.push('J')
        break;
        case 'X':
          result.push('K')
        break;
        case 'Y':
          result.push('L')
        break;
        case 'Z':
          result.push('M')
        break;
        default:
          result.push(SentenceToConver[i])
      }
    }
    result = result.join('')
    this.setState({ result1: result})
  }

  render() {
    return (
      <div className="CaesarsCipher">
        <h1>Caesars Cipher</h1>
        <InputBox 
          handleChange={this.handleChange} 
          handleClick={this.handleClick} 
          sentenceWithinTheInputFrame='Write a statement to convert'  
          WordWrittenInAButton='convert' 
        />
        <div>
          {
            this.state.result1.length
            ?
            <div>
              <h2> The Caesars Cipher after conversion is </h2>
              <h1>{this.state.result1}</h1>
            </div>
            :
            <span>Write a sentence in Caesars Cipher</span>
          }
          <div>
            <Link to='/' className='link' >HomePage</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CaesarsCipher;
