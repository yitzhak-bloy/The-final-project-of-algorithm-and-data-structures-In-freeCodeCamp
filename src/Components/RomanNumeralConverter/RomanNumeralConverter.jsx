import React, { useState } from 'react';
import InputBox from '../inputBox/InputBox';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import './RomanNumeralConverter.css';

const RomanNumeralConverter = () => {
  const [number, setNumber] = useState('');
  const [thousandsRomanNumeral, setThousandsRomanNumeral] = useState('');
  const [hundredsRomanNumeral, setHundredsRomanNumeral] = useState('');
  const [dozensRomanNumeral, setDozensRomanNumeral] = useState('');
  const [singleRomanNumeral, setSingleRomanNumeral] = useState('');

  const handleChange = (numbers) => {
    setNumber(numbers.target.value)
  }

  const handleClick = () => {
    const Thousands = Math.floor(number / 1000) * 1000;
    const Hundreds = Math.floor((number-Thousands) / 100) * 100;
    const Dozens = Math.floor((number-Thousands-Hundreds) / 10) * 10;
    const Single = Math.floor((number-Thousands-Hundreds-Dozens) / 1);

    switch (Thousands) {
      case 1000:
        setThousandsRomanNumeral('M');
      break;
      case 2000:
        setThousandsRomanNumeral('MM');
        break;
      case 3000:
        setThousandsRomanNumeral('MMM');
        break;
      case 4000:
        setThousandsRomanNumeral('MMMM');
        break;
      case 5000:
        setThousandsRomanNumeral('MMMMM');
        break;
      case 6000:
        setThousandsRomanNumeral('MMMMMM');
        break;
      case 7000:
        setThousandsRomanNumeral('MMMMMMM');
        break;
      case 8000:
        setThousandsRomanNumeral('MMMMMMMM');
        break;
      case 9000:
        setThousandsRomanNumeral('MMMMMMMMM');
        break;
      default:
        setThousandsRomanNumeral('');
    }

    switch (Hundreds) {
      case 100:
        setHundredsRomanNumeral('C');
        break;
      case 200:
        setHundredsRomanNumeral('CC');
        break;
      case 300:
        setHundredsRomanNumeral('CCC');
        break;
      case 400:
        setHundredsRomanNumeral('CD');
        break;
      case 500:
        setHundredsRomanNumeral('D');
        break;
      case 600:
        setHundredsRomanNumeral('DC');
        break;
      case 700:
        setHundredsRomanNumeral('DCC');
        break;
      case 800:
        setHundredsRomanNumeral('DCCC');
        break;
      case 900:
        setHundredsRomanNumeral('CM');
        break;
      default:
        setHundredsRomanNumeral('');
    }

    switch (Dozens) {
      case 10:
        setDozensRomanNumeral('X');
        break;
      case 20:
        setDozensRomanNumeral('XX');
        break;
      case 30:
        setDozensRomanNumeral('XXX');
        break;
      case 40:
        setDozensRomanNumeral('XL');
        break;
      case 50:
        setDozensRomanNumeral('L');
        break;
      case 60:
        setDozensRomanNumeral('LX');
        break;
      case 70:
        setDozensRomanNumeral('LXX');
        break;
      case 80:
        setDozensRomanNumeral('LXXX');
        break;
      case 90:
        setDozensRomanNumeral('XC');
        break;
      default:
        setDozensRomanNumeral('');
    }

    switch (Single) {
      case 1:
        setSingleRomanNumeral('I');
        break;
      case 2:
        setSingleRomanNumeral('II');
        break;
      case 3:
        setSingleRomanNumeral('III');
        break;
      case 4:
        setSingleRomanNumeral('IV');
        break;
      case 5:
        setSingleRomanNumeral('V');
        break;
      case 6:
        setSingleRomanNumeral('VI');
        break;
      case 7:
        setSingleRomanNumeral('VII');
        break;
      case 8:
        setSingleRomanNumeral('VIII');
        break;
      case 9:
        setSingleRomanNumeral('IX');
        break;
      default:
        setSingleRomanNumeral('');
    }  
  }

  return (
    <div className="RomanNumeralConverter">
      <div>
        <Link to='/' className='link1 link' >HomePage </Link>
      </div>
      <h1>Roman Numeral Converter</h1>
      <p>Converts the given number into a <a href="https://en.wikipedia.org/wiki/Roman_numerals" rel="noopener noreferrer" target="_blank" >roman numeral </a></p>
      <p>Note! The conversion only works until the number 9999 and no more.</p>
      <InputBox 
        handleChange={handleChange} 
        sentenceWithinTheInputFrame='Write a number'  
        isRomanNumeralConverter
      />
      <Button
        handleClick={handleClick} 
        WordWrittenInAButton='conversion' 
      />
      {
        thousandsRomanNumeral.length + hundredsRomanNumeral.length + dozensRomanNumeral.length + singleRomanNumeral.length
        ?
          <div>
            <p> The number in Roman is: </p>
            <p className='pBig margin'>{thousandsRomanNumeral + hundredsRomanNumeral + dozensRomanNumeral + singleRomanNumeral}</p>
          </div>
        :
          <p>Write down a number you want to convert to a Roman number</p>
      }
    </div>
  );
}

export default RomanNumeralConverter;