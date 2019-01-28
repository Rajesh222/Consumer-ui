import React, { Component } from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Collapsible from '../common/Collapsible';
import SeatJson from '../../utils/seat.json';

export default class Bookbus extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, seatDetails: [], metaData: {} }; 
    }
    
    toggle() {
        this.setState({ collapse: !this.state.collapse });
        this.setState({ seatDetails: SeatJson.body, metaData: SeatJson.meta })
    }

    render() {
        const { travelsName, source, destination, totalSeats, basefare, departureDate, arrivalDate, busType, fare } = this.props.busDetails;
        const formatedDepartureDate = new Date(departureDate);
        const formatedArrivalDate = new Date(arrivalDate)
        return (
        <div className="bus">
                <Row>
                    <Col xs={6} md={3}>{travelsName}</Col>
                    <Col xs={6} md={2}>{`${formatedDepartureDate.getHours()} : ${formatedDepartureDate.getMinutes()}`}</Col>
                    <Col xs={6} md={1}>---></Col>
                    <Col xs={6} md={2}>{`${formatedArrivalDate.getHours()} : ${formatedArrivalDate.getMinutes()}`}</Col>
                    <Col xs={6} md={2}>{fare}</Col>
                    <Col xs={6} md={2}>
                        <Button
                            bsStyle="primary"
                            bsSize="sm"
                            onClick={this.toggle}
                            > Select Seats</Button>
                    </Col>
                </Row>
                <Row className="busrow-details">
                    <Col xs={6} md={3}>{busType}</Col>
                    <Col xs={6} md={3}>{source}</Col>
                    <Col xs={6} md={4}>{destination}</Col>
                </Row>
                <Collapsible collapse={this.state.collapse} seatDetails={this.state.seatDetails} metaData={this.state.metaData}/>
        </div>
        )
    }
}