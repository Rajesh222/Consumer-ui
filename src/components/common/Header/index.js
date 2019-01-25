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
      <nav className="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
                <a className="  " href="/"><img src={logo} className="img-resposive" /></a> 
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>                
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a className="nav-link" href="/">Home</a></li>
                  <li className="/about"><a className="nav-link" href="/">About</a></li>
                  <li className=""><a className="nav-link" href="/">Bus Booking</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Bus Ticket</a></li>
                      <li><a href="#">Cab Booking</a></li>
                      <li><a href="#">Hotal Booking</a></li>
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