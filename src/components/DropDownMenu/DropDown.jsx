import React, { Component } from "react";

import "./DropDown.css";

const DropDown = props => {
  let dropDownClasses = "DropDown";
  if (props.show) {
    dropDownClasses = "DropDown open";
  }
  return (
    <nav className={dropDownClasses}>
      <ul>
        <li>
          <a href="Dice_generation">dice generator</a>
        </li>
        <li>
          <a href="News">news</a>
        </li>
      </ul>
    </nav>
  );
};

export default DropDown;
