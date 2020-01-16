import React, { Component } from "react";

class SuccessRate extends Component {
  state = {
    rate: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">
          the success rate of the throw :
        </span>
        <Input
          type={"number"}
          title={"enter a natural number"}
          value={this.state.rate}
          placeholder={"enter a natural number"}
        />
      </React.Fragment>
    );
  }
}

export default SuccessRate;
