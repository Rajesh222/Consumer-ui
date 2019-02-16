import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Button, Col, Row } from 'react-bootstrap';

class CreditCard extends Component {

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
            <Row>
                <Col xs={2}>
                   <Button variant="primary" size="lg" className="paynow" style={{margin:10, textAlign:"center"}}> Pay now </Button>
                </Col>
            </Row>
        </Grid>
        )
    };
}
export default CreditCard;
CreditCard.contextTypes = {
  router: PropTypes.object
};
