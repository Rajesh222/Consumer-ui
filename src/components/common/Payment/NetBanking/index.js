import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row } from 'react-bootstrap';



class NetBanking extends Component {

    render() {
        return (
        <Grid>
            <Row>
               <Col xs={12} md={12}>
               <form autocomplete="off" name="netbanking-form" method="post" action="/theia/payment/request/submit?MID=Paybus82610812744593&amp;ORDER_ID=7356560197&amp;route=" className="validated">
                <input type="hidden" name="CSRF_PARAM" value=""/>
                <input type="hidden" name="txnMode" value="NB"/>
                <input type="hidden" name="channelId" value=""/>
                <input type="hidden" name="AUTH_MODE" value="USRPWD"/>
                <input type="hidden" name="bankCode" id="bankCode"/>
                <input type="hidden" name="walletAmount" id="walletAmountNB" value="0"/>
                <div id="popular-banks-wrapper">
				<label className="mb10" for="submit-btn">SELECT FROM POPULAR BANKS</label>
				<ul className="netbanking-panel pt20 pbanks grid banks-panel">						
                    <li>
                        <div id="ICICI" title="ICICI" className="radio">
                            <input type="radio" className="bankRadio pcb checkbox fl" value="ICICI" data-bankid="8565557" name="bank" autocomplete="off"/>
                            <span className="button-checkbox bootstrap-checkbox bankRadio pcb fl">
                                <button type="button" className="btn-link">
                                <span className="tick cb-icon-check"></span>
                                <span className="tick cb-icon-check-empty"></span>
                                </button>
                            </span>
                            <label className="fl">
                                <span className="bank-logo" alt="ICICI"></span>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div id="SBI" title="SBI" class="radio">
                            <input type="radio" className="bankRadio pcb checkbox fl" value="SBI" data-bankid="8565559" name="bank" autocomplete="off" />
                            <span className="button-checkbox bootstrap-checkbox bankRadio pcb fl">
                                <button type="button" className="btn-link">
                                    <span className="tick cb-icon-check" ></span>
                                    <span className="tick cb-icon-check-empty"></span>
                                </button>
                             </span>
                            <label className="fl">
                                <span className="bank-logo" alt="SBI"></span>
                            </label>
                        </div>
                    </li>							
                    <li>
                        <div id="HDFC" title="HDFC" class="radio" >
                            <input type="radio" class="bankRadio pcb checkbox fl" value="HDFC" data-bankid="8565560" name="bank" autocomplete="off" />
                            <span className="button-checkbox bootstrap-checkbox bankRadio pcb fl">
                            <button type="button" class="btn-link">
                               <span class="tick cb-icon-check-empty"></span></button></span>
                            <label className="fl">
                                <span className="bank-logo" alt="HDFC" ></span>
                            </label>
                        </div>
                    </li>
					
						</ul>
				<div class="clear"></div>
			</div>
		
			<div id="other-banks-wrapper">
				<label className="mt20 mb10" for="submit-btn">
					OR SELECT OTHER BANK
				</label>
				<div id="nbWrapper">
                    <select className="nbSelect" id="nbSelect" data-size="5">
						<option value="-1">Select</option>
						<option value="ICICI" data-bankid="8565557">ICICI Bank</option>
						<option value="SBI" data-bankid="8565559">State Bank of India</option>
						<option value="HDFC" data-bankid="8565560">HDFC Bank</option>
						<option value="AXIS" data-bankid="8565566">Axis Bank</option>
                        <option value="PNB" data-bankid="8565588">Punjab National Bank</option>
						<option value="NKMB" data-bankid="8565585">Kotak Bank</option>
						<option value="ANDB" data-bankid="8565565">Andhra Bank</option>
						<option value="AAXISCORP" data-bankid="8566109">Axis Corporate</option>
						<option value="BBK" data-bankid="8565567">Bank of Bahrain and Kuwait</option>							
						<option value="BBL" data-bankid="8565893">Bandhan Bank Ltd</option>							
						<option value="BHARAT" data-bankid="8565738">Bharat Bank</option>
						<option value="BOB" data-bankid="8565564">Bank of Baroda</option>
						<option value="BOI" data-bankid="8565568">Bank of India</option>
						<option value="BOM" data-bankid="8565569">Bank of Maharashtra</option>
						<option value="AALDCORP" data-bankid="8566111">Allahabad Corporate</option>
						<option value="ALH" data-bankid="8565576">Allahabad Bank</option>
						<option value="CANARA" data-bankid="8565571">Canara Bank</option>
						<option value="CSB" data-bankid="8565603">Catholic Syrian Bank</option>
						<option value="CBI" data-bankid="8565616">Central Bank of India</option>
						<option value="CITIUB" data-bankid="8565572">City Union Bank</option>
						<option value="CORP" data-bankid="8565573">Corporation Bank</option>
						<option value="COSMOS" data-bankid="8565628">Cosmos Bank</option>
						<option value="DEUTS" data-bankid="8565574">Deutsche Bank</option>
						<option value="FDEB" data-bankid="8565575">Federal Bank</option>
						<option value="DCB" data-bankid="8565614">DCB Bank Ltd.</option>
						<option value="DENA" data-bankid="8565705">Dena Bank</option>
						<option value="DHAN" data-bankid="8565626">Dhanlaxmi Bank</option>
						<option value="GPPB" data-bankid="8565818">Gopinath Patil Parsik Janata Sahakari Bank Ltd.</option>
						<option value="IDBI" data-bankid="8565577">IDBI Bank</option>
						<option value="IDFC" data-bankid="8565770">IDFC FIRST Bank</option>							
						<option value="INDB" data-bankid="8565617">Indian Bank</option>							
						<option value="IOB" data-bankid="8565578">Indian Overseas Bank</option>							
						<option value="INDS" data-bankid="8565580">IndusInd Bank</option>							
						<option value="JKB" data-bankid="8565582">Jammu and Kashmir Bank</option>						
						<option value="JSB" data-bankid="8565758">Janata Sahakari Bank</option>							
						<option value="KTKB" data-bankid="8565583">Karnataka Bank</option>							
						<option value="KVB" data-bankid="8565584">Karur Vysya Bank</option>							
						<option value="LVB" data-bankid="8565586">Lakhsmi Vilas Bank</option>							
						<option value="OBPRF" data-bankid="8565587">Oriental Bank of Commerce</option>							
						<option value="PMCB" data-bankid="8565858">Punjab &amp; Maharashtra Co-operative Bank Ltd</option>							
						<option value="PSB" data-bankid="8565701">Punjab &amp; Sind Bank</option>							
						<option value="RATN" data-bankid="8565615">RBL Bank</option>							
						<option value="STB" data-bankid="8565662">Saraswat Co-operative Bank Ltd</option>
						<option value="SIB" data-bankid="8565590">South Indian Bank</option>
						<option value="SCB" data-bankid="8565591">Standard Chartered Bank</option>
						<option value="SSFB" data-bankid="8566101">Suryoday Small Finance Bank</option>
						<option value="SVC" data-bankid="8565742">SVC Cooperative Bank Ltd</option>
						<option value="SYNBK" data-bankid="8565596">Syndicate Bank</option>
						<option value="TNMB" data-bankid="8565597">Tamilnad Mercantile Bank</option>
						<option value="UNI" data-bankid="8565598">Union Bank of India</option>
						<option value="USFB" data-bankid="8566013">Ujjivan Small Finance Bank</option>
                        <option value="UBI" data-bankid="8565602">United Bank of India</option>
						<option value="VJYA" data-bankid="8565600">Vijaya Bank</option>
						<option value="YES" data-bankid="8565601">Yes Bank</option>
						<option value="UCO" data-bankid="8565651">UCO Bank</option>
						<option value="DBS" data-bankid="8565621">DBS BANK LTD</option>
					</select>
				</div>	
			</div>
			<div id="warningDiv" className="hide clear" >
				<div id="errorMsg" className="mt10"></div>
			</div>			
			<div className="mt20 relative">
				<div className="btn-submit  fl">
					<button name="" type="submit" className="gry-btn blue-btn required btn-normal btn-submit" id="nbSubmit" data-txnmode="NB" onclick="pushGAData(this, 'pay_now_clicked')">Pay now</button>
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
export default NetBanking;
NetBanking.contextTypes = {
  router: PropTypes.object
};

