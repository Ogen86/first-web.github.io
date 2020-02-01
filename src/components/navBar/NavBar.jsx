import React, { Component } from "react";

import "./NavBar.css";
import DropDownToggleButton from "../DropDownMenu/DropDownToggleButton";

const NavBar = props => (
  <header className="NavBar">
    <nav className="NavBar_navigation">
      <div className="ToggleButton">
        <DropDownToggleButton click={props.dropClickHandler} />
      </div>
      <div className="NavBar_Logo">
        <a href="Home">Logo </a>
      </div>
      <div className="spacer" />
      <div className="NavBar_navigation_items">
        <ul>
          <li>
            <a href="Dice_generation">dice generation</a>
          </li>
          <li>
            <a href="News">news</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
