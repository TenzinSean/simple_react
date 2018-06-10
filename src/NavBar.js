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

    const header = {
      position: "absolute",
      left: "30px",
      right: "1px",
      top: "190px",
      fontSize: "30px"
    }

    const link1 = {
      paddingTop: "60px",
      paddingRight: "20px"
    }

    const headerone = {
      marginTop: "-10px"
    }
    return (
      <div>
          <section className="main-4">
            <div className="main-2">
            <ul style={link1}>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/About">Quotes</Link></li>
              <li><Link to="/Home">Home</Link></li>
            </ul>
            <div className="container">
              <div className="row">
                <div className="col order-12" style={header}>
                  <h2>Welcome {this.state.newTitle} </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}


export default NavBar;
