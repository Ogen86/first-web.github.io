import React, { Component } from "react";
import DiceResult from "./diceResult";

class DiceSide extends Component {
  state = {
    sides: 0
  };

  handle4SideSetting() {
    {
      this.setState.sides = 4;
    }
  }

  handle6SideSetting() {
    {
      this.props.sides = 6;
    }
  }

  handle8SideSetting() {
    {
      this.props.sides = 8;
    }
  }

  handle10SideSetting() {
    {
      this.props.sides = 10;
    }
  }

  handle12SideSetting() {
    {
      this.props.sides = 12;
    }
  }

  handle20SideSetting() {
    {
      this.props.sides = 20;
    }
  }

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">
          The simulated dice side number:
        </span>
        <h1 className="badge badge-primary m-2">{this.state.sides}</h1>
        <button
          onClick={this.handle4SideSetting}
          className="btn btn-secondary btn-sm m-1"
        >
          4 side
        </button>
        <button
          onClick={this.handle4SideSetting(4)}
          className="btn btn-secondary btn-sm m-1"
        >
          6 side
        </button>
        <button
          onClick={this.handle8SideSetting}
          className="btn btn-secondary btn-sm m-1"
        >
          8 side
        </button>
        <button
          onClick={this.handle10SideSetting}
          className="btn btn-secondary btn-sm m-1"
        >
          10 side
        </button>
        <button
          onClick={this.handle12SideSetting}
          className="btn btn-secondary btn-sm m-1"
        >
          12 side
        </button>
        <button
          onClick={this.handle20SideSetting}
          className="btn btn-secondary btn-sm m-1"
        >
          20 side
        </button>
      </React.Fragment>
    );
  }
}

export default DiceSide;
