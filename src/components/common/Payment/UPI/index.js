import React from 'react';
import "./index.scss";
import {Grid, Button, Col, Row, Form, FormGroup, FormControl } from 'react-bootstrap';


export default class UPI extends React.Component {

    render() {
        return (
            <Grid>
            <Row>
                <Col xs={8}>
                <label>Enter your Virtual Payment Address (<span>VPA</span>)</label><br/>
                <input type="text" onChange={this.handleDebitCard} placeholder="yourbank@bank.com"
                     style={{margin:10, textAlign:"center", width:"400px"}}></input>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                <p>VPA is a unique payment address that can be linked to a person's bank accounts<br/> to make payments.</p>
                </Col>
            </Row>           
            <Row>
                <Col xs={2}>
                   <Button variant="primary" size="lg" className="paynow" style={{margin:10, textAlign:"center"}}> Pay now </Button>
                </Col>
            </Row>
        </Grid>
            
        )
    };
}
