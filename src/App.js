import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Contact' component={Contact} />
            <Route path='/About' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
