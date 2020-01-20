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
        <input
          type="number"
          name="success rate"
          value={this.props.rate}
          onChange={{ rate: this.props.rate }}
        />
      </React.Fragment>
    );
  }
}

export default SuccessRate;
