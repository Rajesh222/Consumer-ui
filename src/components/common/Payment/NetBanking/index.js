import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';


class NetBanking extends Component {

    render() {
        return (
        <Grid>
            <Row>
               <Col xs={12} md={12}> Net Banking</Col>
            </Row>
        </Grid>
        )
    };
}
export default NetBanking;
NetBanking.contextTypes = {
  router: PropTypes.object
};

