import React, { Component } from 'react';
import "./index.scss";
import Seat from '../Seat';
import SleeperSeat from '../SleeperSeat';
export default class LowerSeat extends Component {
    render () {
        const lowerBerth = this.props.lowerBerth;   
        const sleeperSeat = lowerBerth.filter((seatDetail)=>{
            return seatDetail.length === 2;
        });
        const seater = lowerBerth.filter((seatDetail)=>{
            return seatDetail.length === 1;
        });
        
        let row0 = lowerBerth.filter((seatDetail)=>{
            return seatDetail.row === 0;
        }).sort(function(a, b){return a.column - b.column});

        const row1 = lowerBerth.filter((seatDetail)=>{
            return seatDetail.row === 1;
        }).sort(function(a, b){return a.column - b.column});

        const row2 = lowerBerth.filter((seatDetail)=>{
            return seatDetail.row === 2;
        }).sort(function(a, b){return a.column - b.column});

        const row3 = lowerBerth.filter((seatDetail)=>{
            return seatDetail.row === 3;
        }).sort(function(a, b){return a.column - b.column});

        const row4 = lowerBerth.filter((seatDetail)=>{
            return seatDetail.row === 4;
        }).sort(function(a, b){return a.column - b.column});
        const rowMiddle = row0.filter((seatDetail, index)=> {
            return row0.length !== index + 1;
        });
        console.log('rowMiddle: ', rowMiddle)
        console.log('row2: ', row2)
        return (
                <div className="col-md-12 bus-detail">
                    <div className="row seat-row">
                       <div className="driver-seat"></div> { row0.map((seatDetail)=> {
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
                                return <div> {rowMiddle.map((seatDetail)=> <Seat selectedSeat={this.props.selectedSeat} key={seatDetail.seatName} hiddenSeat="hidden-seat" />)}<Seat 
                                selectedSeat={this.props.selectedSeat} handleSeatClick={this.props.handleSeatClick} key={seatDetail.seatName} seatDetail={seatDetail}/></div>
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
                    <div className="lower-text">lower</div>{row4.length > 0 && <div className="row seat-row">
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