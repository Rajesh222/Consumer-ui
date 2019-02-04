import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import { Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Contact extends React.Component { 
    render () {                                   
        return (
          <Container>
          <h2>Sign In</h2>
          <Form>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="myemail@email.com" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="********" />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
        );
     }
  
}

export default Contact;
Contact.contextTypes = {
  router: PropTypes.object
};