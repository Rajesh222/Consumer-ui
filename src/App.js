import React, { Component } from 'react';
import './App.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/Home';
import About from './components/common/About';
import Privacy from './components/common/Privacy';
import Terms from './components/common/Terms';
import Error from './components/common/Error';
import Contact from './components/common/Contact';


class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Route path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/privacy" component={Privacy} />
         <Route path="/terms" component={Terms} />
         <Route path="/login" component={Login} />
         <Route path="/contact" component={Contact} />
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/forgotpassword" component={Forgotpassword} />
         <Route path="/resetpassword" component={Resetpassword} />
         <Route path="error" component={Error} />
       </div>
     </Router>
    );
  }
}

export default App;
