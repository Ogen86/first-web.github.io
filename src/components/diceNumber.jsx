import React, { Component } from "react";

class DiceNumber extends Component {
  state = {
    number: 0
  };

  handleIncrement() {
    this.props.number({ number: this.props.number + 1 });
  }

  handleDecrement() {
    if (this.state.number > 0)
      return this.props.number({ number: this.props.number - 1 });
  }

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">the dice's number :</span>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <span className="badge badge-primary m-2"> {this.state.number} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default DiceNumber;
