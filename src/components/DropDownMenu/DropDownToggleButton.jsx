import React from "react";

import "./DropDownToggleButton.css";

const DropDownToggleButton = props => (
  <button className="toggleButton" onClick={props.click}>
    <div className="toggleButton_line" />
    <div className="toggleButton_line" />
    <div className="toggleButton_line" />
  </button>
);

export default DropDownToggleButton;
