import React, { Component } from "react";
import { Grid, Row,Col,Label, Input,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import config from '../../config.js';
import "./index.scss";
import Axios from 'axios';
import { showToastrOnSuccess } from '../../utils/common';
import PropTypes from 'prop-types';
import toastr from 'reactjs-toastr';


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
        toastr.success('Success Message', 'Title', {displayDuration:3000});
        localStorage.setItem('loginData', JSON.stringify(res.data.data));
        if(res.data.data) {
          this.context.router.history.push('/dashboard');
        }
      })

  }

  render() {
    return (
      <Grid className="loginContainer">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit} className="loginform">
         <Col>
            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus type="text" placeholder="Enter phone/email" value={this.state.email} onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl value={this.state.password} onChange={this.handleChange} type="password" placeholder="********"/>
            </FormGroup>
          </Col>
          <Col>
             <div className="forgot-password"><a href="/forgotpassword">Forgot Password?</a> </div>
          </Col>
          <Button block bsStyle="primary" disabled={!this.validateForm()} type="submit">Login</Button>
        </form>
      </Grid>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
};