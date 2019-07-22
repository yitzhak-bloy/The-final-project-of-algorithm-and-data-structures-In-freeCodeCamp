import React from 'react';
import './checkerBox.css';

function CheckerBox({ handleChange, handleClick }) {
  return (
    <div className="CheckerBox">
        <input className="text" type="text" placeholder='Write a statement to check' onChange={handleChange} />
        <input className="submit" type="submit" value="check" onClick={handleClick} />
    </div>
  );
}

export default CheckerBox;
