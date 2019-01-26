import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

class Terms extends React.Component {
  render() {
    return (
      <div>Hello Terms</div>
    );
  }
}

export default Terms;
Terms.contextTypes = {
  router: PropTypes.object
};