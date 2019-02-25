import React, { Component } from 'react';
import { Grid, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class BoadingPoint extends Component {

    render() {
        console.log("::::",droppingLocations, boardingLocations) 
        const droppingLocations = this.props.droppingLocations;
        const boardingLocations = this.props.boardingLocations;
        return (
             <div className="rowBox">
                <Row> 
                    <Col md={6} lg={6} xs={6} className="rowCol">
                         <div className="rowBoxHeader">Boarding Points</div>
                       {droppingLocations && droppingLocations.map((item)=>{
                            return (   
                                <div className="_2MtA"> 
                                   <div className="LETL">
                                        <span className="_3flX"></span> {item.locationName}
                                   </div>
                                </div>                
                            )
                        })}
                    </Col>
                    <Col md={6} lg={6} xs={6} className="rowCol">
                        <div className="rowBoxHeader">Dropping Points</div>
                        {droppingLocations && droppingLocations.map((item)=>{
                            return (                   
                                <div className="_2MtA"> 
                                   <div className="LETL">
                                        <span className="_3flX"></span> {item.locationName}
                                   </div>
                                </div>
                            )
                        })}
                    </Col>            
                </Row>
             </div>
        )        
    }

}