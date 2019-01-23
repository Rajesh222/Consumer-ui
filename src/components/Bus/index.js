import React, { Component } from 'react';
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import "./index.scss";
import LowerSeat from '../LowerSeat';
import UpperSeat from '../UpperSeat';

export default class Bus extends Component {
    state = {
        seatNumber: '',
        fare: '',
        total: '',
        selectedBoardingPoint: null,
        selectedDroppingPoint: null
    }
    handleSeatClick = (data)=> {
        this.setState({
            seatNumber: data.seatName,
            fare: data.fare,
            total:data.fare 
        })
    }

    handleBoarding = (selectedBoardingPoint) => {
        this.setState({ selectedBoardingPoint });
    }
    handleDropping = (selectedDroppingPoint) => {
        this.setState({ selectedDroppingPoint });
    }
    render () {
        const { seatDetails, metaData } = this.props
        const { boardingPoints, droppingPoints } = metaData
        console.log('metaData: ',metaData)
        const boardingOptions = boardingPoints && boardingPoints.map(item => ({ label: item.locationName, value: item.locationName }));
        const droppingOptions = droppingPoints && droppingPoints.map(item => ({ label: item.locationName, value: item.locationName }));
        const { selectedDroppingPoint, selectedBoardingPoint } = this.state;
        const upperBerth = seatDetails.filter((seatDetail)=>{
            return !seatDetail.isLowerBerth;
        });
        const lowerBerth = seatDetails.filter((seatDetail)=>{
            return seatDetail.isLowerBerth;
        });
        return (
            <div className="">
                 {
                    lowerBerth.length ?<div className="row">
                        <LowerSeat handleSeatClick={this.handleSeatClick} lowerBerth={lowerBerth}/>
                        <div className="col-md-2"> </div>
                        {this.state.seatNumber ? <div className="col-md-3 seat-number">
                            <div className="col-md-11"> Seat Number : <span style={{fontWeight : 600, marginLeft : '26px'}}>{this.state.seatNumber}</span>
                            </div>
                            <div className="col-md-11">
                            Fare : <span style={{fontWeight : 600, marginLeft : '90px'}}>{this.state.fare}</span>
                            </div>
                            <div className="col-md-11 total">
                            Total : <span style={{fontWeight : 600, marginLeft : '85px'}}>{this.state.total}</span>
                            </div>
                            </div> : <div className="col-md-3 seat-number">Please select seat(s)</div>}
                    </div>
                  : <div></div>
                }
                {
                    upperBerth.length ? <div className="row">
                        <UpperSeat handleSeatClick={this.handleSeatClick} upperBerth={upperBerth}/>
                        <div className="col-md-3">
                        <Select
                            value={selectedBoardingPoint}
                            onChange={this.handleBoarding}
                            options={boardingOptions}
                            isSearchable={true}
                            placeholder="Select Boarding Point"
                        />
                         <Select
                            value={selectedDroppingPoint}
                            onChange={this.handleDropping}
                            options={droppingOptions}
                            placeholder="Select Dropping point"
                            isSearchable={true}
                        >
                        </Select>
                    </div>
                  
                    </div>
                  : <div></div>
                }
            </div>
            
        )
    }
}
