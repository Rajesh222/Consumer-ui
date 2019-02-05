import React, { Component } from 'react';
import "./index.scss";

export default class SleeperSeat extends Component {

    render () {
        const { selectedSeat, seatDetail, handleSeatClick } = this.props;
        let isSelected = false;
        isSelected = selectedSeat && selectedSeat.includes(seatDetail.seatNumber);
        const selectedClass = isSelected ? 'selected' : ''
        return (
            <div className={`sleeper-seat ${selectedClass}`} data-value={seatDetail}
                onClick={() => handleSeatClick(seatDetail)}>
                <span className="sleeper-seat-section"></span>
            </div>
        )
    }
}