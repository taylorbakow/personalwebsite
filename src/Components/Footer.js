import React, { Component } from 'react';
import footerimage from './../images/react.png';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2019 Taylor Bakow</li>
            <li>Built with <a title="Styleshout" href="http://www.reactjs.org/">React.js</a></li>
          </ul>

          <ul>
           <img src={footerimage} className="React-logo" alt="logo"/>
          </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
