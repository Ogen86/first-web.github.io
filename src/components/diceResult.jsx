import React, { Component } from "react";
import DiceNumber from "./diceNumber";
import SuccessRate from "./successRate";
import DiceSide from "./diceSide";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max) + min;
};

class DiceResult extends Component {
  state = {
    result: 0,
    sides: 6,
    number: 3,
    rate: 4
  };

  handleSideSetting(props) {
    return (this.setState.sides = props.sides);
  }

  handleRoll() {
    let rollNumber = 0;
    this.setState.result = 0;
    //this.setState.sides = DiceSide.sides;
    //this.setState.number = DiceNumber.number;
    //this.setState.rate = SuccessRate.rate;
    for (rollNumber = 0; rollNumber < this.state.number; rollNumber++) {
      if (getRandomInt(1, this.state.sides) >= this.state.rate)
        this.setState({ result: this.state.result + 1 });
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleRoll()}
          className="btn btn-secondary btn-sm m-1"
        >
          Generate
        </button>
        <h2>The rolls result:</h2>
        <h3>{this.state.result}</h3>
      </div>
    );
  }
}

export default DiceResult;
