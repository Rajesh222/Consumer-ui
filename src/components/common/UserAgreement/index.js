import React from "react";
import PropTypes from 'prop-types';
import "./index.scss";
import { Grid, Row,Col} from "react-bootstrap";


class UserAgreement extends React.Component {
    
  render() {
    return (
        <div>
      <div class="bg_user_agr">
          <Grid>
              <h1>User Agreement</h1>
          </Grid>
      </div>
      <Grid>
        <Row>
          <Col className="userAgreement">
           <p>
            This user agreement integrates the terms and conditions for EaseMyTrip (Easy Trip Planners Pvt. Ltd) 
			and its affiliate companies to provide services to the User(s) looking for purchasing any of the products and/ 
			or services of EMT by using its website or other channels like sales persons, mobile app, customer support center, 
			agents, information campaigns etc. User and EMT are referred as 'party' in the agreement while collectively referred as
			'parties'.<br/><br/>
            <strong>User's Liability for the Awareness for This Agreement</strong><br/>
            By accessing or using this site or using any of its services, you are agreed on terms and conditions mentioned 
			below, including any supplementary guidelines and future modifications. 
            EaseMyTrip may change, alter or remove any part of these below written Terms and Conditions without any prior notice.
			All rights and responsibilities of the User and/or EMT with respect to any services to be provided by EMT 
			will be limited to the range of this agreement. EMT has all the rights to conclude the access to any of 
			its services at any point of time, without any prior notice, for any reason. 
            There are certain products or services to be provided by third party suppliers. Besides this agreement, 
			User has to understand and agreed to the TOS of such suppliers. Such TOS will be provided and updated by 
			EMT and shall be considered to be the part of this agreement. The User should read and accept the relevant 
			TOS for the service/ product availed by him.
            Services of EaseMyTrip are offered to the User on the condition of accepting it without any modification. 
			For removing any doubt, it is clarified that by availing the Services of EMT means User is agreed to this 
			Agreement and the TOS. If User does not agree with any part of it, he should not avail EMT's Services.<br/><br/>
            <strong>Third Party Account Information </strong><br/>
            By using EMT's website and app, User allows EMT and its agents to access third party sites, including 
			Banks and other payment gateways, designated by them or on their behalf to retrieve requested details. 
            While registering, the User should choose a password and maintain its privacy. The User is completely 
			responsible for any activity held during using the password or account. It is the duty of the User to 
			intimate EMT urgently in written in case of experiencing unauthorized use of the account or other security
			breaching. EMT will not be responsible for any loss occurred due to unauthorized use of his password or account. </p>     
         </Col>
      </Row>
    </Grid> 
    </div>
    );
  }
}
export default UserAgreement;
UserAgreement.contextTypes = {
  router: PropTypes.object
};
