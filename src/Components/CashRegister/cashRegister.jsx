import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox'
import Button from '../button/button';
import CurrencyAvailable from '../CurrencyAvailable/CurrencyAvailable'
import Calculation from '../calculation/calculation'

class CashRegister extends Component {
  constructor() {
    super();
    this.state = {
      Calculation: false,
      price: '',
      cash: '',
      solution: [],
      penny: 0,
      nickel: 0,
      dime: 0,
      quarter: 0,
      one: 0,
      five: 0,
      ten: 0,
      twenty: 0,
      oneHundred: 0,
      solution1: ''
    };
  }

  handlePrice = (sentence) => {
    this.setState({ price: sentence.target.value })
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handlePayment = (sentence) => {
    this.setState({ cash: sentence.target.value })
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handlePenny = (sentence) => {
    this.setState({ penny: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleNickel = (sentence) => {
    this.setState({ nickel: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleDime = (sentence) => {
    this.setState({ dime: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleQuarter = (sentence) => {
    this.setState({ quarter: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleOne = (sentence) => {
    this.setState({ one: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleFive = (sentence) => {
    this.setState({ five: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleTen = (sentence) => {
    this.setState({ ten: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleTwenty = (sentence) => {
    this.setState({ twenty: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleOneHundred = (sentence) => {
    this.setState({ oneHundred: sentence.target.value})
    this.setState({ calculation: false })
    this.setState({ solution: [] })
  }

  handleClick = () => {
    this.setState({ calculation: true })
  }

  render() {
    const cid = [['PENNY', this.state.penny], ['NICKEL', this.state.nickel], ['DIME', this.state.dime], ['QUARTER', this.state.quarter], ['ONE', this.state.one], ['FIVE', this.state.five], ['TEN', this.state.ten], ['TWENTY', this.state.twenty], ['ONE HUNDRED', this.state.oneHundred]]
    const excess = (this.state.cash - this.state.price).toFixed(2);
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
        { this.state.calculation ? <Calculation  excess={excess} CurrentCurrency={8} cid={cid} Name={8} cidNamber={8} solution={this.state.solution} /> : null }
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