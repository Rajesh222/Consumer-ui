import React, { Component } from 'react';
import './App.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Route path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/forgotpassword" component={Forgotpassword} />
         <Route path="/resetpassword" component={Resetpassword} />
       </div>
     </Router>
    );
  }
}

export default App;
