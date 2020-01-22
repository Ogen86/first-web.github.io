import React, { Component } from "react";
import DiceSide from "./diceSide";
import SuccessRate from "./successRate";
import DiceNumber from "./diceNumber";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max) + min;
};

class DiceGenerator extends Component {
  state = {
    result: 0,
    sides: 0,
    number: 0,
    rate: 0
  };

  handleSideSetting(newSide) {
    this.setState({ sides: newSide });
  }

  handleNumbersetting(newNumber) {
    this.setState({ number: newNumber });
  }

  handleRateSetting(newRate) {
    this.setState({ rate: newRate });
  }

  handleGenerate() {
    let rollNumber = 0;
    this.setState.result = 0;
    for (rollNumber = 0; rollNumber < this.state.number; rollNumber++) {
      if (getRandomInt(1, this.state.sides) >= this.state.rate)
        this.setState({ result: this.state.result + 1 });
    }
  }

  render() {
    return (
      <div>
        <DiceSide onClick={this.handleSideSetting.bind(this)} />
        <DiceNumber onClick={this.handleNumbersetting.bind(this)} />
        <SuccessRate onChange={this.handleRateSetting.bind(this)} />
        <div>
          <button
            onClick={this.handleGenerate}
            className="btn btn-secondary btn-sm m-1"
          >
            Generate
          </button>
          <h2>The rolls result:</h2>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default DiceGenerator;
