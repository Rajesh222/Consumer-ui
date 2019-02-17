import React, { Component } from 'react';
import "./index.scss";
import Header from '../Header';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

class Home extends React.Component {
 
  render() {
   
    return (
      <div>
        <Header/>
          {this.props.children}
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        <Footer />
      </div>     
    );
  }
}

export default Home;