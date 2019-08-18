import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox'
import Button from '../button/button';

class CashRegister extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      paidUp: ''
    };
  }

  handlePrice = (sentence) => {
    this.setState({ price: sentence.target.value })
  }

  handlePayment = (sentence) => {
    this.setState({ paidUp: sentence.target.value })
  }

  render() {
    return (
      <div className="cashRegister">
        <h1>Cash Register</h1>
        <div>
          <InputBox 
            handleChange={this.handlePrice} 
            sentenceWithinTheInputFrame='Write the product price'  
          />
        </div>
        <div>
          <InputBox 
            handleChange={this.handlePayment} 
            sentenceWithinTheInputFrame='Write down the amount the customer brought'  
          />
        </div>
          <Button
            handleClick={this.handleClick} 
            WordWrittenInAButton='check' 
          />
          <h1>{this.state.price}</h1>
          <h1>{this.state.paidUp}</h1>
        <div>
          <Link to='/' className='link' >HomePage</Link>
        </div>
      </div>
    );
  }
}

export default CashRegister;



// בנית קומפוננט שתכיל שני מקומות לקלט הסכום ששילם הלקוח ולקלט העלות מוצר
// בנית קומפוננה שתכיל מקום להכניס את הסכום שנמצא בקופה בחלוקה לפי מטבעות
// בניית האלגוריתם שינתח ויפלוט את העודף שמגיע ללקוח
