import React, { Component } from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import Collapsible from '../Collapsible';
import config from '../../../config.js';

export default class Bookbus extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleReview = this.handleReview.bind(this);
        this.handleBoardingDropping = this.handleBoardingDropping.bind(this);
        this.handleCancelPolicy = this.handleCancelPolicy.bind(this);
        this.state = { collapse: false, seatDetails: [], metaData: {}, collapseType: 'seatDetail' }; 
    }

    handleCancelPolicy() {
        this.setState({ collapse: !this.state.collapse, collapseType: 'policyDetail' });
        const busId = 1;
        const baseUrl= config.baseUrl;
        const searchDate = "2019-01-31";
        const url = `${baseUrl}${config.availableSeat}?busId=${busId}&date=${searchDate}`;
        Axios.post(url).then((res) =>{
           this.setState({seatDetails: res.data.data.busSeatDetails}) 
        }).catch((error)=> {
            console.log(error);
        });
    }
    
    handleBoardingDropping() {
        this.setState({ collapse: !this.state.collapse, collapseType: 'boardingDropping' });
        const busId = 1;
        const baseUrl= config.baseUrl;
        const searchDate = "2019-01-31";
        const url = `${baseUrl}${config.availableSeat}?busId=${busId}&date=${searchDate}`;
        Axios.post(url).then((res) =>{
           this.setState({seatDetails: res.data.data.busSeatDetails}) 
        }).catch((error)=> {
            console.log(error);
        });
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse, collapseType: 'seatDetail' });
        const busId = 1;
        const baseUrl= config.baseUrl;
        const searchDate = "2019-01-31";
        const url = `${baseUrl}${config.availableSeat}?busId=${busId}&date=${searchDate}`;
        Axios.post(url).then((res) =>{
           this.setState({seatDetails: res.data.data.busSeatDetails}) 
        }).catch((error)=> {
            console.log(error);
        });
    }
    handleReview() {
        this.setState({ collapse: true });
     
    }

    render() {
        const { travelsName, source, destination, totalSeats, basefare, departureDate, arrivalDate, busType, fare, cancellationPolicy } = this.props.busDetails;
        const formatedDepartureDate = new Date(departureDate);
        const formatedArrivalDate = new Date(arrivalDate);
        return (
        <div className="bus">
                <Row>
                    <Col xs={6} md={3}>{travelsName}</Col>
                    <Col xs={6} md={2}>{`${formatedDepartureDate.getHours()} : ${formatedDepartureDate.getMinutes()}`}</Col>
                    <Col xs={6} md={1}><span className="glyphicon glyphicon-arrow-right"></span></Col>
                    <Col xs={6} md={2}>{`${formatedArrivalDate.getHours()} : ${formatedArrivalDate.getMinutes()}`}</Col>
                    <Col xs={6} md={2}>Starting from <br/>{fare}</Col>
                    <Col xs={6} md={2}>
                        <Button bsStyle="primary" bsSize="sm" onClick={this.toggle}> Select Seats</Button>
                    </Col>
                </Row>
                <Row className="busrow-details">
                    <Col xs={6} md={3}>{busType}</Col>
                    <Col xs={6} md={3}>{source}</Col>
                    <Col xs={6} md={4}>{destination}</Col>
                </Row>
                <Row className="amenity-row">
                    <Col xs={6} md={2} style={{cursor:"pointer"}} onClick={this.handleReview}>Review</Col>
                    <Col xs={6} md={3} style={{cursor:"pointer"}} onClick={this.handleBoardingDropping}>Boarding & Dropping Point</Col>
                    <Col xs={6} md={2} style={{cursor:"pointer"}} onClick={this.handleCancelPolicy}>Cancellation Policy</Col>
                    <Col xs={6} md={2} style={{cursor:"pointer"}} onClick={this.toggle}>Available Seats</Col>
                </Row>

                <Collapsible collapse={this.state.collapse} seatDetails={this.state.seatDetails} metaData={this.state.metaData} cancellationPolicy={cancellationPolicy} collapseType={this.state.collapseType} />
        </div>
        )
    }
}