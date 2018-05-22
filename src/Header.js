import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <section className="heading">
          <h1>Welcome to Tenzin Page </h1>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>Images Gallery</h4>
            </div>
            <div className="col-md-3">
              <h4>Images Gallery</h4>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
