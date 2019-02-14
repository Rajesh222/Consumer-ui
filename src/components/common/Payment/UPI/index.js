import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';


class UPI extends Component {

    render() {
        return (
            <Grid>
                <Row>
                   <Col xs={12} md={12}> UPI</Col>
                </Row>
            </Grid>
        )
    };
}
export default UPI;
UPI.contextTypes = {
  router: PropTypes.object
};
