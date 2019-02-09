import React, { Component } from 'react';
import CarouselPage from '../CarouselPage';
import "./index.scss";
import { Grid, Row,Col,Label, Input,Button, FormGroup, FormControl, Table } from "react-bootstrap";
import Loader from '../common/Loader';


export default class RootPage extends Component {

    render() {
        return (
        <Grid>
           <Row>
                <Col md={12}>
                    <CarouselPage />
                </Col>
            </Row>
            <Row>
                <Col xs={12} >
                  <h3>Top Bus Routes</h3>
                </Col>
                <Col xs={12}>
                  <Table striped bordered hover table table-condensed table-responsive>
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Price</th>
                            <th>Total Operator</th>
                            <th>Bus</th>
                            <th>Durection</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Delhi to Gaya</td>
                            <td>900</td>
                            <td>30</td>
                            <td>30</td>
                            <td>1300 KM</td>
                        </tr>
                        <tr>
                        <td>Delhi to Patna</td>
                            <td>900</td>
                            <td>30</td>
                            <td>30</td>
                            <td>1400 KM</td>
                        </tr>
                        <tr>
                            <td>Delhi to Allahabad</td>
                            <td>200</td>
                            <td>50</td>
                            <td>95</td>
                            <td>900 KM</td>
                        </tr>
                        <tr>
                            <td>Indore To Bhopal</td>
                            <td>200</td>
                            <td>50</td>
                            <td>9</td>
                            <td>195 KM</td>
                        </tr>
                        <tr>
                            <td>Pune To Indore</td>
                            <td>600</td>
                            <td>12</td>
                            <td>5</td>
                            <td>593 KM</td>
                        </tr> 
                        <tr>
                            <td>Bangalore to Hyderabad</td>
                            <td>500</td>
                            <td>2</td>
                            <td>4</td>
                            <td>900</td>
                        </tr>                       
                    </tbody>
                  </Table>
                </Col>
            </Row>
            <Row>
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
           </Row>   
        </Grid>
        );
    }
}