import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CheckerBox from '../checkerBox/checkerBox';

class CashRegister extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      result: ''
    };
  }

  render() {
    return (
      <div className="cashRegister">
        <h1>Cash Register</h1>
        <div>
          <Link to='/' className='link' >HomePage</Link>
        </div>
      </div>
    );
  }
}

export default CashRegister;
