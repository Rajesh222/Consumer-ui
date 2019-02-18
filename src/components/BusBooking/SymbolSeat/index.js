import React, { Component } from 'react';
import "./index.scss";

export default class SymbolSeat extends Component {

    render () {
        const { selectedSeat, seatDetail, handleSeatClick, hidden } = this.props;
        let isSelected = false;
        isSelected = selectedSeat && selectedSeat.includes(seatDetail.seatNumber);
        const selectedClass = isSelected ? 'selected' : '';
        const seatType = this.props.seatType;

        return (
            <div className={`seat ${selectedClass} ${seatType}`} data-value={seatDetail} />
        )
    }
}