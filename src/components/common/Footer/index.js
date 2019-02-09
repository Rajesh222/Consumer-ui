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
          <Col xs={12} sm={4} md={3}>
                 <h4>Company</h4>
                 <Nav className="list-unstyled">
                   <NavItem href="/about">About Us</NavItem> 
                   <NavItem href="/careers">Career</NavItem>
                   <NavItem href="/contact-us">Contact Us</NavItem>
                   <NavItem href="/user-agreement">User Agreement</NavItem>
                   <NavItem href="/via-gst-details">Via GST Details</NavItem>                                      
                </Nav>
            </Col>
            <div className="clearfix visible-xs"></div>
            <Col xs={12} sm={4} md={3}>
                 <h4>Product Services</h4>
               <Nav className="list-unstyled">
                  <NavItem href="/bus-booking">Bus Ticket</NavItem>
                  <NavItem href="/cab-ticket">Cab Booking</NavItem>
                  <NavItem href="/hotel-booking">Hotals Booking</NavItem>
                  <NavItem href="https://www.icicilombard.com/" target="_blank">Agent Login</NavItem>
                </Nav>                
            </Col>
            <div className="clearfix visible-xs"></div>
            <Col xs={12} sm={4} md={3}>
                 <h4>Help & Support</h4>
                 <Nav className="list-unstyled">
                    <NavItem href="/">Home</NavItem>                    
                    <NavItem href="/paymentoption">Payment Option</NavItem>  
                    <NavItem href="/faq">FAQ</NavItem>
                    <NavItem href="/contact-us">Help</NavItem>
                 </Nav>                
            </Col>
            <Col xs={12} sm={4} md={3}>
                 <h4>Policies</h4>
                 <Nav className="list-unstyled">
                   <NavItem href="/privacypolicy">Privacy Policy</NavItem>
                   <NavItem href="/termscondition">Terms & Conditions</NavItem>
                   <NavItem href="/faq">Refund Policy</NavItem>                   
                 </Nav>                
            </Col>
           {/* <div className="clearfix visible-xs"></div>
            <Col xs={12} sm={4} md={3}>
                <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62212.873572167366!2d77.61016490000003!3d12.9523506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145e92832dbd%3A0x46c910f3a5135a4e!2sEzone!5e0!3m2!1sen!2sin!4v1493967009571" width={200} height={150} frameBorder={1} allowFullScreen={true}></iframe>
                 </div>
           </Col>   */  }       
        </Row>              
      </Grid>
      <section className="copyright-box">
            <div className="container">
               <Row>
                <p style={{textAlign:"center"}}><strong>Copyright &copy; {this.state.year}. All rights reserved</strong></p>
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