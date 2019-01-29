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
             </Row>
            <Row className="team">
                <h3>Management Team  </h3>
                <div className="media">
                    <div class="media-left media-top">
                        <Image src={ceoImg} circle class="media-object" width="80" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Tej Narayan Shahu <small><i>Founder & Chief Executive Officer (CEO)</i></small></h4>   
                        <p>Tej Narayan Shahu has been Chief Executive Officer of digitalbihar since June 2014. Prior to digitalbihar. He’s also worked as General Manager of Marketing and Innovation at digitalbihar and has also had multiple roles across Marketing, Brand Management and Sales at Hindustan Unilever. Prakash has completed his MBA from IIM Calcutta and also holds an Honours degree in Production Engineering from Mumbai University.</p>
                        <p>Tej Narayan's vision is to reinvent bus travel in India through digitalbihar.com and in the process make the online portal the preferred choice for booking bus tickets where everyone admires the company for its performance, people and partnerships.</p>
                    </div>
                </div>
                <div className="media">
                    <div class="media-left media-top">
                        <Image src={ceoImg} circle class="media-object" width="80" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Krishna Kumar <small><i>Chief Operating Officer & Chief Strategy Officer</i></small></h4>
                        <p>Krishna is the Chief Operating Officer & Chief Strategy Officer of Digital bihar Private limited. Krishna joined digital bihar in Jan 2019, prior to that he has expended over nearly two decades in the Indian B2B media industry at a leadership position as the Vice President of one of India’s largest publishing house.</p>
                        <p>Krishna brings in deep experience in business strategy, partnerships, sales & marketing and in running highly cost effective operations. Noted for a comprehensive, practical, management style focused on turnaround strategies and a stout boardroom presence, Biju Mathews is a growth oriented, focused leader with repeated success in sales & marketing, expanding service offerings, building shareholder value, driving vision and achieving critical strategic goals.</p>
                        <p>Currently as Chief Operating Office at Digital bihar, Krishna leads major functions like business development, sales, marketing and operations, Working closely with the board and top management, Krishna ensures that both long term and short term strategic goals are implemented seamlessly at digital bihar.</p>
                    </div>
                </div>
                <div className="media">
                    <div class="media-left media-top">
                        <Image src={ceoImg} circle class="media-object" width="80" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">S Kumar <small><i>Chief Technology Officer (CTO)</i></small></h4>
                        <p>S Kumar serves as Chief Technology Officer for digital bihar India Pvt. Ltd. He is responsible
                        for defining an integral role in setting the company’s strategic direction, development and deploying the technology
                        future growth. At bigital bihar, he leads effective delivery 
                        of scalable systems to the customers, agents and bus operators by incorporating the latest technology.
                        A tech enthusiast, Satyam comes with over 6 years of extensive experience in building scalable and 
                        high-performing products across telecom, internet and mobile ecommerce domains. Satyam strongly believes
                        that hard work and commitment can overcome the barriers to success.</p>
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