import React, { Component } from "react";
import DiceNumber from "./diceNumber";
import SuccessRate from "./successRate";
import DiceSide from "./diceSide";

class DiceResult extends Component {
  state = {
    result: 0
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max) + min;
  };

  handleRoll = () => {
    let rollNumber = 0;
    this.setState.result = 0;
    for (rollNumber = 0; rollNumber < DiceNumber.state.number; rollNumber++) {
      if (getRandomInt(1, DiceSide.state.side) >= SuccessRate.state.rate)
        this.setState({ result: this.state.result + 1 });
    }
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleRoll()}
          className="btn btn-secondary btn-sm m-1"
        >
          Generate
        </button>
        <span className="badge badge-primary m-2">The rolls result:</span>
        <span className="badge badge-primary m-2">{this.state.result}</span>
      </div>
    );
  }
}

export default DiceResult;
