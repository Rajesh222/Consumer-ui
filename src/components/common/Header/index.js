import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import config from '../../../config';
import Axios from 'axios';

class Header extends Component {
  handleLogOut() {
    const baseUrl =  config.baseUrl;
    const loginData = localStorage.getItem('loginData') && JSON.parse(localStorage.getItem('loginData'));
    const uid = loginData.userId;
    // localStorage.clear();
    // this.context.router.history.push('/login');
    Axios.put(`${baseUrl}${config.logOut}/${uid}`).then( (res) => {
      if(res) {
        localStorage.clear();
        this.context.router.history.push('/login');
      }
    }
    ).catch((error) => {
      console.log(error);
    });
  }
  render() {
    const loginData = localStorage.getItem('loginData') && JSON.parse(localStorage.getItem('loginData')) ;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
          { !loginData ?
            <div className="collapse navbar-collapse sign-in" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <button><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></button>
              <button><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></button>
            </ul>
          </div>: 
          <div className="sign-in">
            <button type= 'button' onClick={(e)=>{this.handleLogOut(e)}}>Log Out</button>
          </div>
          }
        </nav>
      </div>
    );
  }
}

export default Header;

Header.contextTypes = {
  router: PropTypes.object
};