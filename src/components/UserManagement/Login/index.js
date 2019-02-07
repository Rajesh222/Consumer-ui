import React, { Component } from "react";
import { Grid, Row,Col,Label, Input,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import config from '../../../config.js';
import "./index.scss";
import Axios from 'axios';
import { showToastrOnSuccess } from '../../../utils/common';
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
          this.context.router.history.push('/bus-booking');
        }
      })

  }

  render() {
    return (
      <Grid className="loginContainer">
        <h3 style={{textAlign:"center"}}>Sign In</h3>
        <form onSubmit={this.handleSubmit} className="loginform">
        <Row >
        <Col md={2}></Col>
        <Col md={8}>
            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus type="text" placeholder="Enter phone/email" value={this.state.email} onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
         <Row>
         <Col md={2}></Col>
        <Col md={8}>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl value={this.state.password} onChange={this.handleChange} type="password" placeholder="********"/>
            </FormGroup>
          </Col>
         </Row>
          <Row>
          <Col md={2}></Col>
        <Col md={8}>
             <div className="forgot-password"><a href="/forgotpassword">Forgot Password?</a> </div>
          </Col>
          </Row>
          <Row>
          <Col md={2}></Col>
        <Col md={8}>
              <Button block bsStyle="primary" disabled={!this.validateForm()} type="submit">Login</Button>
            </Col>
          </Row>
         
        </form>
      </Grid>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
};