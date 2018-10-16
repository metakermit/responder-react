import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ShoppingList from './ShoppingList';
import About from './About';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ShoppingList} />
      <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('root'));
