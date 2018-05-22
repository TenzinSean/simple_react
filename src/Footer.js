import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div>
        <h1> this is footer page </h1>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default Footer;
