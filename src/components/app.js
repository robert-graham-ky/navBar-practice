import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation-container";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer></NavigationContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
