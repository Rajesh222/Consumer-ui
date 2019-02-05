import React, { Component } from 'react';
import CarouselPage from '../CarouselPage';
import "./index.scss";
import { Grid, Row,Col,Label, Input,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class RootPage extends Component {

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <CarouselPage />
                </div>
            </div>
            <div className="row">
              <div className="testimonials">
                <div className="q-left">“</div>
                    <div className="q-mid">
                        <p> Kudos to RTC for the initiative taken in providing Wi-fi internet facility in
                            major Bus Stations. Frequent travelers like me are now able to use the waiting
                                time productively. Request the RTC authorities to examine the possibility of
                                providing this facility in all remaining major Bus Stations.
                        </p>
                        <div className="customer">
                            Suresh<br/> <span>Marketing Executive</span>
                        </div>
                    </div>
                  
                <div className="q-right"> ”</div>
               </div>
           </div>     
        </div>
        );
    }
}