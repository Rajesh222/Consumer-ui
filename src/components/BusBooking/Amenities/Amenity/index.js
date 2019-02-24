import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class Amenity extends Component {

    render() {
        return (
            <>
                <Row>
                    <Col md={6} lg={6} xs={6}><h4>Amenity</h4></Col>
                </Row>
            </>
        )        
    }

}