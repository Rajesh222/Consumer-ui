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
   
  }

  render() {
    const { cancellationPolicy,droppingPoints,boardingPoints, collapseType,droppingLocations, boardingLocations } = this.props;  
    console.log("::::",droppingLocations, boardingLocations)  
    return (
      <>
        <Collapse isOpen={this.props.collapse} style={{width:"100%"}}>
          <Card>
            <CardBody>
             {collapseType === 'seatDetail' && <SelectSeat seatDetails={this.props.seatDetails}  droppingPoints={this.props.droppingPoints} boardingPoints={this.props.boardingPoints} />}
             {collapseType === 'policyDetail' && <Cancellation cancellationPolicy={cancellationPolicy} />}
             {collapseType === 'boardingDropping' && <BoadingPoint droppingPoints={droppingPoints} boardingPoints={boardingPoints} droppingLocations={droppingLocations} boardingLocations={boardingLocations}/>}
             {collapseType === 'review' && <Review />}
             {collapseType === 'Amenities' && <Amenity />}
            </CardBody>
          </Card>
        </Collapse>
      </>
    );
  }
}

export default Collapsible;