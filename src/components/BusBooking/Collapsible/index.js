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
    this.onPeninging = this.onPeninging.bind(this);
    this.onEntered = this.onEntered.bind(this);
  }

  onPeninging() {
   // this.setState({ status: 'Opening...' });
  }

  onEntered() {
    setTimeout(function() {
      this.setState({render: true}) 
     // this.setState({ status: 'Opened' });
  }.bind(this), 1000)   
  }

  render() {
    const { cancellationPolicy, collapseType } = this.props;
    
    return (
      <div>
        <Collapse isOpen={this.props.collapse} onEntering={this.onPeninging} onEntered={this.onEntered}>
          <Card>
            <CardBody>
             {collapseType === 'seatDetail' && <SelectSeat seatDetails={this.props.seatDetails} metaData={this.props.metaData}/>}
             {collapseType === 'policyDetail' && <Cancellation cancellationPolicy={cancellationPolicy} />}
             {collapseType === 'boardingDropping' && <BoadingPoint />}
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