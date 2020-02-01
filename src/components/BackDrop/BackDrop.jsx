import React, { Component } from "react";

import "./BackDrop.css";

const BackDrop = props => (
  <div className="BackDrop" onClick={props.click}></div>
);

export default BackDrop;
