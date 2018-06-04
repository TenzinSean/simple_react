import React, { Component } from 'react';


class About extends Component {
  constructor(props){
    super(props)
    this.getTextChange = this.getTextChange.bind(this)

    this.state = {
      bg: [
        'https://addicted2success.com/wp-content/uploads/2015/11/Dalai-Lama-Quotes.jpg',
        'https://cruxnow.com/wp-content/uploads/2016/08/Mother-Teresa-1024x731.jpg',
        'https://cdn.vox-cdn.com/thumbor/DVN7eqE1o8HeBOP-jg15YHTsiLY=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg'

      ],
      selectImage: 'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      textChange: ['Peace is forver', 'Life is good now', 'Come live with me'],
      textNew: 'hi'

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
      marginBottom: "40px"

    }

    const objPara = {
      marginTop: "20px",
      marginBottom: "40px",
      fontSize: "25px"
    }

    const imgObject = {
      width: "500px",
      borderRaduis: "30px",
      opacity: "0.85"
    }
    return(
      <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 style={objectStyle}>Beautiful Quotes</h1>
            <img src={this.state.selectImage} style={imgObject} alt="pic"/>
            <p style={objPara}>{this.state.textNew}</p>
            <button onClick={this.getTextChange} className="btn btn-primary">Click now </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
