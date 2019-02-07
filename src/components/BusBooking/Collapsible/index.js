import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import Bus from '../Bus';
class Collapsible extends Component {

  render() {
    const { cancellationPolicy, collapseType } = this.props;
    return (
      <div>
        <Collapse isOpen={this.props.collapse}>
          <Card>
            <CardBody>
             {collapseType === 'seatDetail' && <Bus seatDetails={this.props.seatDetails} metaData={this.props.metaData}/>}
             {collapseType === 'policyDetail' && <h1>policyDetail</h1>}
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