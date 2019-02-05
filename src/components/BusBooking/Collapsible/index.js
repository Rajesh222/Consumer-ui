import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import Bus from '../Bus';
class Collapsible extends Component {

  render() {
    return (
      <div>
        <Collapse isOpen={this.props.collapse}>
          <Card>
            <CardBody>
             <Bus seatDetails={this.props.seatDetails} metaData={this.props.metaData}/>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;