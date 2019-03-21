import React, { Component } from "react";
import Navbars from "../document/Navbar";
import "../aset/style.css";
import Jumbotrons from "../document/Jumbotron";
export default class About extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Jumbotrons />
      </div>
    );
  }
}
