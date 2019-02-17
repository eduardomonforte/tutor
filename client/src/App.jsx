import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import NoMatch from './components/NoMatch/NoMatch';
import Terms from './components/Terms/Terms';
import PropTypes from 'prop-types';

// Main App class

class App extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/nomatch" component={NoMatch} />
          <Route path="/terms" component={Terms} />
        </div>
      </Router>
    );
  }
}

export default App;
