    
import React, { Component } from 'react';

let solution = [];
const CurrencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
const CoinName = [', PENNY: ', ', NICKEL: ', ', DIME: ', ', QUARTER: ', ', ONE: ', ', FIVE: ', ', TEN: ', ', TWENTY: ', ', ONE HUNDRED: ']
let State = true;

const calculation = (Excess ,CurrentCurrency, Name, cidNamber, cid) => {
// בודק כמה מהמטבע אפשר להכניס לעודף והאם יש כזאת כמות של מטבע בקופה

// במקרה שאין את כל הכמות שנכנסת למטבע מכניסים את כל המטבע שנמצא בקופה
  if ((CurrencyValue[CurrentCurrency] * Math.floor(Excess / CurrencyValue[CurrentCurrency])) > cid[cidNamber][1]) {
    solution.unshift([CoinName[Name], cid[cidNamber][1]])
    Excess -= (cid[cidNamber][1])
    Excess = Excess.toFixed(2)
//  במקרה שיש את כל כמות המטבע שאפשר להכניס לעודף מכניסים את הכמות הזאת
  } else {
    solution.unshift([CoinName[Name], CurrencyValue[CurrentCurrency] * Math.floor(Excess / CurrencyValue[CurrentCurrency])])
    Excess -= (CurrencyValue[CurrentCurrency] * Math.floor(Excess / CurrencyValue[CurrentCurrency]))
    Excess = Excess.toFixed(2)
  }
// בודק האם לאחר שהכנסנו את כמות המטבע הנ"ל עדיין נשאר עודף שצריך לשלמו בשאר מטבעות
  if (Excess > 0) {
// בודק האם נשארו עוד מטבעות לבצע אליהם את האלגוריתם

// אם נשארו עוד מטבעות
    if (CurrentCurrency > 0) {
      CurrentCurrency--
      Name--
      cidNamber--
      calculation(Excess, CurrentCurrency, Name, cidNamber, cid)
// אם כבר עברנו על כל המטבעות 
    } else {
        State = false;
    }
  } else {
    State = true;
  }
}

class Calculation extends Component {
  constructor() {
      super();
      this.state = {

      };
    }


  render() {
    calculation(this.props.excess, 8, 8, 8, this.props.cid)
    let filterSolution = (solution.filter((item) => item[1] > 0)).reverse();
    return (
      <div>
        {/* <h1>Calculation: { this.props.cid }</h1>
        <h1>excess: { this.props.excess }</h1> */}
        {
          State  === false ?  <h1>insufficient</h1> : <h1>{ filterSolution }</h1>
        }
        {/* <h1>State: { State } </h1>
        <h1>solution: { solution } </h1> */}
      </div>
    );
  }
}

export default Calculation;