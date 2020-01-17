import React, { Component } from "react";
import DiceNumber from "./diceNumber";
import SuccessRate from "./successRate";
import DiceSide from "./diceSide";

class DiceResult extends Component {
  state = {
    result: 0
  };

  handleRoll() {
      for (DiceNumber.state.number) {
          if (getRandomInt(DiceSide.state.side) >= SuccessRate.state.rate)
            this.setState({ result: this.state.result + 1 });
      }
    
  }
  render() {
    return (
      <div>
         <button onClick={this.handleRoll}
          className="btn btn-secondary btn-sm m-1">
            Generate
         </button>
        <span className="badge badge-primary m-2">The rolls result:</span>
        <span className="badge badge-primary m-2">{result}</span>
      </div>
    );
  }
}

export default DiceResult;
