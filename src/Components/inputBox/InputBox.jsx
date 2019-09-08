import React from 'react';
import './inputBox.css';

function InputBox({ handleChange,sentenceWithinTheInputFrame, CaesarsCipher }) {
  return (
    <div>
        <textarea className={`text ${CaesarsCipher ? 'caesarsCipher' : ''}`} name="textarea" placeholder={sentenceWithinTheInputFrame} onChange={handleChange} />
    </div>
  );
}

export default InputBox;