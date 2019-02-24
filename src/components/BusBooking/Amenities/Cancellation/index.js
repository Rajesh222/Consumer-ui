import React, { Component } from 'react';
import { Table, Row,Col,Grid } from 'react-bootstrap';
import "./index.scss";


export default class Cancellation extends Component {

    render() {
        const cancellationPolicy = this.props.cancellationPolicy;
        return (
            <div className="rowBox">
                <Row className="am_header">  
                    <Col md={6} lg={6} xs={6}>Hours before Departure</Col>
                    <Col md={6} lg={6} xs={6}>Refund Percentage</Col>
                </Row>
                {cancellationPolicy && cancellationPolicy.map((item)=>{
                    return (
                        <Row className="am_headerv">
                             <Col md={6} lg={6} xs={6} className="am_headerv_cal">{item.departureheading}</Col>
                             <Col md={6} lg={6} xs={6}>{item.policyheading}</Col>
                       </Row>
                    )
                })}
             </div>
             
        )        
    }

}