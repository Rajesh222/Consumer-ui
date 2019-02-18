import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import {Grid, Form,Button, Col, Row } from 'react-bootstrap';



class NetBanking extends Component {

    render() {
        return (
        <Grid>			
            <Row>
				  <div className="netbanking">
				  <h3 className="text-header">Popular banks </h3>
				  <ul>					  
					<li className="bank1">
                      <label>
                        <input name="major_nb" id="major_nb" type="radio" value="AXIB"/>
                      </label>
                    </li>                      
					<li class="bank2">
                      <label>
                        <input name="major_nb" id="major_nb" type="radio" value="HDFB"/>
                      </label>
                    </li>                      
					<li class="bank3">
                      <label>
                        <input name="major_nb" id="major_nb" type="radio" value="SBIB"/>
                      </label>
                    </li>                      
					<li class="bank4">
                      <label>
                        <input name="major_nb" id="major_nb" type="radio" value="162B"/>
                      </label>
                    </li>                      
					<li class="bank5">
                      <label>
                        <input name="major_nb" id="major_nb" type="radio" value="ICIB"/>
                      </label>
                    </li>
                </ul>
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr height="32">
                    <td width="20%">Bank Name </td>
                    <td width="80%">
					<select name="nb_BankName" id="nb_BankName" className="dropdown_custom">
                        <option value="">--Please select your bank --</option>
                            <option value="NB_ALLB">Allahabad Bank</option>
                            <option value="ADBB">Andhra Bank</option>
                            <option value="AXIB">Axis Bank</option>
                            <option value="NB_BBKM">Bank of Bahrain and Kuwait</option>
                            <option value="NB_BOB">Bank of Baroda</option>
                            <option value="NB_BOBCORP">Bank of Baroda Corporate</option>
                            <option value="NB_BOI">Bank of India</option>
                            <option value="NB_BOM">Bank of Maharashtra</option>
                            <option value="CABB">Canara Bank</option>
                            <option value="NB_CBI">Central Bank Of India</option>
                            <option value="NB_CITI">Citi Bank NetBanking</option>
                            <option value="CUBB">City Union Bank</option>
                            <option value="NB_CORP">Corporation Bank</option>
                            <option value="NB_COSMOS">Cosmos Bank</option>
                            <option value="NB_DBS">DBS Bank Ltd</option>
                            <option value="NB_DCB">DCB Bank</option>
                            <option value="NB_DCBB">DCB BANK Business</option>
                            <option value="NB_DEUT">Deutsche Bank</option>
                            <option value="NB_FED">Federal Bank</option>
                            <option value="HDFB">HDFC Bank</option>
                            <option value="ICIB">ICICI Netbanking</option>
                            <option value="NB_IDBI">IDBI Bank</option>
                            <option value="IDFCNB">IDFC</option>
                            <option value="INDB">Indian Bank</option>
                            <option value="INOB">Indian Overseas Bank</option>
                            <option value="INIB">IndusInd Bank</option>
                            <option value="NB_JNK">Jammu and Kashmir Bank</option>
                            <option value="NB_KARN">Karnataka Bank</option>
                            <option value="NB_KVB">Karur Vysya Bank</option>
                            <option value="162B">Kotak Bank</option>
                            <option value="NB_LVB">Lakshmi Vilas Bank</option>
                            <option value="OBCB">Oriental Bank of commerce</option>
                            <option value="NB_PNJSB">Punjab and Sind Bank</option>
                            <option value="NB_PNB">Punjab National Bank</option>
                            <option value="NB_PNBCORP">Punjab National Bank CORPORATE</option>
                            <option value="NBK_RBS_N">Royal Bank Of Scotland</option>
                            <option value="NB_SARASB">Saraswat Bank</option>
                            <option value="SVCNB">Shamrao Vithal Co-operative Bank Ltd</option>
                            <option value="NBK_SIB_N">South Indian Bank</option>
                            <option value="NB_SCB">Standard Chartered Bank</option>
                            <option value="NB_SBBJ">State Bank of Bikaner and Jaipur</option>
                            <option value="NB_SBH">State Bank of Hyderabad</option>
                            <option value="SBIB">State Bank of India</option>
                            <option value="NB_SBM">State Bank of Mysore</option>
                            <option value="NB_SBP">State Bank of Patiala</option>
                            <option value="NB_SBT">State Bank of Travancore</option>
                            <option value="SYNDB">Syndicate Bank</option>
                            <option value="TMBB">Tamilnad Mercantile Bank</option>
                            <option value="UCOB">UCO Bank</option>
                            <option value="UBIB">Union Bank Of India</option>
                            <option value="UNIB">United Bank of India</option>
                            <option value="VJYB">Vijaya Bank</option>
                            <option value="YESB">Yes Bank</option>
                        </select>
                    </td>
                  </tr>
                  <tr>
                    <td>                   <Button variant="primary" size="lg" className="paynow" style={{margin:10, textAlign:"center"}}> Pay now </Button>
</td>
                  </tr>
                </tbody>
                </table>
				
				</div>
            </Row>
        </Grid>
        )
    };
}
export default NetBanking;
NetBanking.contextTypes = {
  router: PropTypes.object
};

