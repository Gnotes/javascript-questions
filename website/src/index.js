import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch,Route } from "react-router-dom";

import App from './App';
import Home from './Home';
import Question from './Question';

import './reset.css';
import './prism.okaidia.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route path="/q/:id">
            <Question />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

