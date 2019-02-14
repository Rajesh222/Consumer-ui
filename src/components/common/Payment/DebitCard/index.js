import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Col, Row } from 'react-bootstrap';

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
        </Grid>
        
    );
  }
}
export default DebitCard;
