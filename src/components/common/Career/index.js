import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import "./index.scss";
import CareerImg from '../../../img/career.jpg';


class Career extends React.Component {
  render() {
    return (
        <Grid style={{minHeight:"400px"}}>
           <Row>
           <img alt="About" src={CareerImg} width="100%" height="249"/>
           </Row>
           <Row className="career">
              <Col md={12} xs={12}>
               <h3>Career</h3>
               <p>
Take a look at the many exciting job opportunities at Digital Bihar. At Digital Bihar, we are committed to attracting and retaining the best people in our field. We strive to create an excellent working environment for our employees, just as we aspire to create a memorable experience for our customers. Recognizing the importance of having a healthy balance between work & personal life, we offer exciting and challenging career opportunities, and also give individuals the chance to grow personally and explore life.</p>
              <p>The Digital Bihar team is part of Digital Bihar India Pvt. Limited, which has an impeccable reputation that is unrivaled throughout the industry. </p>
               <p>If you are looking for excitement and challenge, and are fascinated by the travel industry, we are looking for you!
Are you ready for the adrenaline rush of working at Digital bihar? Drop us a mail at jobs@digitalbihar.com and we shall get back to you</p>
               </Col>          
              </Row>
        </Grid>
        );
    }
  }
export default Career;
Career.contextTypes = {
  router: PropTypes.object
};