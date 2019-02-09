import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {  Grid, Row, Col } from 'react-bootstrap';


class PaymentOption extends React.Component {
  render() {
    return (
       <Grid>
           <Row>
               
           </Row>
       </Grid>
    );
  }
}
export default PaymentOption;
PaymentOption.contextTypes = {
  router: PropTypes.object
};