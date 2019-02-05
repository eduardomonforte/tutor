import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component ={Home} />
          <Route path="/Dashboard" component ={Dashboard} />
        </div>
      </Router> 
    );
  }
}

export default App;
