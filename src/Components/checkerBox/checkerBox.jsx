import React from 'react';

function CheckerBox({ handleChange, handleClick }) {
  return (
    <div className="CheckerBox">
        <input type="text" placeholder='Write a statement to check' onChange={handleChange} />
        <input type="submit" value="check" onClick={handleClick} />
    </div>
  );
}

export default CheckerBox;
