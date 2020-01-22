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

  handleIncrement() {
    this.setState({ number: this.state.number + 1 });
  }

  handleDecrement() {
    if (this.state.number > 0) this.setState({ number: this.state.number - 1 });
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
        <DiceSide sides={this.state.sides} doSideSet={this.handleSideSetting} />
        <DiceNumber
          doIncrement={this.handleIncrement}
          doDecrement={this.handleDecrement}
        />
        <SuccessRate onChange={this.handleRateSetting} />
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
