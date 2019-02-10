import React, { Component } from 'react';
import "./index.scss";
import Header from '../Header';
import Footer from '../Footer';

class Home extends React.Component {
 
  render() {
   
    return (
      <div>
        <Header/>
          {this.props.children}
          <div>
            <a href="#" id="toTop" style={{display:"inline"}}><span id="toTopHover"></span>To Top</a>
          </div>
        <Footer />
      </div>     
    );
  }
}

export default Home;