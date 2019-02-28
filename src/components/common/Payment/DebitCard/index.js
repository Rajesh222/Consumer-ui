import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Form, Col, Row, Button } from 'react-bootstrap';

class DebitCard extends Component {
  constructor(props) {
      super(props);
      this.state={
        cardNumber: '',
        month: '',
        year: '',
        cvv: '',
        cardHolderName: ''
      }
      this.handleDebitCard = this.handleDebitCard.bind(this);
      this.handleMonth = this.handleMonth.bind(this);
      this.handleYear = this.handleYear.bind(this);
      this.handleCvv = this.handleCvv.bind(this);
      this.handleCardHolderName = this.handleCardHolderName.bind(this);
      
  }   
  handleDebitCard (e) {
    e.preventDefault();
    this.setState({cardNumber: e.target.value})
  }
  handleMonth (e) {
    e.preventDefault();
    this.setState({month: e.target.value})
  }
  handleYear (e) {
    e.preventDefault();
    this.setState({year: e.target.value})
  }

  handleCvv (e) {
    e.preventDefault();
    this.setState({cvv: e.target.value})
  }
  handleCardHolderName (e) {
    e.preventDefault();
    this.setState({cardHolderName: e.target.value})
  }
  render() {
    return (
      <>
          <Row>
              <Col md={5} lg={5} sm={5} xs={5}>
                  <input type="text" onChange={this.handleDebitCard} placeholder="Enter Card Number"
                  style={{margin:10, textAlign:"center"}}></input>
              </Col>
              <Col md={7} lg={7} sm={7} xs={7}>
                <div class="ccicons"> 
                  <a target="_blank" id="rupaySecurity" href="" className="c-icon4"> </a> 
                  <a target="_blank" id="visaSecurity" href="http://usa.visa.com/personal/security/vbv/how_it_works.html" title="Read more about Verified by Visa" className="c-icon1"> </a>
                  <a target="_blank" id="mastercardSecurity" href="http://www.mastercard.com/us/personal/en/cardholderservices/securecode/how_it_works.html" title="Read more about MasterCard SecureCode" className="c-icon2"> </a> 
                  <a target="_blank" id="amexSecurity" href="https://www212.americanexpress.com/dsmlive/dsm/int/gb/en/personal/membershipbenefits/safesecure/americanexpresssafekey_pr.do?vgnextoid=885a6690573ce210VgnVCM200000d0faad94RCRD" title="Read more about SafeKey" className="c-icon3"> </a> 
                </div>
              </Col>
          </Row>
          <Row>
              <Col md={4} lg={4} sm={4} xs={4}>
                  <input type="text" onChange={this.handleDebitCard} placeholder="MM" style={{margin:10, textAlign:"center", width: "-webkit-fill-available"}}></input>
              </Col>
              <Col md={4} lg={4} sm={4} xs={4}>
                  <input type="text" onChange={this.handleDebitCard} placeholder="YYYY" style={{margin:10, textAlign:"center",width: "-webkit-fill-available"}}></input>
              </Col>
              <Col md={4} lg={4} sm={4} xs={4}>
                  <input type="text" onChange={this.handleDebitCard} placeholder="CVV" style={{margin:10, textAlign:"center",width: "-webkit-fill-available"}}></input>
              </Col>
          </Row>
          <Row>
              <Col md={12} lg={12} sm={12} xs={12}>
                  <input type="text" onChange={this.handleDebitCard} placeholder="Card Holder Name"  style={{margin:10, textAlign:"center",width: "-webkit-fill-available"}}></input>
              </Col>
          </Row>
          <Row>
              <Col md={12} lg={12} sm={12} xs={12}>
                <Button variant="primary" size="lg" className="paynow" style={{margin:10, textAlign:"center"}}> Pay now </Button>
              </Col>
          </Row>
          </>
    );
  }
}
export default DebitCard;
