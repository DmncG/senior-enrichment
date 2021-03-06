'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import {BrowserRouter as Router} from 'react-router-dom';

render (
  <Provider store={store}>
    <Router>
    <Home/>
    </Router>
  </Provider>,
  document.getElementById('main')
)