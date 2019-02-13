import React, { Component } from 'react';
import "./index.scss";

export default class Seat extends Component {

    render () {
        const { selectedSeat, seatDetail, handleSeatClick, hiddenSeat = '' } = this.props;
        let isSelected = false;
        isSelected = selectedSeat && selectedSeat.includes(seatDetail && seatDetail.seatNumber);
        const selectedClass = isSelected ? 'selected' : '';
        const seatType = this.props.seatType || '';

        return (
            <div className={`seat ${selectedClass} ${seatType} ${hiddenSeat}`} data-value={seatDetail}
                onClick={() => handleSeatClick(seatDetail)} title={seatDetail && seatDetail.seatNumber}>

                <span className="seat-top"></span>
                <span className="seat-bottom"></span>
                <span className="seat-right"></span>
            </div>
        )
    }
}