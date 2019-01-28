import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import "./index.scss";
import ceoImg from '../../../img/img_avatar1.png';

class About extends React.Component {
  render() {
    return (
        <Grid>
           <Row><h4>About us</h4>
           <p>digital bihar is India’s largest online bus ticketing platform that has transformed bus travel in the country by
              bringing ease and convenience to millions of Indians who travel using buses. Founded in 2014. By providing widest 
              choice, superior customer service, lowest prices and unmatched benefits, digital bihar has served over 8 million 
              customers have used one or more of our comprehensive travel-related services, which include bus ticketing, cab booking, hotel bookings, activities and ancillary services. we are
              India's largest platform for domestic hotels. We are a leading online travel company in India providing a 'best in class' customer experience with the goal 
              to be 'India's Travel Planner'. Through our website, www.digitalbihar.com, our other associated platforms,
               leisure and business travelers can explore, research, compare prices and book a wide range of services catering 
               to their travel needs.</p><br/>
               <p>A strong and "trusted" travel brand of India, our strengths include a large and loyal customer base, 
                 a multi-channel platform for leisure and business travelers, a robust mobile eco-system for a spectrum of
                 travelers and suppliers, a strong technology platform designed to deliver a high level of scalability 
                 and innovation and a seasoned senior management team comprising of industry executives with deep roots
                  in the travel industry in India and abroad.</p>
              <hr/>
              <h3>Management Team  </h3>
              <div className="media">
                  <div class="media-left media-top">
                      <Image src={ceoImg} circle class="media-object" width="80" />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Tej Narayan Shahu</h4>
                    <p>Prakash Sangam has been Chief Executive Officer of redBus since June 2014. Prior to redBus. He served as an Executive Vice President of Info Edge India (Naukri group), heading two group businesses namely Shiksha.com and Jeevansathi.com. He’s also worked as General Manager of Marketing and Innovation at Airtel and has also had multiple roles across Marketing, Brand Management and Sales at Hindustan Unilever. Prakash has completed his MBA from IIM Calcutta and also holds an Honours degree in Production Engineering from Mumbai University.</p>
                  </div>
              </div>
              <div className="media">
                  <div class="media-left media-top">
                      <Image src={ceoImg} circle class="media-object" width="80" />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Tej Narayan Shahu</h4>
                    <p>Prakash Sangam has been Chief Executive Officer of redBus since June 2014. Prior to redBus. He served as an Executive Vice President of Info Edge India (Naukri group), heading two group businesses namely Shiksha.com and Jeevansathi.com. He’s also worked as General Manager of Marketing and Innovation at Airtel and has also had multiple roles across Marketing, Brand Management and Sales at Hindustan Unilever. Prakash has completed his MBA from IIM Calcutta and also holds an Honours degree in Production Engineering from Mumbai University.</p>
                  </div>
              </div>
              <div className="media">
                  <div class="media-left media-top">
                      <Image src={ceoImg} circle class="media-object" width="80" />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Tej Narayan Shahu</h4>
                    <p>Prakash Sangam has been Chief Executive Officer of redBus since June 2014. Prior to redBus. He served as an Executive Vice President of Info Edge India (Naukri group), heading two group businesses namely Shiksha.com and Jeevansathi.com. He’s also worked as General Manager of Marketing and Innovation at Airtel and has also had multiple roles across Marketing, Brand Management and Sales at Hindustan Unilever. Prakash has completed his MBA from IIM Calcutta and also holds an Honours degree in Production Engineering from Mumbai University.</p>
                  </div>
              </div>              
            </Row>
        </Grid>
    );
  }
}

export default About;
About.contextTypes = {
  router: PropTypes.object
};