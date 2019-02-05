import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Autho from './components/Autho/Autho';
import Dashboard from './components/Dashboard/Dashboard';
import NoMatch from './components/NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component ={Home} />
          <Route path ="/Autho" component ={Autho} />
          <Route path="/Dashboard" component ={Dashboard} />
          <Route path="/NoMatch" component ={NoMatch} />
        </div>
      </Router> 
    );
  }
}

export default App;
