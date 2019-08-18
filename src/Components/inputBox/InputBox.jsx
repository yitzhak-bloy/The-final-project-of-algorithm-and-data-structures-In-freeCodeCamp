import React from 'react';
import './inputBox.css';

function InputBox({ handleChange, handleClick, sentenceWithinTheInputFrame, WordWrittenInAButton }) {
  return (
    <div className="CheckerBox">
        <input className="text" type="text" placeholder={sentenceWithinTheInputFrame} onChange={handleChange} />
        <input className="submit" type="submit" value={WordWrittenInAButton} onClick={handleClick} />
    </div>
  );
}

export default InputBox;