import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import config from '../../../config';
import Axios from 'axios';
import Footer from '../Footer'
import { Navbar, Nav, NavItem, Col, Row, NavbarBrand, Glyphicon } from 'react-bootstrap';
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
      <div>
        <Navbar fixedTop>
           <Navbar.Header>
             <Navbar.Brand>
                <a href="/">
                   <img src={logo} className="img-resposive" />
                </a>                  
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav className="nav navbar-nav">
                <NavItem eventKey={1} href="#"> Home </NavItem>
                <NavItem eventKey={2} href="#">Shop</NavItem>
                <NavItem eventKey={3} href="#"><Glyphicon glyph="shopping-cart" />{' Cart'}</NavItem>
                <NavItem eventKey={4} href="#"> About </NavItem>
                <NavItem eventKey={4} href="#"> FAQs </NavItem>  
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
        
      </div>     
    );
  }
}

export default Header;
Header.contextTypes = {
  router: PropTypes.object
};