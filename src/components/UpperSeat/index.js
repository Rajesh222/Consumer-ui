import React, { Component } from 'react';
import "./index.scss";
import SleeperSeat from '../SleeperSeat';
import Seat from '../Seat';
export default class UpperSeat extends Component {

    render () {
        const upperBerth = this.props.upperBerth;
        const row0 = upperBerth.filter((seatDetail)=>{
            return seatDetail.row === 0;
        }).sort(function(a, b){return a.column - b.column});

        const row1 = upperBerth.filter((seatDetail)=>{
            return seatDetail.row === 1;
        }).sort(function(a, b){return a.column - b.column});

        const row2 = upperBerth.filter((seatDetail)=>{
            return seatDetail.row === 2;
        }).sort(function(a, b){return a.column - b.column});

        const row3 = upperBerth.filter((seatDetail)=>{
            return seatDetail.row === 3;
        }).sort(function(a, b){return a.column - b.column});

        const row4 = upperBerth.filter((seatDetail)=>{
            return seatDetail.row === 4;
        }).sort(function(a, b){return a.column - b.column});
        return (
            <div className="col-md-12 bus-detail">
                <div className="row seat-row">
                    { row0.map((seatDetail)=> {
                          if(seatDetail.length === 1) {
                            return <Seat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                        } else {
                            return <SleeperSeat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                        }
                    })}
                </div> 
                {row1.length > 0 && <div className="row seat-row">
                    { row1.map((seatDetail)=> {
                              if(seatDetail.length === 1) {
                                return <Seat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            } else {
                                return <SleeperSeat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            }
                        })}
                </div> }
                <div className="row seat-row">
                    { row2.map((seatDetail)=> {
                              if(seatDetail.length === 1) {
                                return <Seat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            } else {
                                return <SleeperSeat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            }
                        })}
                </div>
                {row3.length > 0 && <div className="row seat-row">
                    { row3.map((seatDetail)=> {
                              if(seatDetail.length === 1) {
                                return <Seat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            } else {
                                return <SleeperSeat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            }
                        })}
                </div> }
                <div className="lower-text">upper</div>{row4.length > 0 && <div className="row seat-row">
                    { row4.map((seatDetail)=> {
                              if(seatDetail.length === 1) {
                                return <Seat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            } else {
                                return <SleeperSeat selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/>
                            }
                        })}
                </div>}
            </div>
        )
    }
}