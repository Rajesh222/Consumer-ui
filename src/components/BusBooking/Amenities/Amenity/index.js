import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class Amenity extends Component {

    render() {
        console.log('', this.props.cancellationPolicy)
        const cancellationPolicy = this.props.cancellationPolicy;
        return (
            <Grid>
                {cancellationPolicy && cancellationPolicy.map((item)=>{
                return (
                    <Row>
                        <Col md={3} lg={3} xs={3}>{item.departureheading}</Col>
                        <Col md={3} lg={3} xs={3}>{item.policyheading}</Col>
                   </Row>
                )
            })}
            
        </Grid>
        )        
    }

}