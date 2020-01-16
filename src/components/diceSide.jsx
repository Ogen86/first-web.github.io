import React, { Component } from "react";

class DiceSide extends Component {
  state = {
    diceSide: 6
  };

  handle4SideSetting = () => {
    this.setState({ diceSide: 4 });
  };

  handle6SideSetting = () => {
    this.setState({ diceSide: 6 });
  };

  handle8SideSetting = () => {
    this.setState({ diceSide: 8 });
  };

  handle10SideSetting = () => {
    this.setState({ diceSide: 10 });
  };

  handle12SideSetting = () => {
    this.setState({ diceSide: 12 });
  };

  handle20SideSetting = () => {
    this.setState({ diceSide: 20 });
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">
          The simulated dice side number:
        </span>
        <button
          onClick={this.handle4SideSetting}
          className="btn btn-secondary btn-sm m-1"
        >
          4 side
        </button>
        <button
          onClick={this.handle6SideSetting}
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
