import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class Review extends Component {

    render() {
        console.log('', this.props.cancellationPolicy)
        const cancellationPolicy = this.props.cancellationPolicy;
        return (
            <Grid>          
                <Row className="cheader">
                    <Col xs={6}>Departure Heading</Col>
                    <Col xs={6}>Policy Heading</Col>
                </Row>
                {cancellationPolicy && cancellationPolicy.map((item)=>{
                    return (
                        <Row>
                            <Col xs={6}>{item.departureheading}</Col>
                            <Col xs={6}>{item.policyheading}</Col>
                        </Row>
                    )
                })}
           </Grid>
        )        
    }

}