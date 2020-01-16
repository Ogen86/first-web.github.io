import React, { Component } from "react";
import NumberFormat from "react-number-format";

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
        <NumberFormat
          value={this.state.rate}
          displayType={"text"}
          onValueChange={{ rate: this.state.rate }}
        />
      </React.Fragment>
    );
  }
}

export default SuccessRate;
