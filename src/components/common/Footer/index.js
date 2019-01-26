import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import config from '../../../config';
import { Grid, Nav, NavItem } from 'react-bootstrap';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }
  
   render(){ return (
    <footer>
       <div className="container">
          <div className="back-to-top">
               <a href="javascript:void(0)">Back to Top <i className="icon-more-arow ic-box-top"></i></a>
          </div>
      </div>
       <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
                 <h4>Get in Touch</h4>
                 <p>Tell us what you think</p>
                 <p>#414, 3rd Floor, 4th Block,17th Main, 100 Feet Road Delhi 110096</p>
                 <p>Phone number 08130787891</p>
                 <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62212.873572167366!2d77.61016490000003!3d12.9523506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145e92832dbd%3A0x46c910f3a5135a4e!2sEzone!5e0!3m2!1sen!2sin!4v1493967009571" width={200} height={200} frameBorder={1} allowFullScreen={true}></iframe>
                 </div>
            </div>
            <div className="clearfix visible-xs"></div>
            <div className="col-xs-12 col-sm-4 col-md-4">
                <h4>Quick Links</h4>
               <ul className="list-unstyled quick-links">
                  <li><a href="">About</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Offers</a></li>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="clearfix visible-xs"></div>
            <div className="col-xs-12 col-sm-4 col-md-4">
                 <h4>Services</h4>
                 <ul className="list-unstyled quick-links">
                  <li><a href="">Bus Ticket</a></li>
                  <li><a href="">Cab Booking</a></li>
                  <li><a href="">Hotals Booking</a></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
            </div>
            </div>       
      </div>
      <div className="sub-footer">
         <div className="container">
            <div className="row">
              <div className="col-sm-8">
              <p>Copyright &copy; {this.state.year}. All rights reserved</p>
              </div>
            </div>
        </div>
      </div>
    </footer>
    );
   }
}
export default Footer;
Footer.contextTypes = {
  router: PropTypes.object
};