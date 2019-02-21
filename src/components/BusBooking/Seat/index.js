import React, { Component } from 'react';
import "./index.scss";
import { Tooltip  ,OverlayTrigger } from 'react-bootstrap';

export default class Seat extends Component {
   
    render () {
        const { selectedSeat, seatDetail, handleSeatClick, hiddenSeat = '' } = this.props;
        let isSelected = false;
        isSelected = selectedSeat && selectedSeat.includes(seatDetail && seatDetail.seatNumber);
        const selectedClass = isSelected ? 'selected' : '';
        const seatType = this.props.seatType || '';

        return (
            <OverlayTrigger placement="right" overlay={<Tooltip id="seat">
                <strong>Seat No:</strong> {seatDetail && seatDetail.seatNumber} | <strong>Fare:</strong> INR {seatDetail && seatDetail.fare}
              </Tooltip >}>
            <div className={`seat ${selectedClass} ${seatType} ${hiddenSeat}`} data-value={seatDetail}
                onClick={() => handleSeatClick(seatDetail)}>
                <span className="seat-top"></span>
                <span className="seat-bottom"></span>
                <span className="seat-right"></span>
            </div>
            </OverlayTrigger>
        )
    }
}