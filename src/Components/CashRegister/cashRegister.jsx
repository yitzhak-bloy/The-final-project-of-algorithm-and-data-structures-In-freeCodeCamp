import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox'
import Button from '../button/button';
import CurrencyAvailable from '../CurrencyAvailable/CurrencyAvailable'
import Calculation from '../calculation/calculation'
import './cashRegister.css';

const CashRegister = () => {
  const [ calculation, setCalculation ] = useState(false);
  const [ price, setPrice ] = useState('');
  const [ cash, setCash ] = useState('');
  const [ solution, setSolution ] = useState([]);
  const [ penny, setPenny ] = useState(0);
  const [ nickel, setNickel ] = useState(0);
  const [ dime, setDime ] = useState(0);
  const [ quarter, setQuarter ] = useState(0);
  const [ one, setOne ] = useState(0);
  const [ five, setFive ] = useState(0);
  const [ ten, setTen ] = useState(0);
  const [ twenty, setTwenty ] = useState(0);
  const [ oneHundred, setOneHundred ] = useState(0);

  const handlePrice = (sentence) => {
    setPrice(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handlePayment = (sentence) => {
    setCash(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handlePenny = (sentence) => {
    setPenny(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleNickel = (sentence) => {
    setNickel(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleDime = (sentence) => {
    setDime(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleQuarter = (sentence) => {
    setQuarter(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleOne = (sentence) => {
    setOne(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleFive = (sentence) => {
    setFive(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleTen = (sentence) => {
    setTen(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleTwenty = (sentence) => {
    setTwenty(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleOneHundred = (sentence) => {
    setOneHundred(sentence.target.value);
    setCalculation(false);
    setSolution([]);
  }

  const handleClick = () => {
    setCalculation(true);
  }

  const cid = [['PENNY', penny], ['NICKEL', nickel], ['DIME', dime], ['QUARTER', quarter], ['ONE', one], ['FIVE', five], ['TEN', ten], ['TWENTY', twenty], ['ONE HUNDRED', oneHundred]]
  const excess = (cash - price).toFixed(2);

  return (
    <div className="cashRegister">
      <div>
        <Link to='/' className='link link1' >HomePage</Link>
      </div>
      <h1>Cash Register</h1>
      <p className='pTag p'>This is the cash register's calculations, you need to enter the product price and the amount received from the customer and the amounts currently in the cash register, and the site will calculate for you the surplus that comes to the customer. All amounts and calculations are done in US currency.</p>
      <div className='inputAmounts'>
        <div>
          <h3>product price</h3>
          <InputBox 
            handleChange={handlePrice} 
            sentenceWithinTheInputFrame='Write the product price' 
            isTelephoneNumberValidator 
          />
        </div>
        <div>
          <h3>The amount received from the customer</h3>
          <InputBox 
            handleChange={handlePayment} 
            sentenceWithinTheInputFrame='Write down the amount the customer brought'  
            isTelephoneNumberValidator
          />
        </div>
      </div>
      <CurrencyAvailable 
        handlePenny={handlePenny}
        handleNickel={handleNickel}
        handleDime={handleDime}
        handleQuarter={handleQuarter}
        handleOne={handleOne}
        handleFive={handleFive}
        handleTen={handleTen}
        handleTwenty={handleTwenty}
        handleOneHundred={handleOneHundred}
      />
      <div className='buttonOfCashRegister'>
        <Button
          handleClick={handleClick} 
          WordWrittenInAButton='Calculate the excess' 
        />
      </div>
      { calculation ? <Calculation  excess={excess} CurrentCurrency={8} cid={cid} Name={8} cidNamber={8} solution={solution} /> : null }
    </div>
  );
}

export default CashRegister;