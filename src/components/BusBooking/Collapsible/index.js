import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import SelectSeat from '../SelectSeat';
import Cancellation from '../Amenities/Cancellation';
import Review from '../Amenities/Review';
import Amenity from '../Amenities/Amenity';
import BoadingPoint from '../Amenities/BoadingPoint';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.onPeninging = this.onOPeninging.bind(this);
    this.onEntered = this.onEntered.bind(this);
  }

  onOPeninging() {
    setTimeout(function() {
      console.log("opening....")
  }.bind(this), 1000) 
  }

  onEntered() {
    setTimeout(function() {
      console.log("opened....")
  }.bind(this), 1000)   
  }

  render() {
    const { cancellationPolicy, collapseType } = this.props;
    
    return (
      <div>
        <Collapse isOpen={this.props.collapse} onEntering={this.onOPeninging} onEntered={this.onEntered}>
          <Card>
            <CardBody>
             {collapseType === 'seatDetail' && <SelectSeat seatDetails={this.props.seatDetails}  droppingPoints={this.props.droppingPoints} boardingPoints={this.props.boardingPoints} />}
             {collapseType === 'policyDetail' && <Cancellation cancellationPolicy={cancellationPolicy} />}
             {collapseType === 'boardingDropping' && <BoadingPoint droppingPoints={this.props.droppingPoints} boardingPoints={this.props.boardingPoints} />}
             {collapseType === 'review' && <Review />}
             {collapseType === 'Amenities' && <Amenity />}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;