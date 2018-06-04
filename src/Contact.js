import React, { Component, View } from 'react';
import SpotifyPlayer from 'react-spotify-player';

class Contact extends Component {

  Submit(){
    var quotes = [
      {
        title: 'Dalai lama',
        quotes: 'Happiness is key',
        review: '3 stars',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg'
      },
      {
        title: 'Donald Trup',
        quotes: 'Happiness is key',
        review: '3 stars',
        image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.240x240.jpg?v=1494613853'
      },
      {
        title: 'Pola',
        quotes: 'Happiness is key',
        review: '3 stars',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Dalailama1_20121014_4639.jpg'
      },

    ];

    let randomNumber = Math.floor((Math.random()*quotes.length));
    let randomPi = quotes[0][randomNumber];
    this.setState({quotes:randomPi});



    quotes.map((quote) => {console.log(quote)});
  }

  handleClick() {
      const min = 1;
      const max = 100;
      const rand = Math.floor(min + Math.random() * (max - min));
      this.setState({ random: this.state.random + rand });
  }

  constructor(props){
    super(props);
    this.Submit = this.Submit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      changeColor: 'red',
      random: 0,
      bgColor: [
        'https://static1.squarespace.com/static/56eb26fc044262b62aec29f7/56eb28bdab48de1f8fd7b52e/5942d56a1b10e318b8568a6b/1510298700360/Black_HeadShot.jpg?format=1500w',
        'blue',
        'yellow',
        'purple',
        'green',
        'black',
        'pink'
      ],
      selectedColor: '',
    };
  }

  componentDidMount() {
    this._getRandomColor()

  }

  _getRandomColor() {
    var item = this.state.bgColor[Math.floor(Math.random() *this.state.bgColor.length)];
    this.setState({
      selectedColor: item,
    })
  }

  render() {
    const size = {
      width: '100%',
      height: 300,
    };

    const view = 'list';
    const theme = 'black';

    return (
    <div>

        <section className="contac" style={{background: this.state.selectedColor}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <SpotifyPlayer
                    uri="spotify:album:1VAc77UvK5wj8ZSWCo3V2b"
                    size={size}
                    view={view}
                    theme={theme}
                />
                <button className="btn btn-primary lg-3" onClick={() => this._getRandomColor()}>Enter </button><br/>
            </div>
            </div>
          </div>
        </section>

    </div>
    );
  }
}

export default Contact;
