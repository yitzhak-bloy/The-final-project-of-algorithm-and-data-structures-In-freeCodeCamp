import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox'
import Button from '../button/button';
import CurrencyAvailable from '../CurrencyAvailable/CurrencyAvailable'

class CashRegister extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      cash: '',
      penny: 0,
      nickel: 0,
      dime: 0,
      quarter: 0,
      one: 0,
      five: 0,
      ten: 0,
      twenty: 0,
      oneHundred: 0,
    };
  }

  handlePrice = (sentence) => {
    this.setState({ price: sentence.target.value })
  }

  handlePayment = (sentence) => {
    this.setState({ cash: sentence.target.value })
  }

  handlePenny = (sentence) => {
    this.setState({ penny: sentence.target.value})
  }

  handleNickel = (sentence) => {
    this.setState({ nickel: sentence.target.value})
  }

  handleDime = (sentence) => {
    this.setState({ dime: sentence.target.value})
  }

  handleQuarter = (sentence) => {
    this.setState({ quarter: sentence.target.value})
  }

  handleOne = (sentence) => {
    this.setState({ one: sentence.target.value})
  }

  handleFive = (sentence) => {
    this.setState({ five: sentence.target.value})
  }

  handleTen = (sentence) => {
    this.setState({ ten: sentence.target.value})
  }

  handleTwenty = (sentence) => {
    this.setState({ twenty: sentence.target.value})
  }

  handleOneHundred = (sentence) => {
    this.setState({ oneHundred: sentence.target.value})
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
        <CurrencyAvailable 
          handlePenny={this.handlePenny}
          handleNickel={this.handleNickel}
          handleDime={this.handleDime}
          handleQuarter={this.handleQuarter}
          handleOne={this.handleOne}
          handleFive={this.handleFive}
          handleTen={this.handleTen}
          handleTwenty={this.handleTwenty}
          handleOneHundred={this.handleOneHundred}
        />
          <Button
            handleClick={this.handleClick} 
            WordWrittenInAButton='Calculate the excess' 
          />
          <h1>{this.state.price}</h1>
          <h1>{this.state.cash}</h1>
          <h1>{this.state.penny},{this.state.nickel},{this.state.dime},{this.state.quarter},{this.state.one},{this.state.five},{this.state.ten},{this.state.twenty},{this.state.oneHundred}</h1>
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
