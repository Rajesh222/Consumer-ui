import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import config from '../../config.js';
import "./index.scss";
import Axios from 'axios';
import { showToastrOnSuccess } from '../../utils/common';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const body = {
        email: this.state.email,
        password: this.state.password
    }
    const baseUrl = config.baseUrl;
    const loginUrl = `${baseUrl}auth/serviceLoginAuth`;
    Axios.post(loginUrl, body)
      .then(res => {
        showToastrOnSuccess('Success Message');
        localStorage.setItem('loginData', JSON.stringify(res.data.data));
        if(res.data.data) {
          this.context.router.history.push('/dashboard');
        }
      })

  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <div className="forgot-password">
            <a href="/forgotpassword">Forgot Password?</a>
          </div>
          <Button
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
};