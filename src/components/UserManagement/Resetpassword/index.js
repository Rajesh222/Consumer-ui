import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Glyphicon } from "react-bootstrap";
import "./index.scss";
import Axios from 'axios';
import { showToastrOnSuccess } from '../../utils/common';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Resetpassword extends Component {

  state = {
    password: '',
    confirmPassword: ''
  }
  validateForm = ()=> {
    return this.state.password.length > 0 && this.state.password.length > 0;
  }  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const loginUrl = `http://localhost:8080/BiharConsumer/api/v0/auth/forgotPassword?email=${email}`;
    Axios.post(loginUrl)
      .then(res => {
        console.log(res.data.data)
       
      })

  }
  render() {
    console.log('stateL ',this.state)
    return (
      <div className="forgot">
        <div className="forgot-form">
          <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
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

Resetpassword.contextTypes = {
  router: PropTypes.object
};