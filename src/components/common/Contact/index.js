import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import { Grid, Row,Col,Label, Input,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Contact extends React.Component { 
    render () {                                   
        return (
          <Grid>
            <Row>
              <Col md={1}></Col>
              <Col md={6}>
              <form onSubmit={this.handleSubmit} className="loginform">
		            <h2>Contact Us</h2>
                <p>Use this contact form to send outsourcing request or feedback on this website.</p>
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
                    <option value="#">Seelct purpose</option>
                    <option value="Feedback">Feedback</option>  
                    <option value="Complaints">Complaints</option>  
                    <option value="Marketing">Marketing</option>  
                    <option value="Agency Enquiry">Agency Enquiry</option>  
                    <option value="Website Designing & Development">Website Designing & Development  </option>  
                    <option value="Software Development">Software Development</option>
                    <option value="Web Hosting">Web Hosting</option>
                    <option value="Others">Others</option>
                  </select>
                </FormGroup>
                <FormGroup controlId="comment">
                  <ControlLabel>Comment</ControlLabel>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </FormGroup>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </Col>
            <Col md={1}></Col>
            <Col md={3}>		
              <h3>Call Center - 24/7</h3>
              <div className="r1"><p><span>Ph:</span> +91-8130787891 <br/></p></div>
              <h3>Head Office</h3>
              <div className="r1">
                <h4>Digital Bihar India Pvt. Ltd.</h4>
                <p>604 Sharhaul Near Pooja Medical <br/>
                  Gurgaon Hariyana, India - 201301<br/>
                <span>Ph:</span> +91-8130787891 <br/>
                <strong>email: </strong> support [AT] digitalbihar.com <br/>
                </p>
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