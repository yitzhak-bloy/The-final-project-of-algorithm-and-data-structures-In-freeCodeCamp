import React from 'react';
import './inputBox.css';

function InputBox({ handleChange,sentenceWithinTheInputFrame }) {
  return (
    <div>
        <input className="text" type="text" placeholder={sentenceWithinTheInputFrame} onChange={handleChange} />
    </div>
  );
}

export default InputBox;