import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import config from '../../../config';
import Axios from 'axios';
import Footer from '../Footer'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
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
       <Navbar>
           <Navbar.Header>
             <Navbar.Brand>
                <a href="/">
                   <img src={logo} className="img-resposive" />
                </a>                  
              </Navbar.Brand>
              <Navbar.Toggle data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" data-target="#navbar" aria-expanded="false" aria-controls="navbar"/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem className="active" eventKey={1} href="#"> Home </NavItem>
                <NavItem className="active" eventKey={2} href="#">About Us</NavItem>
                <NavItem  className="active" eventKey={3} href="#">Bus Booking</NavItem>
                <NavItem  className="active" eventKey={4} href="#"> Taxi Service </NavItem>
                <NavItem className="active" eventKey={5} href="#"> FAQs </NavItem>  
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
                <NavItem className="active" eventKey={5} href="#"> Contact US </NavItem>  
              </Nav>
            </Navbar.Collapse>
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
          </Navbar>
      
    );
  }
}

export default Header;
Header.contextTypes = {
  router: PropTypes.object
};