import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Nav, NavItem, Tab, Col, Row } from 'react-bootstrap';


class UPI extends Component {

    render() {
        return (
            <Grid>
                <Row>
                   <Col xs={12} md={12}> 
                   <form autocomplete="off" name="upi-form" method="post" action="/theia/payment/request/submit?MID=Paybus82610812744593&amp;ORDER_ID=7356560197&amp;route=" id="card" className="upi-form validated">
                    <input type="hidden" name="CSRF_PARAM" value=""/>
                    <input type="hidden" name="txnMode" value="UPI"/>
                    <input type="hidden" name="channelId" value=""/>
                    <input type="hidden" name="AUTH_MODE" value="USRPWD"/>
                    <input type="hidden" name="CARD_TYPE" id="cardType" value=""/>
                    <input type="hidden" name="walletAmount" value="0"/>
                    <ul className="grid">
                        <li className="mb20 card-wrapper">
                            <label className="mb10" for="VIRTUAL_PAYMENT_ADDRESS">Enter your Virtual Payment Address (<span>VPA</span>)</label>
                            <p className="cd">           		
                                <input type="text" name="VIRTUAL_PAYMENT_ADDRESS" className="upiPayMode text-input large-input required " placeholder="yourname@bank"/>
                                <p>VPA is a unique payment address that can be linked to a person's bank accounts<br/> to make payments.</p>
                            </p>                            
                            <div class="clear"></div>
                	   </li>		
		            </ul>
                     <div className="relative">
                        <div className="btn-submit  fl">
                        <button name="" type="submit" className="gry-btn blue-btn btn-normal btn-submit" id="upiSubmit" data-txnmode="BHIM_UPI" onclick="pushGAData(this, 'pay_now_clicked')">Pay now</button>
                        </div>
                        <div className="clear"></div>
                    </div> 
                    </form>
                   </Col>
                </Row>
            </Grid>
        )
    };
}
export default UPI;
UPI.contextTypes = {
  router: PropTypes.object
};
