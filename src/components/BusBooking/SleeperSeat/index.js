import React, { Component } from 'react';
import "./index.scss";
import { Tooltip  ,OverlayTrigger } from 'react-bootstrap';


export default class SleeperSeat extends Component {

    render () {
        const { selectedSeat, seatDetail, handleSeatClick } = this.props;
        let isSelected = false;
        isSelected = selectedSeat && selectedSeat.includes(seatDetail.seatNumber);
        const selectedClass = isSelected ? 'selected' : ''
        return (
            <OverlayTrigger placement="right" overlay={<Tooltip id="sleaper">
              <strong>Seat No:</strong> {seatDetail && seatDetail.seatNumber} | <strong>Fare:</strong> INR {seatDetail && seatDetail.fare}
          </Tooltip >}>
            <div className={`sleeper-seat ${selectedClass}`} data-value={seatDetail}
                onClick={() => handleSeatClick(seatDetail)}>
                <span className="sleeper-seat-section"></span>
            </div>
            </OverlayTrigger>
        )
    }
}