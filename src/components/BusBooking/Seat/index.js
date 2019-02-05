import React, { Component } from 'react';
import "./index.scss";

export default class Seat extends Component {

    render () {
        const { selectedSeat, seatDetail, handleSeatClick, hidden } = this.props;
        let isSelected = false;
        isSelected = selectedSeat && selectedSeat.includes(seatDetail.seatNumber);
        const selectedClass = isSelected ? 'selected' : '';
        const seatType = this.props.seatType;

        return (
            <div className={`seat ${selectedClass} ${seatType}`} data-value={seatDetail} 
                onClick={() => handleSeatClick(seatDetail)}>
                <span className="seat-top"></span>
                <span className="seat-bottom"></span>
                <span className="seat-right"></span>
            </div>
        )
    }
}