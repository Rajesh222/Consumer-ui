import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {  Grid, Row, Col ,img} from 'react-bootstrap';


class PaymentOption extends React.Component {
  render() {
    return (
       <Grid style={{minHeight:200}}>
           <Row style={{margin:"40px"}}>
             <Col xs={12} md={12} style={{minHeight:100 }}>
                <h3>Payment Options</h3>
             </Col>
             <Col xs={12} md={12}>
                <strong>Debit/Credit Card</strong>
                <p><img src={require('../../../img/payment-options.jpg')} /></p>
                <strong>Banks List</strong>
                <p><img src={require('../../../img/bank.jpg')} /></p>
               </Col>
           </Row>
       </Grid>
    );
  }
}
export default PaymentOption;
PaymentOption.contextTypes = {
  router: PropTypes.object
};