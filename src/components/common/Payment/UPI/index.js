import React from 'react';
import "./index.scss";
import {Grid, Button, Col, Row, Form, FormGroup, FormControl } from 'react-bootstrap';


export default class UPI extends React.Component {

    render() {
        return (
            <Grid>
                <Row> 
                   <Form autoComplete="off" method="POST" action="/theia/payment/request/submit?MID=Paybus82610812744593&amp;ORDER_ID=7356560197&amp;route=">
                    <FormControl type="hidden" name="CSRF_PARAM" value=""></FormControl>
                    <FormControl type="hidden" name="CSRF_PARAM" value=""/>
                    <FormControl type="hidden" name="txnMode" value="UPI"/>
                    <FormControl type="hidden" name="channelId" value=""/>
                    <FormControl type="hidden" name="AUTH_MODE" value="USRPWD"/>
                    <FormControl type="hidden" name="CARD_TYPE" id="cardType" value=""/>
                    <FormControl type="hidden" name="walletAmount" value="0"/> 
                    <Col xs={5} md={5}>
                       <FormGroup>
                        <label >Enter your Virtual Payment Address (<span>VPA</span>)</label>
                        <input type="text" name="VIRTUAL_PAYMENT_ADDRESS" className="upiPayMode text-input large-input required " placeholder="yourname@bank"/>
                        <p>VPA is a unique payment address that can be linked to a person's bank accounts<br/> to make payments.</p>
                      </FormGroup>                                         
                    <Button variant="primary" size="lg" className="paynow"> Pay now </Button>
                    </Col>  
                    </Form>
                </Row>
            </Grid>
        )
    };
}
