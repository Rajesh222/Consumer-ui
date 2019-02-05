import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Login from './components/Login';
import Dashboard from './components/BusBooking/Dashboard';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import HomeContainer from './components/HomeContainer';
import About from './components/common/About';
import Privacy from './components/common/Privacy';
import Terms from './components/common/Terms';
import Contact from './components/common/Contact';
import Register from './components/Registation';
import Faq from './components/common/Faq'
import Career from './components/common/Career';
import Cabbooking from './components/Cabbooking';
import PassengerInfo from './components/BusBooking/PassengerInfo';
import RootPage from './components/RootPage';


class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Switch>
          <HomeContainer>
            <Route component={({ match }) =>
              <div>
                <Route exact path="/" component={RootPage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Register}/>
                <Route path='/about' component={About} />
                <Route path='/privacypolicy' component={Privacy} />
                <Route path="/termscondition" component={Terms} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/bus-booking" component={Dashboard} />
                <Route path="/forgotpassword" component={Forgotpassword} />
                <Route path="/resetpassword" component={Resetpassword} />
                <Route path='/faq' component={Faq} />
                <Route path="/careers" component={Career}/>
                <Route path="/cab-booking" component={Cabbooking}/>
                <Route path="error" component={Error} />
                <Route path="/passenger" component={PassengerInfo} />
              </div>
            }/>
          </HomeContainer>
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
