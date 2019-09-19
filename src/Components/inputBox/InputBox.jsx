import React from 'react';
import './inputBox.css';

function InputBox({ handleChange,sentenceWithinTheInputFrame, isCaesarsCipher, isInNumber }) {
  return (
    <div>
      {
        isInNumber
        ?
          <input 
            type="number" 
            name="quantity" 
            min="1" 
            max="9999"           
            onChange={handleChange}
            className='number'
          />       
        :
          <textarea 
            className={`${isCaesarsCipher ? 'caesarsCipher' : ''} text`} 
            name="textarea" 
            placeholder={sentenceWithinTheInputFrame} 
            onChange={handleChange} 
          />
      }
    </div>
  );
}

export default InputBox;