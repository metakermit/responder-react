import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p>This is the about page.</p>
        <p><Link to="/">Home</Link></p>
      </div>
    );
  }
}

export default About;
