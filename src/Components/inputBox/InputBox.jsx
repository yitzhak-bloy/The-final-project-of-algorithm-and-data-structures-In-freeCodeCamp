import React from 'react';
import './inputBox.css';

function InputBox({ handleChange,sentenceWithinTheInputFrame, isCaesarsCipher }) {
  return (
    <div>
        <textarea className={`${isCaesarsCipher ? 'caesarsCipher' : ''} text`} name="textarea" placeholder={sentenceWithinTheInputFrame} onChange={handleChange} />
    </div>
  );
}

export default InputBox;