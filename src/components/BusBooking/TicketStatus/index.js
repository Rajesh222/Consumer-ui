import React, { Component } from 'react';
import "./index.scss";
import {  Grid,Row,Col,Table } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class TicketStatus extends Component {

    render () {      
          return (
            <Grid>
                <Row>
                    <div className="custheader">
                    <h4>View / Print Ticket</h4>
                    <p style={{color: "gray"}}>Verify your details, and <span style={{color: "#da4d52"}}>Print</span> your tickets</p>
				    </div>
                   <Form>
                       <Col md={2} lg={2} xs={12}></Col>
                       <Col md={4} lg={4} xs={12} >
                            <FormGroup row>
                                <Label for="ticket" sm={3} style={{fontWeight:"lighter"}}>Ticket No</Label>
                                <Col sm={9}>
                                    <Input type="email" name="text" id="ticket" placeholder="Enter your ticket number" />
                                </Col>
                            </FormGroup>	 
                       </Col>
                       <Col md={3} lg={3} xs={12} >
                            <FormGroup row>
                                <Label for="exampleEmail" sm={3} style={{fontWeight:"lighter"}}>Mobile</Label>
                                <Col sm={9}>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </Col>
                            </FormGroup>
                       </Col>
                       <Col md={3} lg={3} xs={12} >
                        <Button bsStyle="primary" className="submitBtn"> Submit </Button>
                   </Col>
                    </Form>       
                </Row>
	       </Grid>
        )
    }
}