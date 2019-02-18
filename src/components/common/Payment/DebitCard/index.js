import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Col, Row, Button } from 'react-bootstrap';

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
                      value={this.state.cardNumber} ></input>
                </Col>
            </Row>
            <Row>
                <Col md={2} style={{margin:10, textAlign:"center"}}>
                    <input type="text" value={this.state.month} onChange={this.handleDebitCard} placeholder="MM" 
                    ></input>
                </Col>
                <Col md={2} style={{margin:10, textAlign:"center"}}>
                    <input type="text" value={this.state.year} onChange={this.handleDebitCard} placeholder="YYYY" 
                    ></input>
                </Col>
                <Col md={2} style={{margin:10, textAlign:"center"}}>
                    <input type="text" value={this.state.cvv} onChange={this.handleDebitCard} placeholder="CVV"
                     ></input>
                </Col>
            </Row>
            <Row>
                <Col md={8} style={{margin:10, textAlign:"center"}}>
                    <input type="text" value={this.state.cardHolderName} onChange={this.handleDebitCard} placeholder="Card Holder Name" 
                     ></input>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <button type="submit"  onClick={this.handleClick} style={{margin:10, textAlign:"center"}}>Pay</button>
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
