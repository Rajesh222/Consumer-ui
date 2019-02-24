import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class Review extends Component {

    render() {
        console.log('', this.props.cancellationPolicy)
        const cancellationPolicy = this.props.cancellationPolicy;
        return (
             <Grid>
                 <Row>
                     <Col md={2} lg={2} xs={2}>
                        <h4>Overall Rating</h4>
                     </Col>
                 </Row>
             </Grid>
        )        
    }

}