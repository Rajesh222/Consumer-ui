import React, { Component } from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import Collapsible from '../Collapsible';
import config from '../../../config.js';
import { showToastrOnSuccess } from '../../../utils/common';


export default class BusList extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleReview = this.handleReview.bind(this);
        this.handleAmenities = this.handleAmenities.bind(this);
        this.handleBoardingDropping = this.handleBoardingDropping.bind(this);
        this.handleCancelPolicy = this.handleCancelPolicy.bind(this);
        this.state = { collapse: false, seatDetails: [], collapseType: 'seatDetail', boardingPoints: [], droppingPoints: [] }; 
    }

    handleCancelPolicy() {
        this.setState({ collapse: !this.state.collapse, collapseType: 'policyDetail' });
    }
    
    handleBoardingDropping() {
        this.setState({ collapse: !this.state.collapse, collapseType: 'boardingDropping' });
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse, collapseType: 'seatDetail' });

        const baseUrl= config.baseUrl;
        const url = `${baseUrl}${config.searchTrip}`;
        const body = {
            operatorId: this.props.busDetails.operatorId,
            providerId:  this.props.busDetails.providerId,
            tripId: this.props.busDetails.tripid
        }
        Axios.post(url, body).then((res) =>{
            if(res.data.data.busSeatDetails !== null) {
                this.setState({seatDetails: res.data.data.busSeatDetails, boardingPoints: res.data.data.boardingPoints, droppingPoints: res.data.data.droppingPoints}) 
            }else {
                showToastrOnSuccess(res.data.status.message);
            }
        }).catch((error)=> {
            console.log(error);
        });
    }
    handleReview() {
        this.setState({ collapse: true });
     
    }

    handleAmenities(){
        this.setState({ collapse: !this.state.collapse, collapseType: 'Amenities' });
    }

    render() {
        const { travelsName, source, destination, totalSeats, basefare, departureDate, arrivalDate, busType, fare, cancellationPolicy, droppingLocations, boardingLocations } = this.props.busDetails;
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
                <Col xs={6} md={3} style={{fontSize:"12px"}}>{busType}</Col>
                <Col xs={6} md={3}>{source}</Col>
                <Col xs={6} md={4}>{destination}</Col>
            </Row>
            <Row className="amenity-row">
                <Col xs={3} md={2} style={{cursor:"pointer"}} onClick={this.handleReview}><span>Reviews </span></Col>
                <Col xs={3} md={2} style={{cursor:"pointer"}} onClick={this.handleAmenities}><span>Amenities </span></Col>
                <Col xs={3} md={3} style={{cursor:"pointer"}} onClick={this.handleBoardingDropping}><span>Boarding & Dropping Point</span></Col>
                <Col xs={3} md={2} style={{cursor:"pointer"}} onClick={this.handleCancelPolicy}><span>Cancellation Policy</span></Col>
            </Row>

            <Collapsible collapse={this.state.collapse} seatDetails={this.state.seatDetails}
                droppingPoints={this.state.droppingPoints} boardingPoints={this.state.boardingPoints} cancellationPolicy={cancellationPolicy} collapseType={this.state.collapseType} droppingLocations={droppingLocations} boardingLocations={boardingLocations}/>
        </div>
        )
    }
}