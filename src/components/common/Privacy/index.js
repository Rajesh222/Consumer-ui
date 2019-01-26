import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

class Privacy extends React.Component {
  render() {
    return (
      <div>Hello Privacy</div>
    );
  }
}

export default Privacy;
Privacy.contextTypes = {
  router: PropTypes.object
};