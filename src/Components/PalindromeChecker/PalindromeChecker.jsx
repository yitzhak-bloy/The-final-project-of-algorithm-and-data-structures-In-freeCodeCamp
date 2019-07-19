import React, { Component } from 'react';
import CheckerBox from '../checkerBox/checkerBox';



class PalindromeChecker extends Component {
  constructor() {
      super();
      this.state = {
        Trial: 'מאוד',
      };
    }

  handleChange = (e) => {
    this.setState({ Trial: e.target.value }, console.log(this.state.Trial))
    
  }

  render() {
    return (
      <div className="PalindromeChecker">
          <h1>הצלחה</h1>
          <CheckerBox  trial={this.state.Trial} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default PalindromeChecker;
