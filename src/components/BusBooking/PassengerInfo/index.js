import React, { Component } from 'react';
import Select from 'react-select';
import { Grid, Row, Col } from 'react-bootstrap';

import "./index.scss";

export default class PassengerInfo extends Component {
   
    render () {
        return (
            <Grid>
                <Row>
                <Col md={9} className="passenger-info">
                        <Row className="header-tab">
                            <Col md={4}>
                                <h4>Passenger Information</h4>
                            </Col>
                        </Row>
                        <Row style={{marginTop:20}}> 
                            <Col md={4}>
                                <input placeholder="First Name" />
                            </Col>
                            <Col md={4}>
                                <input placeholder="Last Name" />
                            </Col>
                            <Col md={4}>
                                <input type="number" placeholder="Age" />
                            </Col>  
                        </Row>
                        <Row style={{marginLeft:0, marginTop: 20, fontWeight:"bolder"}}>
                            <h5>Contact Information</h5>
                            <h6>Your ticket and PNR Info will be sent to these.</h6>
                        </Row>
                        <Row style={{marginBottom:20}}> 
                            <Col md={4}>
                                <input type="email" placeholder="Email ID" />
                            </Col>
                            <Col md={4}>
                                <input type="number" placeholder="Mobile Number" />
                            </Col> 
                        </Row>
                    </Col>
                    
                    <Col md={9} className="passenger-info">
                        <Row className="header-tab">
                            <Col md={4}>
                                <h4>Passenger Information</h4>
                            </Col>
                        </Row>
                        <Row style={{marginTop:20}}> 
                            <Col md={4}>
                                <input placeholder="First Name" />
                            </Col>
                            <Col md={4}>
                                <input placeholder="Last Name" />
                            </Col>
                            <Col md={4}>
                                <input type="number" placeholder="Age" />
                            </Col>  
                        </Row>
                        <Row style={{marginLeft:0, marginTop: 20, fontWeight:"bolder"}}>
                            <h5>Contact Information</h5>
                            <h6>Your ticket and PNR Info will be sent to these.</h6>
                        </Row>
                        <Row style={{marginBottom:20}}> 
                            <Col md={4}>
                                <input type="email" placeholder="Email ID" />
                            </Col>
                            <Col md={4}>
                                <input type="number" placeholder="Mobile Number" />
                            </Col> 
                        </Row>
                    </Col>
                    <Col md={3}>
                      <Row>
                          <h6>Onward Journey Details</h6>
                          <Col xs={12}>Delhi to Patna</Col>
                          <p>on  21 February, 2019 at  21:00</p>
                          <p>Boarding Point: <strong> Akshardham metro statos </strong></p>
                      </Row>
                    </Col>
                </Row>
            </Grid>
            
        )
    }
}
