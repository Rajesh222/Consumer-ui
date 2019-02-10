import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Payment extends Component {
        
  render() {
    return (
        <Grid className="paymentSection">
        <div className="payment-title clearfix">
             PAYMENT OPTIONS          
        </div>
        <div className="securityinfoDiv" style={{float:"right"}}>
             <span className="SecuredIcon"><FontAwesomeIcon icon="alarm-clock"/><span className="securedText">Safe &amp; secure<br/>  Online Payments</span></span>
            <span className="_million_transaction"><span className="icon-million_transactions"></span><span className="million_transactionsText">60+ Million<br/> Transactions</span></span>
            <span className="years_of_trust"><span className="icon-years_of_trust"><span className="years_of_trustText">10+ Years<br/> Trust</span></span></span>
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
                    <NavItem eventKey="phonepay">
                        Phone Pay
                    </NavItem>
                    <NavItem eventKey="otherwallet">
                        Other Wallets
                    </NavItem>
                    <NavItem eventKey="upi">
                        UPI
                    </NavItem>
                </Nav>
            </Col>
            <Col sm={5} xs={5}>
                <Tab.Content>
                    <Tab.Pane eventKey="debitcard">
                    debitcard
                    </Tab.Pane>
                    <Tab.Pane eventKey="creditcard">
                    creditcard
                    </Tab.Pane>
                    <Tab.Pane eventKey="netbanking">
                    netbanking
                    </Tab.Pane>
                    <Tab.Pane eventKey="googlepay">
                    googlepay
                    </Tab.Pane>
                    <Tab.Pane eventKey="phonepay">
                    phonepay
                    </Tab.Pane>
                    <Tab.Pane eventKey="otherwallet">
                    otherwallet
                    </Tab.Pane>
                    <Tab.Pane eventKey="upi">
                    UPI
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