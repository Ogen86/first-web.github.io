import React, { Component } from "react";

class DiceNumber extends Component {
  state = {
    number: 0
  };

  handleIncrement() {
    this.state.number({ number: this.state.number + 1 });
    this.props.handleNumbersetting(this.state.number);
  }

  handleDecrement() {
    if (this.state.number > 0)
      return this.state.number({ number: this.state.number - 1 });
    this.props.handleNumbersetting(this.state.number);
  }

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">the dice's number :</span>
        <button
          onClick={this.handleDecrement().bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <span className="badge badge-primary m-2"> {this.state.number} </span>
        <button
          onClick={this.handleIncrement().bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default DiceNumber;
