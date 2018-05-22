import React, { Component } from 'react';
import { Link } from 'react-router';


class NavBar extends Component {
  render() {
    return (
      <div>
        <section className="main-4">
          <div className="main-2">
            <h2>My-Blog</h2>
            <ul>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Home">Home</Link></li>
            </ul>
          <h1>Welcome to Blog Time </h1>
          </div>
        </section>
      </div>
    );
  }
}


export default NavBar;
