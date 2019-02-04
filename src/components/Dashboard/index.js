import React, { Component } from "react";
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import config from '../../config.js';
import Collapsible from '../common/Collapsible';
import Bookbus from '../Bookbus';
import Filter from '../Filter';

export default class Dashboard extends Component {
    state = {
        selectedSource: null,
        selectedDestination: null,
        sourceError: false,
        destinationError: false,
        cities: [],
        filterValue: [], 
        searchDate: new Date(),
        newSearch: [],
        searchResult: [
            {
              "boardingLocations": [
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "1",
                  "displayName": null,
                  "locationName": "DELHA",
                  "locationAddress": "Postmaster, Post Office DELHA (SUB OFFICE), GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "2",
                  "displayName": null,
                  "locationName": "AN COLLEGE",
                  "locationAddress": "AN COLLEGE, GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "3",
                  "displayName": null,
                  "locationName": "MERZAGALI COLLEGE",
                  "locationAddress": "MIRZAGALI COLLEGE GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "4",
                  "displayName": null,
                  "locationName": "AP COLONY GAYA",
                  "locationAddress": "AP COLONY GAYA",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1546540200000,
                  "contactNumber": "8130787891"
                }
              ],
              "droppingLocations": [
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "1",
                  "displayName": null,
                  "locationName": "DELHA",
                  "locationAddress": "Postmaster, Post Office DELHA (SUB OFFICE), GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "2",
                  "displayName": null,
                  "locationName": "AN COLLEGE",
                  "locationAddress": "AN COLLEGE, GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "3",
                  "displayName": null,
                  "locationName": "MERZAGALI COLLEGE",
                  "locationAddress": "MIRZAGALI COLLEGE GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "4",
                  "displayName": null,
                  "locationName": "AP COLONY GAYA",
                  "locationAddress": "AP COLONY GAYA",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1546540200000,
                  "contactNumber": "8130787891"
                }
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
                1200.0
              ],
              "classType": "Normal",
              "busId": "1",
              "travelsName": "SATYAM TRAVELS",
              "busType": "NON A/C Seater/Sleaper",
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
              "seatType": "Seater/Sleaper",
              "boardingTime": "",
              "reportingTime": "",
              "source": "NEW DELHI",
              "destination": "AGRA",
              "busNumber": "BR20",
              "sleaper": false,
              "ac": false
            },
            {
              "boardingLocations": [
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "1",
                  "displayName": null,
                  "locationName": "DELHA",
                  "locationAddress": "Postmaster, Post Office DELHA (SUB OFFICE), GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "2",
                  "displayName": null,
                  "locationName": "AN COLLEGE",
                  "locationAddress": "AN COLLEGE, GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "3",
                  "displayName": null,
                  "locationName": "MERZAGALI COLLEGE",
                  "locationAddress": "MIRZAGALI COLLEGE GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "4",
                  "displayName": null,
                  "locationName": "AP COLONY GAYA",
                  "locationAddress": "AP COLONY GAYA",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1546540200000,
                  "contactNumber": "8130787891"
                }
              ],
              "droppingLocations": [
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "1",
                  "displayName": null,
                  "locationName": "DELHA",
                  "locationAddress": "Postmaster, Post Office DELHA (SUB OFFICE), GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "2",
                  "displayName": null,
                  "locationName": "AN COLLEGE",
                  "locationAddress": "AN COLLEGE, GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "3",
                  "displayName": null,
                  "locationName": "MERZAGALI COLLEGE",
                  "locationAddress": "MIRZAGALI COLLEGE GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1547404200000,
                  "contactNumber": "8130787891"
                },
                {
                  "createdBy": null,
                  "createdOn": null,
                  "modifyBy": null,
                  "modifyOn": null,
                  "locationId": "4",
                  "displayName": null,
                  "locationName": "AP COLONY GAYA",
                  "locationAddress": "AP COLONY GAYA",
                  "landmark": null,
                  "dateTime": null,
                  "lat": 0.0,
                  "lng": 0.0,
                  "boardingDate": 1547404200000,
                  "reportingTime": 1546540200000,
                  "contactNumber": "8130787891"
                }
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
                1200.0
              ],
              "classType": "Normal",
              "busId": "1",
              "travelsName": "SATYAM TRAVELS",
              "busType": "NON A/C Seater/Sleaper",
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
              "seatType": "Seater/Sleaper",
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
 
    handleCheck = (e) => {
        const filterValue = this.state.filterValue;
        const index = filterValue.indexOf(e.target.value);
        if (index > -1) {
            filterValue.splice(index, 1);
        } else {
            filterValue.push(e.target.value)
        }
        this.setState({ filterValue });
        const searchResult = this.state.searchResult;
        let newSearch = [];
        filterValue.forEach(element => {
            newSearch.push(... searchResult.filter((result)=>{
                return result.busType.toLowerCase().indexOf(element.toLowerCase()) > -1;
            }))
        });
        if (filterValue.length === 0) {
            newSearch = searchResult;
        }
        this.setState({ newSearch });
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
                date: this.state.searchDate,
                destinationName: this.state.selectedDestination.value.toLowerCase(),
                sourceName:  this.state.selectedSource.value.toLowerCase()
            }
            Axios.post(url, body).then((res)=> {
                if(res.data) {
                this.setState({searchResult: res.data.data, newSearch: res.data.data})
                }
            }).catch((error) => {
                console.log(error);
            })
        } else {
            return;
        }
        
    }
    render() {
        const { selectedSource , newSearch, selectedDestination, searchResult, searchDate, sourceError, destinationError } = this.state;
        const citiesOptions = this.state.cities.map(item => ({ label: item.cityName, value: item.cityName }));
        return (
            <div>
            <Grid>
                <Row className="show-grid source">
                    <Col sm={4} md={4} xs={4}>
                        <Select
                            value={selectedSource}
                            onChange={this.handleSourceChange}
                            options={citiesOptions}
                            isSearchable={true}
                            placeholder="Select Source City"
                        />
                       {sourceError && <span className="error-message">Please Select Source</span>}
                    </Col>
                    <Col sm={4} md={4} xs={4}>
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
                    <Col sm={2} md={2} xs={2}>
                        <DatePicker selected={searchDate} onChange={this.handleChange} placeholderText="Select a date"/>
                    </Col>
                    <Col sm={2} md={2} xs={2}>
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
                <Grid>
                    <Row>
                        <Col md={2} className="filter">
                            <Filter handleCheck={this.handleCheck} filterValue={this.state.filterValue}/>
                        </Col >
                        <div className="clearfix visible-xs"></div>
                        <Col md={10}>
                            <Row>
                                <Col md={3} className="head">Traveller</Col>
                                <Col md={3} className="head">Departure Time</Col>
                                <Col md={2} className="head">Arrival Time</Col>
                                <Col md={1} className="head">Fare</Col>
                                <Col md={2} className="head">Availability</Col>
                            </Row>
                            
                            {newSearch.map((item, index)=>{
                            return <div>
                                <Bookbus key={index} busDetails={item} />
                            </div>     
                            })}
                        </Col>
                        
                    </Row>
                </Grid>
            </Grid>
        
         </div>
        )
   }
}