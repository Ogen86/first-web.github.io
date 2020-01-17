import React, { Component } from "react";
import DiceSide from "./diceSide";
import SuccessRate from "./successRate";
import DiceNumber from "./diceNumber";
import DiceResult from "./diceResult";

class DiceGenerator extends Component {
  state = {};
  render() {
    return (
      <div>
        <DiceSide />
        <DiceNumber />
        <SuccessRate />
        <DiceResult />
      </div>
    );
  }
}

export default DiceGenerator;
