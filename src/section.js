import React , { Component } from 'react';
import Clock from 'react-live-clock';
import axios from 'axios';


class Section extends Component {
  constructor(props){
    super(props)
    let timeZone = [<Clock format={'HH:mm:ss'} ticking={true} timezone={'CH/Pacific'} />,
  <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />,
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={'FR/Pacific'}/>,
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'}/>,
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={'FR/Pacific'}/>]


    this.state = {
      date: new Date(),
      Zurich: timeZone[0],
      NewYork: timeZone[1],
      China: timeZone[2],
      Paris: timeZone[3],
      movies: []
    }
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=55660fd30d00cbc0e5baadf001998f28').then(res=> {
      console.log(res);
      this.setState({ movies: res[2]});
    });
  }

  /*  componentDidMount() {
      this.timerID =
        setInterval(
          () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);

    }

    tick() {
      this.setState({
        date: new Date()
      });
    }*/
  render() {

    const objectStyle = {
      color:"white",
      marginRight: "50px",
      marginTop: "10px",
      float:"right",
      fontSize: "35px",
      padding:"20px",
      background:"#333",
      borderRadius: "20px",

    }

    const objectTime = {
      marginTop:"40px"
    }
    return (
      <div>
      <section className="mi">
        <div className="container">
          <div className="row">
            <div className="col-md-8  middle">
                <img src="https://images.pexels.com/photos/97900/pexels-photo-97900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <h3>Tenzin Sean</h3>
          </div>
            <div className="col-md-4 pa">
              <div className="card">
                <div className="card-header">
                  Blog: Tenzin Sean
                </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>I am Tenzin Sean. I love coding and reading books.</p>
                  <footer className="blockquote-footer">Tenzin</footer>
                </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-4 p1" style={objectTime}>
          <h2>Zurich </h2>
          <span style={objectStyle}>{this.state.Zurich}</span>
        </div>
      <div className="col-md-4" style={objectTime}>
        <h2>New-York</h2>
        <span style={objectStyle}>{this.state.NewYork}</span>
      </div>
      <div className="col-md-4" style={objectTime}>
        <h2>Paris</h2>
        <span style={objectStyle}>{this.state.China}</span>
      </div>

    </div>
  </div>

  <div className="col-md-4">
    <ul>
      <li>{this.state.movies}</li>
    </ul>
  </div>

      </section>

      </div>
    );
  }
}


export default Section;
