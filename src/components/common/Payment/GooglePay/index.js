import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';

class GooglePay extends Component {

    render() {
        return (
            <Grid>
                <Row>
                   <Col xs={12} md={12}> Google Pay</Col>
                </Row>
            </Grid>
        )
    };
}

export default GooglePay;
GooglePay.contextTypes = {
  router: PropTypes.object
};
