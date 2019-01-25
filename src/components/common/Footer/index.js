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
      <Grid>
        <div className="row">
            <div className="col-sm-4 col-md-4">
                 <h4>Contact Us</h4>
            </div>
            <div className="col-sm-8 col-md-4">
                <h4>Quick Links</h4>
            </div>
            <div className="col-sm-3 col-md-4">
                 <h4>Taxi Services</h4>
            </div>
        </div>       
      </Grid>
      <div className="sub-footer">
         <div className="container">
            <div className="row">
              <p>Copyright &copy; {this.state.year}. All rights reserved</p>
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