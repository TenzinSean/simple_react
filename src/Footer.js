import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div>
        <div className="content">
        </div>
            <footer id="myFooter">
                <div className="container">
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Terms of service</a></li>
                    </ul>
                <p className="footer-copyright">© 2016 Copyright Text</p>
                </div>
                <div className="footer-social">
                    <a href="#" className="social-icons"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="social-icons"><i className="fab fa-google"></i></a>
                    <a href="#" className="social-icons"><i className="fab fa-instagram"></i></a>
                </div>
            </footer>
      </div>
    );
  }
}

export default Footer;
