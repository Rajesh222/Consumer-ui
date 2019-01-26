import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Home extends React.Component {
 
  render() {
   
    return (
      <div>
        <Header />
        <section className="service-inner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="title">
                            <h2>Our Service</h2>
                            <p>We Provide Taxi Services &amp; Tours Packages in Delhi-NCR and Nearby Cities !</p>
                        </div>
                     </div>
                </div>
                <div className="row">
                     <div className="col-sm-12">
                          <div className="col-sm-3 inner-box">
                               <article>
                                    <div className="icon"><span className="flaticon-placeholder"></span></div>
                                    <div className="content-text">
                                        <h5>Top Tours Packages</h5>
                                        <p>We provide best tours and taxi services .</p>
                                    </div>
                               </article>
                          </div>
                          <div className="col-sm-3 inner-box">
                              <article>
                                  <div className="icon"><span className="flaticon-placeholder"></span></div>
                                  <div className="content-text">
                                      <h5>Top Tours Packages</h5>
                                      <p>We provide best tours and taxi services .</p>
                                  </div>
                              </article>
                          </div>
                          <div className="col-sm-3 inner-box">
                              <article>
                                  <div className="icon"><span className="flaticon-placeholder"></span></div>
                                  <div className="content-text">
                                      <h5>Top Tours Packages</h5>
                                      <p>We provide best tours and taxi services .</p>
                                  </div>
                              </article>
                          </div>
                          <div className="col-sm-3 inner-box">
                              <article>
                                  <div className="icon"><span className="flaticon-placeholder"></span></div>
                                  <div className="content-text">
                                      <h5>Top Tours Packages</h5>
                                      <p>We provide best tours and taxi services .</p>
                                  </div>
                              </article>
                          </div>
                     </div>
                </div>
            </div>
        </section>
        <Footer />
      </div>     
    );
  }
}

export default Home;