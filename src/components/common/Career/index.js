import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import "./index.scss";
import ceoImg from '../../../img/img_avatar1.png';

class Career extends React.Component {
  render() {
    return (
        <Grid>
           <Row>
               <h3>Join Digital Bihar</h3>
               <strong>If you are looking for excitement and challenge, and are fascinated by the travel industry, we are looking for you!
Are you ready for the adrenaline rush of working at Digital bihar? Drop us a mail at jobs@digitalbihar.com and we shall get back to you</strong>
           </Row>
        </Grid>
        );
    }
  }
export default Career;
Career.contextTypes = {
  router: PropTypes.object
};