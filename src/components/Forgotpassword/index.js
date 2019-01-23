import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Glyphicon } from "react-bootstrap";
import "./index.scss";
import Axios from 'axios';
import { showToastrOnSuccess } from '../../utils/common';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import config from '../../config.js';

export default class Forgotpassword extends Component {

  state = {
    email: ''
  }
  validateForm = ()=> {
    return this.state.email.length > 0;
  }  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const baseUrl = config.baseUrl;
    const loginUrl = `${baseUrl}${config.fogotPassword}?email=${email}`;
    Axios.get(loginUrl)
      .then(res => {
        if(res.data.data) {
          this.context.router.history.push('/resetpassword');
        }
       
      })

  }
  render() {
    return (
      <div className="forgot">
        <div className="forgot-form">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
            <div className="main-heading">
            <h2>Forgot Password?</h2>
            <h6 className="heading">You can reset your password here.</h6>
            </div>
            
              <ControlLabel>Email/Mobile</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.email}
                placeholder="Please Enter Email/Mobile"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button
              block
              bsStyle="primary"
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Forgotpassword.contextTypes = {
  router: PropTypes.object
};