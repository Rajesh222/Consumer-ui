import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import { Grid, Row,Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Contact extends React.Component { 
    render () {                                   
        return (
          <Grid className="bg">            
            <Row>              
              <Col md={1}></Col>
              <Col md={5}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h4>Contact Us</h4>
                    <p>Use this contact form to send outsourcing request or feedback on this website.</p>
                  </div>
                  <div className="panel-body">
               <form onSubmit={this.handleSubmit} className="loginform">
                <FormGroup controlId="name">
                  <ControlLabel>Your Name </ControlLabel>
                  <FormControl autoFocus type="text" placeholder="Enter name"/>
                </FormGroup>
                <FormGroup controlId="email">
                  <ControlLabel>Email address</ControlLabel>
                  <FormControl autoFocus type="email" placeholder="Enter email" />
                </FormGroup>
                <FormGroup controlId="phone">
                  <ControlLabel>Your Mobile No</ControlLabel>
                  <FormControl autoFocus type="text" placeholder="Enter your phone no" />
                </FormGroup>
                <FormGroup controlId="subject">
                  <ControlLabel>Subject</ControlLabel>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option value="Web Design Development">Web Design Development</option>
                    <option value="Web Hosting">Web Hosting</option>
                    <option value="Domain Registration">Domain Registration</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Bulk SMS Services">Bulk SMS Services</option>
                    <option value="Software Development">Software Development</option>
                    <option value="MLM Software Development">MLM Software Development</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="iPhone Application">iPhone Application</option>
                    <option value="Android Application">Android Application</option>
                    <option value="API Mobile Recharge">API Mobile Recharge</option>
                    <option value="Feedback">Feedback</option>  
                    <option value="Complaints">Complaints</option>  
                    <option value="Marketing">Marketing</option>  
                    <option value="Others">Others</option> 	    
                  </select>
                </FormGroup>
                <FormGroup controlId="comment">
                  <ControlLabel>Comment</ControlLabel>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </FormGroup>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>
              </div>
            </Col>
            <Col md={5}>	
            <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h4>Help Desk</h4>
                  </div>
                  <div className="panel-body">	
              <h5>Call Center - 24/7</h5>
              <div className="r1"><p><span>Ph:</span> +91-8130787891 <br/></p></div>
              <h5>Head Office</h5>
              <div className="r1">
                <h5>Digital Bihar India Pvt. Ltd.</h5>
                <p>604 Sharhaul Near Pooja Medical <br/>
                  Gurgaon Hariyana, India - 201301<br/>
                <span>Ph:</span> +91-8130787891 <br/>
                <strong>email: </strong> support [AT] digitalbihar.com <br/>
                </p>
              </div>
              </div>
              </div>
            </Col>  
            <Col md={1}></Col>          
          </Row>
        </Grid>
        );
     }
}

export default Contact;
Contact.contextTypes = {
  router: PropTypes.object
};