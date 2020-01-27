import React, { Component } from "react";

class DiceSide extends Component {
  sideSet(number) {
    this.props.doSideSet(number);
  }

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">
          The simulated dice side number:
        </span>
        <h1 className="badge badge-primary m-2">{this.props.sides}</h1>
        <button
          onClick={() => this.sideSet(4)}
          className="btn btn-secondary btn-sm m-1"
        >
          4 side
        </button>
        <button
          onClick={() => this.sideSet(6)}
          className="btn btn-secondary btn-sm m-1"
        >
          6 side
        </button>
        <button
          onClick={() => this.sideSet(8)}
          className="btn btn-secondary btn-sm m-1"
        >
          8 side
        </button>
        <button
          onClick={() => this.sideSet(10)}
          className="btn btn-secondary btn-sm m-1"
        >
          10 side
        </button>
        <button
          onClick={() => this.sideSet(12)}
          className="btn btn-secondary btn-sm m-1"
        >
          12 side
        </button>
        <button
          onClick={() => this.sideSet(20)}
          className="btn btn-secondary btn-sm m-1"
        >
          20 side
        </button>
      </React.Fragment>
    );
  }
}

export default DiceSide;
