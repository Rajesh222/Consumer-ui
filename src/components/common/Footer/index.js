import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import { Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }
  
   render(){ return (
    <footer className="myfooter">
       <Grid>
          <Row>
          <Col xs={12} sm={3} md={3}>
                 <h4 className="heading">Discover</h4>
                 <Nav className="list-unstyled">
                   <NavItem href="/about">About Us</NavItem> 
                   <NavItem href="/careers">Career</NavItem>
                   <NavItem href="/contact-us">Contact Us</NavItem>
                   <NavItem href="/user-agreement">User Agreement</NavItem>
                   <NavItem href="/via-gst-details">Via GST Details</NavItem>                                      
                </Nav>
            </Col>
            <Col xs={12} sm={3} md={3}>
                 <h4 className="heading">Product Services</h4>
               <Nav className="list-unstyled">
                  <NavItem href="/bus-booking">Bus Ticket</NavItem>
                  <NavItem href="/ticket-status">Print Ticket</NavItem>
                  <NavItem href="/cancel-ticket">Cancel Ticket</NavItem>
                  <NavItem href="#" target="_blank">Agent Login</NavItem>
                </Nav>                
            </Col>
            <div className="clearfix visible-xs"></div>
            <Col xs={12} sm={4} md={3}>
                 <h4 className="heading">Help & Support</h4>
                 <Nav className="list-unstyled">
                    <NavItem href="/">Home</NavItem>                    
                    <NavItem href="/paymentoption">Payment Option</NavItem>  
                    <NavItem href="/faq">FAQ</NavItem>
                    <NavItem href="/contact-us">Help</NavItem>
                 </Nav>                
            </Col>
            <Col xs={12} sm={4} md={3}>
                 <h4 className="heading">Policies</h4>
                 <Nav className="list-unstyled">
                   <NavItem href="/privacypolicy">Privacy Policy</NavItem>
                   <NavItem href="/termscondition">Terms & Conditions</NavItem>
                   <NavItem href="/faq">Refund Policy</NavItem> 
                   <NavItem href="https://www.icicilombard.com/" target="_blank">Insurance Partner</NavItem>                  
                 </Nav>                
            </Col>
               
        </Row>              
      </Grid>
      <section className="copyright-box">
            <div className="container">
               <Row>
                <p style={{textAlign:"center"}}><strong>Copyright &copy; {this.state.year} Digital Bihar Pvt Ltd. All rights reserved</strong></p>
             </Row>
            </div>
      </section>      
    </footer>
    );
   }
}
export default Footer;
Footer.contextTypes = {
  router: PropTypes.object
};