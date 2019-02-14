import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';


class OthersWallets extends Component {

    render() {
        return (
            <Grid>
                <Row>
                   <Col xs={12} md={12}> Others Wallets</Col>
                </Row>
            </Grid>
        )
    };
}

export default OthersWallets;
OthersWallets.contextTypes = {
  router: PropTypes.object
};