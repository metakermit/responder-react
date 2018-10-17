import React from 'react';
import { Link } from "react-router-dom";

import imageURL from '../img/responder.jpg';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for Responder</h1>
        <img src={imageURL} style={{ width: '200px' }}/>
        <ul>
          <li>Python</li>
          <li>Requests</li>
          <li>ASGI</li>
        </ul>
        <p><Link to="/about">About</Link></p>
        <p><a href="/admin">Admin</a></p>
      </div>
    );
  }
}

export default ShoppingList;
