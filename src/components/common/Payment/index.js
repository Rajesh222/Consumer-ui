import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import DebitCard from './DebitCard';
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Credit from './CreditCard';
import GooglePay from './GooglePay';
import NetBanking from './NetBanking';
import OthersWallets from './OthersWallets';
import UPI from './UPI';

class Payment extends Component {
        
  render() {
    return (
        <Grid className="paymentSection">
        <div className="payment-title">
             
            <Row>
                <Col xs={5}>
                PAYMENT OPTIONS
                </Col>
                <Col xs={7}>
                <i className="fa fa-lock" aria-hidden="true" style={{fontSize:40}}> <span style={{fontSize:14}}>Safe &amp; secure Online Payments</span></i>
                </Col>
            </Row>         
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="debitcard">
         <Row>
            <Col sm={2} xs={2} className="paymentmenu">
                <Nav variant="pills" className="flex-column">
                    <NavItem eventKey="debitcard">
                        Debit Card
                    </NavItem>
                    <NavItem eventKey="creditcard">
                        Credit Card
                    </NavItem>
                    <NavItem eventKey="netbanking">
                        Net Banking
                    </NavItem>
                   <NavItem eventKey="googlepay">
                        Google Pay
                    </NavItem>
                    {/**  <NavItem eventKey="phonepay">
                        Phone Pay
                    </NavItem>
                    <NavItem eventKey="otherwallet">
                        Other Wallets
                    </NavItem>*/}
                    <NavItem eventKey="upi">
                        UPI
                    </NavItem>
                </Nav>
            </Col>
            <Col sm={5} xs={5}>
                <Tab.Content>
                    <Tab.Pane eventKey="debitcard">
                    <DebitCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="creditcard">
                      <Credit></Credit>
                    </Tab.Pane>
                    <Tab.Pane eventKey="netbanking">
                       <NetBanking></NetBanking>
                    </Tab.Pane>
                    <Tab.Pane eventKey="googlepay">
                       <GooglePay></GooglePay>
                    </Tab.Pane>
                    <Tab.Pane eventKey="phonepay">
                    phonepay
                    </Tab.Pane>
                    <Tab.Pane eventKey="otherwallet">
                      <OthersWallets></OthersWallets>
                    </Tab.Pane>
                    <Tab.Pane eventKey="upi">
                       <UPI></UPI>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
     </Tab.Container>
     </Grid>
    );
  }
}
export default Payment;
Payment.contextTypes = {
  router: PropTypes.object
};