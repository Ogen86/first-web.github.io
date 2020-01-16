import React, { Component } from "react";
import DiceSide from "./components/diceSide";
import SuccessRate from "./components/successRate";
import DiceNumber from "./components/diceNumber";

class DiceGenerator extends Component {
  state = {};
  render() {
    return (
      <div>
        <DiceSide />
        <DiceNumber />
        <SuccessRate />
      </div>
    );
  }
}

export default DiceGenerator;
