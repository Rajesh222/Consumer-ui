import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Col, Row, Button } from 'react-bootstrap';

class DebitCard extends Component {
  constructor(props) {
      super(props);
      this.handleDebitCard = this.handleDebitCard.bind(this);
  }   
  handleDebitCard (e) {
      e.preventDefault();
    console.log(e.target.value);
  }
  render() {
    return (
        <Grid>
            <Row>
               <div class="ccicons"> 
                  <a target="_blank" id="rupaySecurity" href="" className="c-icon4"> </a> 
                  <a target="_blank" id="visaSecurity" href="http://usa.visa.com/personal/security/vbv/how_it_works.html" title="Read more about Verified by Visa" className="c-icon1"> </a>
                  <a target="_blank" id="mastercardSecurity" href="http://www.mastercard.com/us/personal/en/cardholderservices/securecode/how_it_works.html" title="Read more about MasterCard SecureCode" className="c-icon2"> </a> 
                  <a target="_blank" id="amexSecurity" href="https://www212.americanexpress.com/dsmlive/dsm/int/gb/en/personal/membershipbenefits/safesecure/americanexpresssafekey_pr.do?vgnextoid=885a6690573ce210VgnVCM200000d0faad94RCRD" title="Read more about SafeKey" className="c-icon3"> </a> 
                </div>
            </Row>
            <Row>
                <Col xs={8}>
                    <input type="text" onChange={this.handleDebitCard} placeholder="Enter Card Number"
                     style={{margin:10, textAlign:"center"}}></input>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <input type="text" onChange={this.handleDebitCard} placeholder="MM" style={{margin:10, textAlign:"center"}}></input>
                </Col>
                <Col xs={2}>
                    <input type="text" onChange={this.handleDebitCard} placeholder="YYYY" style={{margin:10, textAlign:"center"}}></input>
                </Col>
                <Col xs={2}>
                    <input type="text" onChange={this.handleDebitCard} placeholder="CVV" style={{margin:10, textAlign:"center"}}></input>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <input type="text" onChange={this.handleDebitCard} placeholder="Card Holder Name"  style={{margin:10, textAlign:"center"}}></input>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                   <Button variant="primary" size="lg" className="paynow" style={{margin:10, textAlign:"center"}}> Pay now </Button>
                </Col>
            </Row>
        </Grid>
        
    );
  }
}
export default DebitCard;
