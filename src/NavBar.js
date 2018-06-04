import React, { Component } from 'react';
import { Link } from 'react-router';


class NavBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'Welcome to Blog Time',
      title1: ['Welcome to Blog Time','Bienvenue a Blog Temp', 'བཀྲ་ཤིས་བདེ་ལེགས', '欢迎来到博客时间'],
      newTitle: '',
      logo: 'My-Blog'
    }
    this.getChange = this.getChange.bind(this);

  }

  getChange() {
    console.log('hi');
    var item3 = this.state.title1[Math.floor(Math.random() *this.state.title1.length)];
    this.setState({
      newTitle: item3,
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(this.getChange.bind(this), 2000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <section className="main-4">
          <div className="main-2">
            <h2>{this.state.logo}</h2>
            <ul>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/About">Quotes</Link></li>
              <li><Link to="/Home">Home</Link></li>
            </ul>
          <h1>{this.state.newTitle}</h1>
          </div>
        </section>
      </div>
    );
  }
}


export default NavBar;
