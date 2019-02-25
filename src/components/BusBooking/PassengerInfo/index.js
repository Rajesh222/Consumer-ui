import React, { Component } from 'react';
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import "./index.scss";
import Traveller from '../PassengerInfo/TravellerForm';

export default class PassengerInfo extends Component {
   
    handlePayment = ()=> {
        console.log("continue................")
    }
    render () {
        return (
            <Grid>
                <Row>
                   <Col md={9} lg={9} xs={9} sm={12} className="passenger-info">
                       <Row className="header-tab">
                            <Col md={4}>
                                <h4>Traveller Information</h4>
                            </Col>
                        </Row>
                        <Traveller></Traveller>
                        <Traveller></Traveller>
                        <Row style={{marginLeft:0, marginTop: 20, fontWeight:"bolder"}}>
                           <h5 style={{fontWeight:"600"}}>Contact Details  <span style={{color:"#949494",fontSize:"12px",lineHeight:"12px"}}>(Your booking details will be sent to your email address and contact no. )</span></h5>
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
                            <Col md={12} lg={12} xs={12}>
                            <div className="radio">
                                <label> <input type="radio" name="optradio1" checked/>I agree to all the <a href="termscondition" style={{color:"deeppink"}} target="_blank" rel="noopener noreferrer"> Terms and Conditions</a></label>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} md={3} sm={12} lg={3}>
                      <div className="rowBox" style={{padding: "20px"}}>
                        <h4 style={{fontWeight:"400"}}>Fare Details</h4>
                        <div style={{borderBottom:"1px solid #ebebeb",padding:"15px 5px",fontSize:"14px",color:"#4a4a4a"}}>
                          <h4 style={{marginBottom:"7px", fontSize:"15px", fontWeight:"600 "}}>ONWARD FARE</h4>
                           <div style={{marginBottom:"14px"}}>Fare : <span style={{fontSize:"1.8rem",fontWeight:"600",float:"right",verticalAlign:"middle"}}><span>₹ </span>5000</span></div>
                        </div>
                        <div style={{borderBottom:"1px solid #ebebeb",padding:"15px 5px",fontSize:"14px",color:"#4a4a4a"}}>
                           <div style={{marginBottom:"14px"}}>Insurance <span style={{fontSize:"1.8rem",fontWeight:"600",float:"right",verticalAlign:"middle"}}><span>₹ </span>120</span></div>
                        </div>
                        <div style={{borderBottom:"1px solid #ebebeb",padding:"15px 5px",fontSize:"14px",color:"#4a4a4a",backgroundColor:"#f5f5f5"}}>
                           <div style={{marginBottom:"14px"}}>Total: <span style={{fontSize:"1.8rem",fontWeight:"600",float:"right",verticalAlign:"middle"}}><span>₹ </span>5000</span></div>
                        </div>
                        <div>
                        <Button className="submitBtn" style={{marginTop:"15px",width:"220px"}} onClick={this.handlePayment} type="submit">Processed to pay</Button>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Grid>
            
        )
    }
}
