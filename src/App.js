import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
