import React from 'react';

function CheckerBox({ trial, handleChange }) {
  return (
    <div className="CheckerBox">
        <h1> {trial} מרובה </h1>
        <input type="text" placeholder='dcsdvdfbvdfbd' onChange={handleChange} />
    </div>
  );
}

export default CheckerBox;
