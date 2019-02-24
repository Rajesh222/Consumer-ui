import React, { Component } from 'react';
import { Table, Row,Col,Grid } from 'react-bootstrap';
import "./index.scss";


export default class Cancellation extends Component {

    render() {
        console.log('', this.props.cancellationPolicy)
        const cancellationPolicy = this.props.cancellationPolicy;
        return (
            <Grid>
                <Row> 
                    <Col md={6} lg={6} xs={6}>Hours before Departure</Col>
                    <Col md={6} lg={6} xs={6}>Refund Percentage</Col>
                </Row>
                {cancellationPolicy && cancellationPolicy.map((item)=>{
                    return (
                        <Row>
                             <Col md={6} lg={6} xs={6}>{item.departureheading}</Col>
                             <Col md={6} lg={6} xs={6}>{item.policyheading}</Col>
                       </Row>
                    )
                })}
                 
            </Grid>
             
        )        
    }

}