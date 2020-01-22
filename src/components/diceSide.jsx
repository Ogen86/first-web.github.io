import React, { Component } from "react";

class DiceSide extends Component {
  doSideSet(number) {
    this.props.handleSideSetting({ number });
  }

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">
          The simulated dice side number:
        </span>
        <h1 className="badge badge-primary m-2">{this.props.sides}</h1>
        <button
          onClick={this.doSideSet(4).bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          4 side
        </button>
        <button
          onClick={this.doSideSet(6).bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          6 side
        </button>
        <button
          onClick={this.doSideSet(8).bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          8 side
        </button>
        <button
          onClick={this.doSideSet(10).bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          10 side
        </button>
        <button
          onClick={this.doSideSet(12).bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          12 side
        </button>
        <button
          onClick={this.doSideSet(20).bind(this)}
          className="btn btn-secondary btn-sm m-1"
        >
          20 side
        </button>
      </React.Fragment>
    );
  }
}

export default DiceSide;
