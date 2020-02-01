import React, { Component } from "react";
import DiceSide from "./diceSide";
import SuccessRate from "./successRate";
import DiceNumber from "./diceNumber";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * max - min + 1) + min;
};

class DiceGenerator extends Component {
  state = {
    result: 0,
    sides: 0,
    dieNumber: 1,
    rate: 0
  };

  handleSideSetting(newSide) {
    this.setState({ sides: newSide });
  }

  handleIncrement() {
    this.setState({ dieNumber: this.state.dieNumber + 1 });
  }

  handleDecrement() {
    if (this.state.dieNumber > 0)
      this.setState({ dieNumber: this.state.dieNumber - 1 });
  }

  handleRateSetting(newRate) {
    this.setState({ rate: newRate });
    console.log(this.state);
  }

  handleGenerate() {
    let rollNumber = 0;
    let genRes = 0;
    this.setState({ result: 0 });
    for (rollNumber = 0; rollNumber < this.state.dieNumber; rollNumber++) {
      if (getRandomInt(1, this.state.sides) >= this.state.rate) genRes++;
    }
    this.setState({ result: genRes });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <DiceSide
            sides={this.state.sides}
            doSideSet={this.handleSideSetting.bind(this)}
          />
        </div>
        <div>
          <DiceNumber
            numbers={this.state.dieNumber}
            doIncrement={this.handleIncrement.bind(this)}
            doDecrement={this.handleDecrement.bind(this)}
          />
          <SuccessRate handleChange={this.handleRateSetting.bind(this)} />
        </div>
        <div>
          <button
            onClick={this.handleGenerate.bind(this)}
            className="btn btn-secondary btn-sm m-1"
          >
            Generate
          </button>
          <h2>roll result: {this.state.result}</h2>
        </div>
      </div>
    );
  }
}

export default DiceGenerator;
