import React, { Component } from "react";

class SuccessRate extends Component {
  state = {
    rate: 0
  };

  handleChange(event) {
    this.setState({ rate: event.target.value });
    this.props.handleChange(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">
          the success rate of the throw :
        </span>
        <input
          type="number"
          placeholder="please give a success rate"
          name="success rate"
          min={1}
          value={this.state.rate}
          onChange={this.handleChange.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default SuccessRate;
