import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import "./index.scss";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-about banner--about">
          <div className="banner__bg-container-about">
              <Grid>About Us</Grid>
          </div>
        </div>
        <Grid>
           <Row style={{textAlign:"center"}}><p>Our goal is to make digital payments so easy, safe and universally accepted that people never feel the need to carry cash or cards again. We believe India is at the cusp of a new mobile revolution, which will change the way we manage our money on the go. We see ourselves facilitating this change, through technology and dogged customer centricity.</p></Row>

        </Grid>
    </div>
    );
  }
}

export default About;
About.contextTypes = {
  router: PropTypes.object
};