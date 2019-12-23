import React from 'react';

import Layout from './components/Main/index';
import Home from './components/Home/index';


import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import './App.css';

const App: React.FC = () => {
return (
  <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/layout">Layout</Link>
            </li>
          </ul>
        </div>
      </nav>
    <div className="container mt-4">

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/layout" exact component={Layout} />
      </Switch>
    </div>
  </Router>
);
}

export default App;
