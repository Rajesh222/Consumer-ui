import React, { Component } from 'react';
import Select from 'react-select';
import { Grid, Row, Col, Form } from 'react-bootstrap';
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
                            <Col md={4} lg={4} xs={4}>
                                <input placeholder="First Name" class="form-control input-sm"/>
                            </Col>
                            <Col md={3} lg={3} xs={3}>
                                <input placeholder="Last Name" class="form-control input-sm" />
                            </Col>
                            <Col md={3} lg={3} xs={3}>
                                <input type="number" placeholder="Age" class="form-control input-sm" />
                            </Col>  
                            <Col md={2} lg={2} xs={2}>
                                <select name="" className="form-control input-sm" id="sel1">
                                    <option value="">Gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="T">Transgender</option>
                                </select>
                            </Col>
                        </Row>
                        <Row style={{marginLeft:0, marginTop: 20, fontWeight:"bolder"}}>
                           <h5 style={{fontWeight:"600"}}>Contact Details  <span style={{color:"#949494",fontSize:"12px",lineHeight:"12px",backgroundColor:"#fff181"}}>(Your booking details will be sent to your email address and contact no. )</span></h5>
                        </Row>
                        <Row style={{marginBottom:20}}> 
                            <Col md={4}>
                                <input type="email" placeholder="Email ID" class="form-control input-sm"/>
                            </Col>
                            <Col md={4}>
                                <input type="number" placeholder="Mobile Number" class="form-control input-sm"/>
                            </Col> 
                        </Row>
                        <Row>
                            <Col md={12} lg={12} xs={12}>
                            <div className="radio">
                                <label> <input type="radio" name="optradio" checked/>Yes, secure my trip with insurance. I agree to the 
                                  <a style={{color:"deeppink"}} href="insurance-terms.html" target="_blank"> Terms and Conditions</a></label>
                            </div>
                                 
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
