import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

class Error extends React.Component {
  render() {
    return(
      <div>ERROR</div>
    );
   }
}

export default Error;
Error.contextTypes = {
  router: PropTypes.object
};
