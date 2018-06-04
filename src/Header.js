import React, { Component } from 'react';


const divStyle = {
  paddingBottom:'5px',
  marginTop:'20px',
  marginBottom: '10px',
  textDecoration:'underline'
};

class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: "Hobby",
      logo:['https://i.pinimg.com/originals/c6/36/1d/c6361d27406824e37b2f613c69537364.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqSfPFpXajDxbPdgDmPDNLzrdZvQrWjd9gjXIxoCETPl-bJGm',
          'https://i.pinimg.com/originals/d4/c1/7d/d4c17d48d9e0a5ac9986887163f435ec.jpg',
        'http://longwallpapers.com/Desktop-Wallpaper/travel-wallpaper-1080p-For-Desktop-Wallpaper.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93z5hGydj0p1_CRcM6hxHDJhGBviFnQsSk8yij_QInH8MDfhFCQ',
    'https://stmed.net/sites/default/files/book-wallpapers-28442-2893059.jpg']

    }
  }
  render() {


    return(
      <div>
        <section className="heading" style={divStyle}>
          <span><h2>{this.state.title}</h2></span>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <i className="fab fa-playstation"></i>
            </div>
            <div className="col-md-4">
              <i className="fab fa-spotify"></i>
            </div>
            <div className="col-md-4">
              <i className="fas fa-code"></i>
            </div>
            <div className="clearfix visible-md-block"></div>
            <div className="col-md-4 pi">
              <i className="fas fa-plane"></i>
            </div>
            <div className="col-md-4 pi">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="col-md-4 pi">
              <i className="fas fa-book"></i>
            </div>
          </div>
        </div>




        {/*<div className="container">
          <div class="row">
            <div class="col-6 col-md-8">
              <h1>Hi </h1>
            </div>
            <div class="col-6 col-md-8">
              <h1>Hi </h1>
            </div>
            <div class="col-6 col-md-8">
              <h1>Hi </h1>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Header;
