import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './index.scss';

class Error extends React.Component {
  render() {
    return(
      <div className="row">
          <div className="col-md-12">
              <div className= {styles.errorTemplate}>
                  <h1 className="text-warning">
                      Oops!</h1>
                    <h1 className="text-danger">
                      <strong>404</strong> Not Found</h1>
                  <h3 className="text-muted">
                      Sorry, an error has occured, Requested page not found!
                  </h3>
                  <div className={styles.errorActions}>
                    <Link to={`/`}><button type="button" className="btn btn-primary btn-lg"
                      onClick={this.takeHome}>Take Me Home</button></Link>
                  </div>
                  { this.state.remainingTime &&
                  <div>
                    <hr />
                    <div className="row">
                      <h3>You will be redirected to home page in {this.state.remainingTime/1000} seconds</h3>
                    </div>
                  </div>
                  }
              </div>
          </div>
        </div>
    );
                }
}

export default Error;
Error.contextTypes = {
  router: PropTypes.object
};
