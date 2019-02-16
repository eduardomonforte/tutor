import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import NoMatch from './components/NoMatch/NoMatch';
import Terms from './components/Terms/Terms';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component ={Home} />
          <Route path="/Dashboard" component ={Dashboard} />
          <Route path="/NoMatch" component ={NoMatch} />
          <Route path="/Terms" component={Terms} />
        </div>
      </Router> 
    );
  }
}

export default App;
