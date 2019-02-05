import React, { Component } from 'react';
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./index.scss";
import LowerSeat from '../LowerSeat';
import UpperSeat from '../UpperSeat';
import Seat from '../Seat';

export default class Bus extends Component {
    state = {
        seatNumber: '',
        fare: 0,
        total: '',
        selectedBoardingPoint: null,
        selectedDroppingPoint: null,
        selectedSeat: []
    }
    handleSeatClick = (data)=> {
        const selectedSeat = this.state.selectedSeat;
        let fare = this.state.fare;
        const index = selectedSeat.indexOf(data.seatNumber)
        if (index > -1) {
            selectedSeat.splice(index, 1);
            fare = fare - data.fare;
          } else {
            selectedSeat.push(data.seatNumber);
            fare = fare + data.fare;
          }
        
        this.setState({
            seatNumber: data.seatName,
            fare,
            total:fare,
            selectedSeat 
        })
    }
    handleContinue = (e) => {
        e.preventDefault();
        this.context.router.history.push('/passenger');
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
        const boardingOptions = boardingPoints && boardingPoints.map(item => ({ label: item.locationName, value: item.locationName }));
        const droppingOptions = droppingPoints && droppingPoints.map(item => ({ label: item.locationName, value: item.locationName }));
        const { selectedDroppingPoint, selectedBoardingPoint, selectedSeat } = this.state;
        const upperBerth = seatDetails.filter((seatDetail)=>{
            return !seatDetail.lowerBerth;
        });
        const lowerBerth = seatDetails.filter((seatDetail)=>{
            return seatDetail.lowerBerth;
        });
        return (
            <div className="">
                <div className="row">
                    <div className="col-md-7">
                        {lowerBerth.length ?<LowerSeat handleSeatClick={this.handleSeatClick} lowerBerth={lowerBerth} selectedSeat={this.state.selectedSeat}/>:<div></div>}
                        {
                        upperBerth.length ?<UpperSeat selectedSeat={this.state.selectedSeat} handleSeatClick={this.handleSeatClick} upperBerth={upperBerth}/>
                        : <div></div>
                        }
                        <div className="col-md-12 seat-sign">
                            <Seat seatType="occupied" handleSeatClick={()=> false} /> <span style={{marginRight:33}}>Occupied Seat</span> <Seat handleSeatClick={()=> false} /> <span style={{marginRight:20}}>Available Seat</span> 
                            <Seat seatType="selected" handleSeatClick={()=> false} /> <span>Selected Seat</span> <Seat seatType="reserved-by-lady" handleSeatClick={()=> false} /> <span style={{marginRight: 11}}>Booked By Ladies</span> <Seat seatType="reserved-for-lady" handleSeatClick={()=> false} /><span style={{marginRight: 11}}> Reserved for Ladies</span>
                        </div>
                    </div>
                    <div className="col-md-5">
                        {selectedSeat.length ? <div className="col-md-12">
                            <div className="col-md-12"> Seats : {selectedSeat && selectedSeat.map((selected, index)=>{
                                const last = selectedSeat.length - 1 === index;
                                const separator = last ? '' : ', ';
                                return <span key={selected} style={{fontWeight : 600, float: "right"}}>{`${separator} ${selected}`}</span>
                            })} 
                            </div>
                            <div className="col-md-12">
                                Fare : <span style={{fontWeight : 600, float: "right"}}>{this.state.fare}</span>
                            </div>
                            <div className="col-md-12 total">
                                Total : <span style={{fontWeight : 600, float: "right"}}>{this.state.total}</span>
                            </div>
                            </div> : <div className="col-md-12">Please select seat(s), boarding & dropping points to continue</div>}
                            
                        <div className="col-md-12">
                            <div className="boarding-point">
                                <Select
                                    value={selectedBoardingPoint}
                                    onChange={this.handleBoarding}
                                    options={boardingOptions}
                                    isSearchable={true}
                                    placeholder="Select Boarding Point"
                                />
                            </div>
                            <div className="dropping-point">
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
                        <div className="col-md-12">
                        <Button
                            block
                            bsStyle="primary"
                            onClick={this.handleContinue}
                            type="submit"
                            >
                                    Continue
                        </Button>
                        </div>
                    </div>  
                </div> 
            </div>
            
        )
    }
}

Bus.contextTypes = {
    router: PropTypes.object
  };