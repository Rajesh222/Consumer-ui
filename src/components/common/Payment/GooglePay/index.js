import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';

class GooglePay extends Component {

    render() {
        return (
            <Grid>
                <Row>
                   <Col xs={8} md={8} style={{textAlign:"center"}}> 
                      <img src="https://static.abhibus.com/img/gpay/gpay-color-128.png" alt="TEZ"></img>               
                  </Col>
                </Row>
                <Row className="gpayrow">
                    <Col xs={3}> 
                        Enter your Google Pay mobile number:</Col>
                    <Col xs={8}>
                       <input type="text" name="gpay_mobileno" value="" placeholder="Google Pay mobile number" className="gpayfield" maxLength="10"/>
                    </Col>
                    <Col xs={12}>
                    <h3>Performing a Google Pay</h3>
                    <ul><li>To check your Google Pay mobile number, click on your name on the top left in the Google Pay app</li></ul>
        
                    </Col>
                </Row>
                
            </Grid>
        )
    };
}

export default GooglePay;
GooglePay.contextTypes = {
  router: PropTypes.object
};
