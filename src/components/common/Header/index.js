import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import Axios from 'axios';
import config from '../../../config';
import {  Navbar, Nav, NavItem, NavDropdown,MenuItem, Glyphicon } from 'react-bootstrap';
import logo from '../../../img/logo.png';

class Header extends React.Component {
 
  handleLogOut() {
    const baseUrl =  config.baseUrl;
    const loginData = localStorage.getItem('loginData') && JSON.parse(localStorage.getItem('loginData'));
    const uid = loginData.userId;
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
      <Navbar fixedTop inverse staticTop>
          <Navbar.Header>
              <Navbar.Brand>
              <a href="/">
                  <img src={logo} className="img-resposive" />
              </a>                  
            </Navbar.Brand>
             <Navbar.Toggle data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"/>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"> Home </NavItem>
            <NavItem eventKey={2} href="#">About Us</NavItem>
            <NavItem eventKey={3} href="#">Bus Booking</NavItem>
            <NavItem eventKey={4} href="#"> Taxi Service </NavItem>
            <NavItem eventKey={5} href="#"> FAQs </NavItem>  
            <NavDropdown eventKey={6} title="Services" id="basic-nav-dropdown">
                <MenuItem eventKey={6.1}>Bus Ticket</MenuItem>
                <MenuItem eventKey={6.2}>Cab Booking</MenuItem>
                <MenuItem eventKey={6.3}>Hotal Booking</MenuItem>
            </NavDropdown>
            <NavItem eventKey={7} href="#"> Contact US </NavItem>  
          </Nav>
       </Navbar.Collapse>
       </Navbar>
    );
  }
}

export default Header;
Header.contextTypes = {
  router: PropTypes.object
};