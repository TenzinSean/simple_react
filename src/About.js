import React, { Component } from 'react';
import NavBar from './NavBar';


class About extends Component {
  constructor(props){
    super(props)
    this.getTextChange = this.getTextChange.bind(this)

    this.state = {
      bg: [
        'https://www.dalailama.com/assets/pages/%C2%A9ManuelBauer_AgenturFocus_M_4272_15Anp.jpg',
        'http://videos.usatoday.net/Brightcove2/29906170001/2015/12/29906170001_4667010473001_mother-teresa-small.jpg',
        'https://cdn.vox-cdn.com/thumbor/DVN7eqE1o8HeBOP-jg15YHTsiLY=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg'

      ],
      selectImage: 'https://thumbs-prod.si-cdn.com/Ev1oXfQ0Ha3iUGSqYVyAQE7JA_Q=/800x600/filters:no_upscale():focal(-251x-319:-250x-318)/https://public-media.smithsonianmag.com/filer/bd/de/bddeee65-cc2b-4ec6-991e-77b61583ec75/2012preferred-portrait.jpg',
      textChange: ['Peace is forever', 'Life is good now', 'Come live with me'],
      textNew: '“The person who can freely acknowledge that life is full of difficulties can be free, because they are acknowledging the nature of life – that it can’t be much else.”'

    }
  }

  /*getImageOut(){
    console.log("Hello there");
    var item = this.state.bg[Math.floor(Math.random() *this.state.bg.length)];
    this.setState({
      selectImage: item
    })
  }*/

  getTextChange(){
    console.log("Hello there");
    var item = this.state.bg[Math.floor(Math.random() *this.state.bg.length)];
    var item1 = this.state.textChange[Math.floor(Math.random() *this.state.textChange.length)];

    this.setState({
      selectImage:item,
      textNew:item1

    })
  }






  render() {
    const objectStyle = {
      marginTop:"20px",
      textAlign:"center",
      marginBottom: "40px",
      fontFamily: "arial",
      fontSize: "30px"

    }

    const objPara = {
      marginTop: "35px",
      marginBottom: "40px",
      fontSize: "25px"
    }

    const imgObject = {
      width: "500px",
      borderRaduis: "30px",
      opacity: "none",
      borderRadius: "195px"

    }

    const buttonColor = {
      border: "1px solid #fff",
      backgroundColor: "#333"
    }
    return(
      <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 style={objectStyle}>Think Different</h1>
            <img src={this.state.selectImage} style={imgObject} alt="pic"/>
            <p style={objPara}>{this.state.textNew}</p>
            <button onClick={this.getTextChange} className="btn btn-primary" style={buttonColor}>Click now </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
