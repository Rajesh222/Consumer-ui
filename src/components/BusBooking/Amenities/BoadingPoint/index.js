import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class BoadingPoint extends Component {

    render() {
        console.log('proooooo: ', this.props.droppingLocations)
        const droppingLocations = this.props.droppingLocations;
        const boardingLocations = this.props.boardingLocations;
        return (
            <Grid>
                <Row> 
                    <Col md={6} lg={6} xs={6}>Boarding Points</Col>
                    <Col md={6} lg={6} xs={6}>Dropping Points</Col>
                </Row>
            {boardingLocations && boardingLocations.map((item)=>{
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