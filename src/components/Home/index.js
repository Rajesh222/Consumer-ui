import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Home extends React.Component {
 
  render() {
   
    return (
      <div>
        <Header/>
          {this.props.children}
        <Footer />
      </div>     
    );
  }
}

export default Home;