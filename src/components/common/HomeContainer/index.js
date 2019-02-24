import React, { Component } from 'react';
import "./index.scss";
import Header from '../Header';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

class Home extends React.Component {
 
  render() {
   
    return (
      <>
        <Header/>
          {this.props.children}
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        <Footer />
      </>     
    );
  }
}

export default Home;