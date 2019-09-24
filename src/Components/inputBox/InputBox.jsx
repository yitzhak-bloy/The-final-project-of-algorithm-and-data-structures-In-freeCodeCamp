import React from 'react';
import './inputBox.css';

function InputBox({ handleChange,sentenceWithinTheInputFrame, isCaesarsCipher, isRomanNumeralConverter, isTelephoneNumberValidator }) {
  if (isRomanNumeralConverter) {
    return  <input 
              type="number" 
              name="quantity" 
              min="1" 
              max="9999"           
              onChange={handleChange}
              className='inputRomanNumeralConverter'
            />      
  } else if (isTelephoneNumberValidator) {
    return  <input 
              type="number" 
              name="quantity"     
              onChange={handleChange}
              className='inputTelephoneNumberValidator'
            />
  } else {
    return  <textarea 
              className={`${isCaesarsCipher ? 'caesarsCipher' : ''} text`} 
              name="textarea" 
              placeholder={sentenceWithinTheInputFrame} 
              onChange={handleChange} 
            />
  }
}

export default InputBox;