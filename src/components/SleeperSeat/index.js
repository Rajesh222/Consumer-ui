import React, { Component } from 'react';
import "./index.scss";

export default class SleeperSeat extends Component {

    render () {
        return (
            <div className="sleeper-seat" data-value={this.props.seatDetail} onClick={() => this.props.handleSeatClick(this.props.seatDetail)}>
                <span className="sleeper-seat-section"></span>
            </div>
        )
    }
}