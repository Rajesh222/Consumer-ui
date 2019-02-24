import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class Review extends Component {

    render() {
        return (
             <>
                 <Row>
                     <Col md={6} lg={6} xs={6}>
                        <h4>Overall Rating</h4>
                     </Col>
                 </Row>
             </>
        )        
    }

}