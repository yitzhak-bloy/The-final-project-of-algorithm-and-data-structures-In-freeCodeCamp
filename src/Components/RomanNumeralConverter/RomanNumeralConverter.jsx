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
    const Thousands = Math.floor(this.state.Number/1000) * 1000;
    const Hundreds = Math.floor((this.state.Number-Thousands)/100) * 100;
    const Dozens = Math.floor((this.state.Number-Thousands-Hundreds)/10) * 10;
    const Single = Math.floor((this.state.Number-Thousands-Hundreds-Dozens)/1);
    console.log( Single)

    let ThousandsRomanNumeral = '';
    let HundredsRomanNumeral = '';
    let DozensRomanNumeral = '';
    let SingleRomanNumeral = '';

    switch (Thousands) {
      case 1000:
        ThousandsRomanNumeral = 'M';
      break;
      case 2000:
        ThousandsRomanNumeral = 'MM';
      break;
      case 3000:
        ThousandsRomanNumeral = 'MMM';
      break;
      case 4000:
        ThousandsRomanNumeral = 'MMMM';
      break;
      case 5000:
        ThousandsRomanNumeral = 'MMMMM';
      break;
      case 6000:
        ThousandsRomanNumeral = 'MMMMMM';
      break;
      case 7000:
        ThousandsRomanNumeral = 'MMMMMMM';
      break;
      case 8000:
        ThousandsRomanNumeral = 'MMMMMMMM';
      break;
      case 9000:
        ThousandsRomanNumeral = 'MMMMMMMMM';
      break;
    }

    switch (Hundreds) {
      case 100:
        HundredsRomanNumeral = 'C';
      break;
      case 200:
        HundredsRomanNumeral = 'CC';
      break;
      case 300:
        HundredsRomanNumeral = 'CCC';
      break;
      case 400:
        HundredsRomanNumeral = 'CD';
      break;
      case 500:
        HundredsRomanNumeral = 'D';
      break;
      case 600:
        HundredsRomanNumeral = 'DC';
      break;
      case 700:
        HundredsRomanNumeral = 'DCC';
      break;
      case 800:
        HundredsRomanNumeral = 'DCCC';
      break;
      case 900:
        HundredsRomanNumeral = 'CM';
      break;
    }

    switch (Dozens) {
      case 10:
        DozensRomanNumeral = 'X';
      break;
      case 20:
        DozensRomanNumeral = 'XX';
      break;
      case 30:
        DozensRomanNumeral = 'XXX';
      break;
      case 40:
        DozensRomanNumeral = 'XL';
      break;
      case 50:
        DozensRomanNumeral = 'L';
      break;
      case 60:
        DozensRomanNumeral = 'LX';
      break;
      case 70:
        DozensRomanNumeral = 'LXX';
      break;
      case 80:
        DozensRomanNumeral = 'LXXX';
      break;
      case 90:
        DozensRomanNumeral = 'XC';
      break;
    }

    switch (Single) {
      case 1:
        SingleRomanNumeral = 'I';
      break;
      case 2:
        SingleRomanNumeral = 'II';
      break;
      case 3:
        SingleRomanNumeral = 'III';
      break;
      case 4:
        SingleRomanNumeral = 'IV';
      break;
      case 5:
        SingleRomanNumeral = 'V';
      break;
      case 6:
        SingleRomanNumeral = 'VI';
      break;
      case 7:
        SingleRomanNumeral = 'VII';
      break;
      case 8:
        SingleRomanNumeral = 'VIII';
      break;
      case 9:
        SingleRomanNumeral = 'IX';
      break;
    }  
    console.log(ThousandsRomanNumeral + HundredsRomanNumeral + DozensRomanNumeral + SingleRomanNumeral)
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