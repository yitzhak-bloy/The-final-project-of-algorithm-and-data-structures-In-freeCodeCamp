import React from 'react';
import './inputBox.css';

function InputBox({ handleChange,sentenceWithinTheInputFrame }) {
  return (
    <div>
        <textarea className="text" name="textarea" placeholder={sentenceWithinTheInputFrame} onChange={handleChange} />
    </div>
  );
}

export default InputBox;