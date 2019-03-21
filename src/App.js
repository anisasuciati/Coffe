import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import All from "./page/All";
import Art from "./page/Art";
import Creamylatte from "./page/Creamylatte";
import Hitam from "./page/Hitam";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/all" component={All} />
          <Route path="/about/art" exact component={Art} />
          <Route path="/about/creamylatte" exact component={Creamylatte} />
          <Route path="/about/hitam" exact component={Hitam} />
        </div>
      </Router>
    );
  }
}
export default App;
