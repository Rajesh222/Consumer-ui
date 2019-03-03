import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import DebitCard from './DebitCard';
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Credit from './CreditCard';
import GooglePay from './GooglePay';
import NetBanking from './NetBanking';
import OthersWallets from './OthersWallets';
import UPI from './UPI';

class Payment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'debitcard',
        };
      }
  render() {
    return (
        <Grid>
            <Row>
                <Col md={5} lg={5} xs={5}>
                Please select a payment method
                </Col>
                
            </Row> 
            <Tab.Container id="left-tabs-example" defaultActiveKey="debitcard" activeKey={this.state.key}
             onSelect={key => this.setState({ key })}>
            <Row>
                <Col md={2} lg={2} sm={2} xs={2} className="paymentmenu">
                    <Nav variant="pills" className="flex-column">
                        <NavItem eventKey="debitcard" className="chek-out">
                            Debit Card <span className="fa fa-home"></span>
                        </NavItem>
                        <NavItem eventKey="creditcard" className="chek-out">
                            Credit Card <span className="fa fa-home"></span>
                        </NavItem>
                        <NavItem eventKey="netbanking" className="chek-out">
                            Net Banking <span className="fa fa-home"></span>
                        </NavItem>
                        <NavItem eventKey="googlepay" className="chek-out">
                            Google Pay <span className="fa fa-home"></span>
                        </NavItem>
                        <NavItem eventKey="phonepay" className="chek-out">
                            Phone Pay <span className="fa fa-home"></span>
                        </NavItem>
                        <NavItem eventKey="otherwallet" className="chek-out">
                            Other Wallets <span className="fa fa-home"></span>
                        </NavItem>
                        <NavItem eventKey="upi" className="chek-out">
                            UPI <span className="fa fa-home"></span>
                        </NavItem>
                    </Nav>
                </Col>
                <Col sm={5} xs={5} lg={5} md={5}>
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
        <Row style={{borderTop:"0.5px solid #d2d2d2"}}>
            <Col md={6} lg={6} xs={6}>
               <span style={{textAlign:"right"}}>Total Amount : 1000</span>
            </Col>
           <Col md={6} lg={6} xs={12}>
                <Button bsStyle="primary" className="submitBtn">Pay Now</Button>
                <Button bsStyle="primary" className="submitBtn">Cancel</Button>
            </Col>
        </Row>   
     </Grid>
    );
  }
}
export default Payment;
Payment.contextTypes = {
  router: PropTypes.object
};