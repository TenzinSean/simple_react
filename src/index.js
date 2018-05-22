import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import About from './About';
import Contact from './Contact';
import DefaultPage from './DefaultPage';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/About" component={About}></Route>
    <Route path="/Contact" component={Contact}></Route>
    <Route path="*" component={DefaultPage}></Route>

  </Router>

,
  document.getElementById('root')
);
registerServiceWorker();
