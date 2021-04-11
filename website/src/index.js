import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App';
import Question from './Question';
// import reportWebVitals from './reportWebVitals';

import './reset.css';
import './prism.okaidia.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router >
    <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/q/:id">
            <Question />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
