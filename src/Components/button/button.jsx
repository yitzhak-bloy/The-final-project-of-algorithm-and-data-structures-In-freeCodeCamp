import React from 'react';
import './button.css';

function Button({ handleClick, WordWrittenInAButton }) {
  return (
    <div>
        <input className="submit" type="submit" value={WordWrittenInAButton} onClick={handleClick} />
    </div>
  );
}

export default Button;