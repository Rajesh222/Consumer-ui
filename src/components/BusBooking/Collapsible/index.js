import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import SelectSeat from '../SelectSeat';
import Cancellation from '../Cancellation';
import Review from '../Review';
import Amenity from '../Amenity';

class Collapsible extends Component {

  render() {
    const { cancellationPolicy, collapseType } = this.props;
    return (
      <div>
        <Collapse isOpen={this.props.collapse}>
          <Card>
            <CardBody>
             {collapseType === 'seatDetail' && <SelectSeat seatDetails={this.props.seatDetails} metaData={this.props.metaData}/>}
             {collapseType === 'policyDetail' && <Cancellation cancellationPolicy={cancellationPolicy} />}
             {collapseType === 'boardingDropping' && <h1>boardingDropping</h1>}
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