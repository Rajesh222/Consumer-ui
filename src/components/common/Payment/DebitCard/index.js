import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Col, Row } from 'react-bootstrap';

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
        <div>
            <Row>
                <Col md={8} style={{margin:10, textAlign:"center"}}>
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
        </div>
        
    );
  }
}
export default DebitCard;
