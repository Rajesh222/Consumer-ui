import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import Axios from 'axios';
import config from '../../../config';
import {  Navbar, Nav, NavItem, NavDropdown,MenuItem, NavbarBrand,Glyphicon } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
              <NavbarBrand>
                <img src={logo} className="img-resposive" width={100} height={50}/>
            </NavbarBrand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse className="navbar-collapse">
            <Nav>
              <NavItem eventKey={1} href="/"> Home </NavItem>
              <NavItem eventKey={2} href="/about">About Us</NavItem>
              <NavDropdown eventKey={6} title="Services" id="basic-nav-dropdown">
                  <MenuItem eventKey={6.1} href="/bus-booking">Bus Ticket</MenuItem>
                  <MenuItem eventKey={6.2} href="/cab-booking">Cab Booking</MenuItem>
                  <MenuItem eventKey={6.3} href="/hotel-booking">Hotal Booking</MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="/privacy">Privacy</NavItem>
              <NavItem eventKey={5} href="/faq"> FAQs </NavItem>  
              <NavItem eventKey={7} href="/contact-us"> Contact US </NavItem>  
          </Nav>
          { !loginData ?
           <Nav pullRight>
              <NavItem href="/login"> Login </NavItem>
              <NavItem href="/signup"> SignUp </NavItem>
          </Nav> :
          <Nav pullRight>
              <NavItem onClick={this.handleLogOut}> Logout </NavItem>
          </Nav>}
       </Navbar.Collapse>
       </Navbar>
    );
  }
}

export default Header;
Header.contextTypes = {
  router: PropTypes.object
};