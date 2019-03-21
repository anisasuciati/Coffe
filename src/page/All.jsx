import React, { Component } from "react";
import Navbars from "../document/Navbar";
import "../aset/style.css";
import Jumbotrons from "../document/Jumbotron";
import Cards from "../document/Card";
export default class All extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Jumbotrons />
        <Cards />
      </div>
    );
  }
}
