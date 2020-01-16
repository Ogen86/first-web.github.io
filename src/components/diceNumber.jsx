import React, { Component } from "react";

class DiceNumber extends Component {
  state = {
    number: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">the dice's number :</span>
        <Input
          type={"number"}
          title={"enter a natural number"}
          value={this.state.number}
          placeholder={"enter a natural number"}
        />
      </React.Fragment>
    );
  }
}

export default DiceNumber;
