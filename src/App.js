import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header />
        <Footer msg="Hello there"/>
      </div>
    );
  }
}




export default App;
