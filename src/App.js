import React, { Component } from 'react';
import './App.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/Home';
import About from './components/common/About';
import Privacy from './components/common/Privacy';
import Terms from './components/common/Terms';
import Error from './components/common/Error';
import Contact from './components/common/Contact';
import Register from './components/Registation';


class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Switch>
          <Home>
            <Route component={({ match }) =>
              <div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path='/about' component={About} />
                <Route path='/privacypolicy' component={Privacy} />
                <Route path="/termscondition" component={Terms} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/bus-booking" component={Dashboard} />
                <Route path="/forgotpassword" component={Forgotpassword} />
                <Route path="/resetpassword" component={Resetpassword} />
                <Route path="/signup" component={Register}/>
                <Route path="error" component={Error} />
              </div>
            }/>
          </Home>
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
