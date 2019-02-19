import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import SelectSeat from '../SelectSeat';
import Cancellation from '../Cancellation';
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
             {collapseType === 'review' && <h1>review</h1>}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;