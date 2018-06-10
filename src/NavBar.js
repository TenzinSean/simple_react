import React, { Component } from 'react';
import { Link } from 'react-router';


class NavBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'Welcome to Blog Time',
      title1: ['Blog Time','Blog Temp', 'བཀྲ་ཤིས་བདེ་ལེགས', '欢迎来到博客时间'],
      newTitle: '',
      logo: ''
    }
    this.getChange = this.getChange.bind(this);

  }

  getChange() {
    console.log('hi');
    var item3 = this.state.title1[Math.floor(Math.random() *this.state.title1.length)];
    this.setState({
      newTitle: item3
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(this.getChange.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {

    const colorImage = {
      width: "120px",
      marginTop: "-30px",
      marginLeft: "20px"
    }

    const colorP = {
      fontSize: "20px",
      marginTop: "-45px",
      marginLeft: "55px"
    }

    const headMiddle = {
      textAlign:"center",
      fontSize: "20px",
      postion:"absolute",
      top: "-20px",
      bottom: "70px"
    }
    return (
      <div>
          <section className="main-4">
            <div className="main-2">
            <ul>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/About">Quotes</Link></li>
              <li><Link to="/Home">Home</Link></li>
            </ul>
            <h2>Welcome {this.state.newTitle}</h2>
            <img src='http://www.eatlogos.com/art_logos/png/vector_art_gold_king_cap_logo.png' style={colorImage}  alt="logo" />
            <p style={colorP}>Karma</p>

          </div>
        </section>

      </div>
    );
  }
}


export default NavBar;
