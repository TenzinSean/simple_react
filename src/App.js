import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router';
import Section from './section';
import Gallery from './gallery';
import Contact from './Contact';
import Film from './film';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header />
        <Section />
        <Gallery />
        <Contact />
        <Footer msg="Hello there"/>
        <Film />
      </div>
    );
  }
}




export default App;
