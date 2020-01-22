import React, { Component } from "react";

class DiceNumber extends Component {
  state = {
    number: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">the dice's number :</span>
        <button
          onClick={this.props.doDecrement()}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <span className="badge badge-primary m-2"> {this.state.number} </span>
        <button
          onClick={this.props.doIncrement()}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default DiceNumber;
