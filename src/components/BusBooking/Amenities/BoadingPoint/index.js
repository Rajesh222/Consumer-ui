import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class BoadingPoint extends Component {

    render() {
        console.log('proooooo: ', this.props.droppingLocations)
        const droppingLocations = this.props.droppingLocations;
        const boardingLocations = this.props.boardingLocations;
        return (
                <Row className="rowBox"> 
                    <Col md={6} lg={6} xs={6}>
                    <div className="rowBoxHeader">Boarding Points</div>
                    {boardingLocations && boardingLocations.map((item)=>{
                            return (                   
                                <p> {item.departureheading}</p>
                            )
                        })}
                    </Col>
                    <Col md={6} lg={6} xs={6}><div className="rowBoxHeader">Dropping Points</div>
                    {droppingLocations && droppingLocations.map((item)=>{
                            return (                   
                                <p> {item.departureheading}</p>
                            )
                        })}
                    </Col>            
             </Row>
        )        
    }

}