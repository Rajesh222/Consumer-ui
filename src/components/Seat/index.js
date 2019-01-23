import React, { Component } from 'react';
import "./index.scss";

export default class Seat extends Component {

    render () {
        const hidden = this.props.hidden;
        return (
            <div className="seat" data-value={this.props.seatDetail} onClick={() => this.props.handleSeatClick(this.props.seatDetail)} style={{visibility : hidden}}>
                <span className="seat-top"></span>
                <span className="seat-bottom"></span>
                <span className="seat-right"></span>
            </div>
        )
    }
}