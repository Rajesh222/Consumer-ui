import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import Axios from 'axios';
import config from '../../../config';
import {  Navbar, Nav, NavItem, NavDropdown,MenuItem, NavbarBrand } from 'react-bootstrap';
import Logo from '../../../img/logo.png';

class Header extends React.Component {
  constructor (props, context) {
    super(props, context);
   // this.handleLogOut = this.handleLogOut.bind(this);
}
  handleLogOut = ()=> {
    const baseUrl =  config.baseUrl;
    const loginData = localStorage.getItem('loginData') && JSON.parse(localStorage.getItem('loginData'));
    const uid = loginData.userId;
    Axios.put(`${baseUrl}${config.logOut}/${uid}`).then( (res) => {
      if(1) {
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
      <Navbar className="mynav">
          <Navbar.Header>
              <NavbarBrand>
                <img src={Logo} className="img-resposive" width={200} height={300} style={{height:70}}/>
            </NavbarBrand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/"> Home </NavItem>
              <NavItem eventKey={2} href="/bus-booking">Bus Ticket</NavItem>
              <NavItem eventKey={2} href="/ticket-status">Print Ticket</NavItem>
              <NavItem eventKey={2} href="/cancel-ticket">Cancel Ticket</NavItem>
              <NavDropdown eventKey={6} title="Services" id="id" className="navDropDown">
                  <MenuItem eventKey={6.1} href="/contact-us">Software Development</MenuItem>
                  <MenuItem eventKey={6.2} href="/contact-us">Web Design Development</MenuItem>
                  <MenuItem eventKey={6.3} href="/contact-us">iPhone Application</MenuItem>
                  <MenuItem eventKey={6.3} href="/contact-us">Web Hosting</MenuItem>
                  <MenuItem eventKey={6.3} href="/contact-us">Domain Registration</MenuItem>
                  <MenuItem eventKey={6.3} href="/contact-us">Bulk SMS Services</MenuItem>
                  <MenuItem eventKey={6.3} href="/contact-us">Android Application</MenuItem>
              </NavDropdown>
              {/* <NavItem eventKey={3} href="/privacypolicy">Privacy</NavItem>
              <NavItem eventKey={5} href="/faq"> FAQs </NavItem>  
              <NavItem eventKey={7} href="/contact-us"> Contact US </NavItem>  */}
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