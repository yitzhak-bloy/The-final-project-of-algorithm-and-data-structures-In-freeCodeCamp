import React from 'react';
import './inputBox.css';

function InputBox({ handleChange,sentenceWithinTheInputFrame, isCaesarsCipher, isRomanNumeralConverter, isTelephoneNumberValidator }) {
  return (
    <div>
      {
        isRomanNumeralConverter
        ?
          <input 
            type="number" 
            name="quantity" 
            min="1" 
            max="9999"           
            onChange={handleChange}
            className='inputRomanNumeralConverter'
          />       
        :
        (
          isTelephoneNumberValidator
          ?
          <input 
            type="number" 
            name="quantity"     
            onChange={handleChange}
            className='inputTelephoneNumberValidator'
          />
          :
          <textarea 
            className={`${isCaesarsCipher ? 'caesarsCipher' : ''} text`} 
            name="textarea" 
            placeholder={sentenceWithinTheInputFrame} 
            onChange={handleChange} 
          />
        )
      }
    </div>
  );
}

export default InputBox;