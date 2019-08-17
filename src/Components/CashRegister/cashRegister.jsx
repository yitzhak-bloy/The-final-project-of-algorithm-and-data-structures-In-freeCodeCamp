import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CheckerBox from '../checkerBox/checkerBox';

class CashRegister extends Component {
  constructor() {
    super();
    this.state = {
      ProductCost: '',
      Excess: ''
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



// בנית קומפוננט שתכיל  שני מקומות לפלט העודף ולפלט העלות מוצר
// בנית קומפוננה שץכיל מקום להכניס את הסכום שנמצא בקופה בחלוקה לפי מטבעות
// בניית האלגוריתם שינתח ויפלוט את העודף שמגיע ללקוח
