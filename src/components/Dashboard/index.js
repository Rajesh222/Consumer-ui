import React, { Component } from "react";
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import config from '../../config.js';
import Collapsible from '../common/Collapsible';
import Bookbus from '../Bookbus';

import "react-datepicker/dist/react-datepicker.css";
export default class Dashboard extends Component {
    state = {
        selectedSource: null,
        selectedDestination: null,
        sourceError: false,
        destinationError: false,
        cities: [],
        searchDate: new Date(),
        searchResult: [
            {
              "createdBy": "SATYAM",
              "createdOn": 1544553000000,
              "modifyBy": "SATYAM",
              "modifyOn": 1544553000000,
              "boardingLocations": [
                
              ],
              "droppingLocations": [
                
              ],
              "busInfo": [
                
              ],
              "cancellationPolicy": [
                
              ],
              "amenities": [
                
              ],
              "busTypes": [
                
              ],
              "fare": [
                
              ],
              "classType": "Normal",
              "busId": "1",
              "travelsName": "SATYAM TRAVELS",
              "busType": null,
              "duration": "12",
              "idProofRequired": false,
              "rating": "0",
              "sourceId": "1",
              "destinationId": "5",
              "routId": "1",
              "totalSeats": 20.0,
              "avalableSeats": 20.0,
              "travelDurationDays": 1,
              "arrivalDate": "2018-12-12 13:30:00.0",
              "arrivalTime": "",
              "departureDate": "2018-12-12 13:30:00.0",
              "departureTime": "",
              "travelDate": "2019-01-21 18:18:10.957",
              "seatType": "S/SL",
              "boardingTime": "",
              "reportingTime": "",
              "source": "NEW DELHI",
              "destination": "AGRA",
              "busNumber": "BR20",
              "sleaper": false,
              "ac": false
            },
            {
              "createdBy": "SATYAM KUMAR",
              "createdOn": 1547922600000,
              "modifyBy": "SATYAM",
              "modifyOn": 1547922600000,
              "boardingLocations": [
                
              ],
              "droppingLocations": [
                
              ],
              "busInfo": [
                
              ],
              "cancellationPolicy": [
                
              ],
              "amenities": [
                
              ],
              "busTypes": [
                
              ],
              "fare": [
                
              ],
              "classType": "Normal",
              "busId": "1",
              "travelsName": "SATYAM TRAVELS",
              "busType": null,
              "duration": "12",
              "idProofRequired": false,
              "rating": "0",
              "sourceId": "1",
              "destinationId": "5",
              "routId": "7",
              "totalSeats": 20.0,
              "avalableSeats": 20.0,
              "travelDurationDays": 1,
              "arrivalDate": "2018-12-12 13:30:00.0",
              "arrivalTime": "",
              "departureDate": "2018-12-12 13:30:00.0",
              "departureTime": "",
              "travelDate": "2019-01-21 18:18:10.957",
              "seatType": "S/SL",
              "boardingTime": "",
              "reportingTime": "",
              "source": "RAPHIGANJ",
              "destination": "GAYA(BIHAR)",
              "busNumber": "BR20",
              "sleaper": false,
              "ac": false
            }
          ]
    }
 
    handleChange = searchDate => this.setState({ searchDate })
    handleSourceChange = (selectedSource) => {
        this.setState({ selectedSource, sourceError: false });
    }
    handleDestinationChange = (selectedDestination) => {
        this.setState({ selectedDestination, destinationError: false });
    }
    componentDidMount() {
        const baseUrl= config.baseUrl;
        const url = `${baseUrl}${config.cities}`;
        Axios.get(url).then((res) =>{
           this.setState({cities: res.data.data}) 
        }).catch((error)=> {
            console.log(error);
        });
    }
    handleSearch = ()=> {
        const { selectedSource, selectedDestination, searchDate } = this.state;
        if (!selectedSource) {
           this.setState({sourceError: true}); 
        }
        if (!selectedDestination) {
            this.setState({destinationError: true}); 
         }

        if (selectedSource && selectedDestination && searchDate) {
            const baseUrl= config.baseUrl;
            const url = `${baseUrl}${config.availability}`;
            const body = {
                date: this.state.date,
                destinationName: this.state.selectedDestination.value.toLowerCase(),
                sourceName:  this.state.selectedSource.value.toLowerCase()
            }
            Axios.post(url, body).then((res)=> {
                if(res.data) {
                this.setState({searchResult: res.data.data})
                }
            }).catch((error)=> {
                console.log(error);
            })
        } else {
            return;
        }
        
    }
    render() {
        const { selectedSource , selectedDestination, searchResult, searchDate, sourceError, destinationError } = this.state;
        const citiesOptions = this.state.cities.map(item => ({ label: item.cityName, value: item.cityName }));
        return (
            <div>
            <Grid>
                <Row className="show-grid source">
                    <Col xs={6} md={3}>
                        <Select
                            value={selectedSource}
                            onChange={this.handleSourceChange}
                            options={citiesOptions}
                            isSearchable={true}
                            placeholder="Select Source City"
                        />
                       {sourceError && <span className="error-message">Please Select Source</span>}
                    </Col>
                    <Col xs={6} md={3}>
                        <Select
                            value={selectedDestination}
                            onChange={this.handleDestinationChange}
                            options={citiesOptions}
                            placeholder="Select Destination City"
                            isSearchable={true}
                        >
                        </Select>
                        {destinationError &&<span className="error-message">Please Select Destination</span>}
                    </Col>
                    <Col xs={6} md={3}>
                    <DatePicker
                        selected={searchDate}
                        onChange={this.handleChange}
                        placeholderText="Select a date"
                    />
                    </Col>
                    <Col xs={6} md={2}>
                    <Button
                    block
                    bsStyle="primary"
                    onClick={this.handleSearch}
                    type="submit"
                    >
                            Search
                </Button>
                    </Col>
                </Row>
            </Grid>
            {searchResult.map((item, index)=>{
               return <Grid><Row><Col md={2}></Col><Col md={10}>
                        <Bookbus key={index} busDetails={item} />
                    </Col></Row></Grid>
            })}
         </div>
        )
   }
}