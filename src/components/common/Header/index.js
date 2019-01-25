import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import config from '../../../config';
import Axios from 'axios';
import { Navbar, Nav, NavItem, NavDropdown,MenuItem, Glyphicon } from 'react-bootstrap';
import logo from '../../../img/logo.png';


class Header extends React.Component {
 
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <div class="navbar-header">
                <a className="navbar-brand" href="/"><img src={logo} className="img-resposive" /></a> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="active"><a className="nav-link" href="/">Home</a></li>
                  <li className=""><a className="nav-link" href="/">About</a></li>
                  <li className=""><a className="nav-link" href="/">Bus Booking</a></li>
                  <li className="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>                  
                  <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true">Taxi Services<span class="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="economy-car-rental.html">Economy Car Rental</a></li>
                        <li><a href="suvmuv-cars.html">SUV/MUV Car Rental</a></li>
                        <li><a href="coach-rental.html">Coach Rental</a></li>
                      </ul>
                  </li>
                  <li className="active"><a href="contact.html">Contact Us</a></li>
                </ul>
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
            </div>
        </div>
      </nav>   
    );
  }
}

export default Header;
Header.contextTypes = {
  router: PropTypes.object
};