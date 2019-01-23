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
        const { travelsName, availableSeats, totalSeats, basefare, departureDate, arrivalDate } = this.props.busDetails;
        console.log('departureDate: ', new Date(departureDate).getHours())
        const formatedDepartureDate = new Date(departureDate);
        const formatedArrivalDate = new Date(arrivalDate)
        return (
        <div className="bus">
            <Grid style={{paddingTop : 20, paddingBottom:10 }}>
                <Row>
                    <Col xs={6} md={3}>{travelsName}</Col>
                    <Col xs={6} md={3}>{`${formatedDepartureDate.getHours()} : ${formatedDepartureDate.getMinutes()}`}</Col>
                    <Col xs={6} md={4}>{`${formatedArrivalDate.getHours()} : ${formatedArrivalDate.getMinutes()}`}</Col>
                    <Col xs={6} md={2}>
                        <Button
                            bsStyle="primary"
                            bsSize="sm"
                            onClick={this.toggle}
                            > Select Seats</Button>
                    </Col>
                </Row>
                <Collapsible collapse={this.state.collapse} seatDetails={this.state.seatDetails} metaData={this.state.metaData}/>
            </Grid>
        </div>
        )
    }
}