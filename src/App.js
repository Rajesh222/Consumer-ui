import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Login from './components/UserManagement/Login';
import BusDashboard from './components/BusBooking/Dashboard';
import Forgotpassword from './components/UserManagement/Forgotpassword';
import Resetpassword from './components/UserManagement/Resetpassword';
import HomeContainer from './components/common/HomeContainer';
import About from './components/common/About';
import Privacy from './components/common/Privacy';
import Terms from './components/common/Terms';
import Contact from './components/common/Contact';
import Register from './components/UserManagement/Registation';
import Faq from './components/common/Faq'
import Career from './components/common/Career';
import PassengerInfo from './components/BusBooking/PassengerInfo';
import Dashboard from './components/Dashboard';
import UserAgreement from './components/common/Useragreement';
import Gst from './components/common/Gst';
import PaymentOption from './components/common/Paymentoption';
import Payment from './components/common/Payment';
import TicketStatus from './components/BusBooking/TicketStatus';
import CancelTicket from './components/BusBooking/CancelTicket';


class App extends Component {
  render() {
    return (
     <Router>
       <>
         <Switch>
          <HomeContainer>
            <Route component={({ match }) =>
              <>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Register}/>
                <Route path='/about' component={About} />
                <Route path='/privacypolicy' component={Privacy} />
                <Route path="/termscondition" component={Terms} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/bus-booking" component={BusDashboard} />
                <Route path="/forgotpassword" component={Forgotpassword} />
                <Route path="/resetpassword" component={Resetpassword} />
                <Route path='/faq' component={Faq} />
                <Route path="/careers" component={Career}/>
                <Route path="/passenger" component={PassengerInfo} />
                <Route path="/user-agreement" component={UserAgreement} />    
                <Route path="/via-gst-details" component={Gst}/> 
                <Route path="/paymentoption" component={PaymentOption}/>  
                <Route path="/payment" component={Payment}/> 
                <Route path="/ticket-status" component={TicketStatus}/> 
                <Route path="/cancel-ticket" component={CancelTicket}/> 
              </>
            }/>
          </HomeContainer>
          </Switch>
       </>
     </Router>
    );
  }
}

export default App;
