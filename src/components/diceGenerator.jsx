import React, { Component } from "react";
import DiceSide from "./diceSide";
import SuccessRate from "./successRate";
import DiceNumber from "./diceNumber";

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
