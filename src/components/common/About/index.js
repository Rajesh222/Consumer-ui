import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

class About extends React.Component {
  render() {
    return (
      <div>Hello About</div>
    );
  }
}

export default About;
About.contextTypes = {
  router: PropTypes.object
};