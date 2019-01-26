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
            <NavItem eventKey={1} href="/"> Home </NavItem>
            <NavItem eventKey={2} href="about">About Us</NavItem>
            <NavDropdown eventKey={6} title="Services" id="basic-nav-dropdown">
                <MenuItem eventKey={6.1} href="bus-booking">Bus Ticket</MenuItem>
                <MenuItem eventKey={6.2} href="cab-booking">Cab Booking</MenuItem>
                <MenuItem eventKey={6.3} href="hotel-booking">Hotal Booking</MenuItem>
            </NavDropdown>
            <NavItem eventKey={3} href="privacy">Privacy</NavItem>
            <NavItem eventKey={4} href="/terms"> Term & Condition </NavItem>
            <NavItem eventKey={5} href="/faq"> FAQs </NavItem>  
            <NavItem eventKey={7} href="contact-us"> Contact US </NavItem>  
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