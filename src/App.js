import React, { Component } from "react";
import "./App.css";
import Home from "./screens/home/Home";
import Navbar from "./components/Navbar";
import About from "./screens/about/About";
import NotFound from "./screens/not-found/notFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick;
    this.handleOutsideClick = this.handleOutsideClick;

    this.state = {
      popupVisible: false
    };
  }

  handleClick = () => {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/About">
              <About
                handleClick={this.handleClick}
                state={this.state}
                node={node => {
                  this.node = node;
                }}
              />
            </Route>

            <Route exact path="/">
              <Home
                handleClick={this.handleClick}
                state={this.state}
                node={node => {
                  this.node = node;
                }}
              />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// DEntro home vamos a tener dos rutas,
