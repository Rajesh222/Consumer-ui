import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Dashboard from '../Dashboard';

class Home extends React.Component {
 
  render() {
   
    return (
      <div>
        <Header />
        <div>Hello</div>
        <Footer />
      </div>     
    );
  }
}

export default Home;