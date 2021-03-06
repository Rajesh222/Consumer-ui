import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import "./index.scss";

export default class TravellerInfo extends Component {
    render () {
        return (
        <div className="passenger-info">
            <div className="banner">
                 <span className="bannerheader">01</span>
                 Review Itinerary
             </div>
            <div className="passengercontaint">
             <Row>
                <Col md={3} lg={3} xs={6} sm={6}>
                    <div style={{width:"100px",height:"80px",background:"#e9edee",borderTopLeftRadius:"20px",borderTopRightRadius:"20px",border: "0.5px solid gray"}}>
                      <div style={{borderBottom:"0.5px solid gray",textAlign:"center",background:"yellow",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>onword</div>
                      <div style={{marginTop: "20px",textAlign:"center"}}>11KM</div>
                    </div>
                </Col>
                <Col md={3} lg={3} xs={6} sm={6}>
                   <div style={{fontWeight:"600"}}>
                      <span style={{fontWeight:"700",fontSize:"1.8rem"}}>7:00 AM</span>
                      <span> Delhi</span>
                   </div>
                   <div style={{color:"#909090", fontSize:"1.1rem",marginBottom:"5px"}}>Thu, 28 February</div>
                   <div style={{fontSize:"1rem",color:"#4a4a4a",textTransform:"capitalize"}}><span style={{fontWeight:"700"}}>Delhi to varanasi r k ashram  metro station pillar no 10</span></div>
                </Col>
                <Col md={3} lg={3} xs={6} sm={6}>
                    <div style={{fontWeight:"600"}}>
                      <span style={{fontWeight:"700",fontSize:"1.8rem"}}>7:00 AM</span>
                      <span> Gaya</span>
                   </div>
                   <div style={{color:"#909090", fontSize:"1.1rem",marginBottom:"5px"}}>Thu, 28 February</div>
                   <div style={{fontSize:"1rem",color:"#4a4a4a",textTransform:"capitalize"}}><span style={{fontWeight:"700"}}>Delhi to varanasi r k ashram  metro station pillar no 10</span></div>
                </Col>
                <Col md={3} lg={3} xs={6} sm={6}>
                    <div style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:"1.8rem",color:"#4a4a4a",textTransform:"capitalize"}}>RSYadavTravels Bus</div>
                     <div style={{opacity:".4",fontWeight:"600",color:"#4d4d4d", marginBottom:"5px"}}>A/C, SEATER SLEEPER</div>
                    <div style={{fontSize: "1.2rem"}}>Seats:M,F</div>
                </Col>
            </Row>
         </div>
      </div>
        )
    }
}