import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';

class CreditCard extends Component {

    render() {
        return (
            <Grid>
                <Row>
                   <Col xs={12} md={12}> Credit Card</Col>
                </Row>
            </Grid>
        )
    };
}
export default CreditCard;
CreditCard.contextTypes = {
  router: PropTypes.object
};
