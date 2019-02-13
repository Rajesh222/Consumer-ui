import React, { Component } from "react";
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import config from '../../../config.js';
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
        newSearch: [ {
            "boardingLocations": [
              {
                "id": "5",
                "cityName": "Delhi",
                "locationName": "New Delhi",
                "locationAddress": "New Delhi Metro Station",
                "landmark": "Delhi",
                "lat": 0.0,
                "lng": 0.0,
                "busid": "1",
                "date": "2019-01-14",
                "time": "00:00:00",
                "contactNumber": "8130787891"
              }
            ],
            "droppingLocations": [
              {
                "id": "1",
                "cityName": "Gaya",
                "locationName": "DELHA",
                "locationAddress": "Postmaster, Post Office DELHA (SUB OFFICE), GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                "landmark": "GAYA",
                "lat": 0.0,
                "lng": 0.0,
                "busid": "1",
                "date": "2019-01-14",
                "time": "13:30:00",
                "contactNumber": "8130787891"
              },
              {
                "id": "2",
                "cityName": "Gaya",
                "locationName": "AN COLLEGE",
                "locationAddress": "AN COLLEGE, GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                "landmark": "GAYA",
                "lat": 0.0,
                "lng": 0.0,
                "busid": "1",
                "date": "2019-01-14",
                "time": "13:30:00",
                "contactNumber": "8130787891"
              },
              {
                "id": "3",
                "cityName": "Gaya",
                "locationName": "MERZAGALI COLLEGE",
                "locationAddress": "MIRZAGALI COLLEGE GAYA, BIHAR (BR), India (IN), Pin Code:- 823002",
                "landmark": "GAYA",
                "lat": 0.0,
                "lng": 0.0,
                "busid": "1",
                "date": "2019-01-14",
                "time": "13:30:00",
                "contactNumber": "8130787891"
              },
              {
                "id": "4",
                "cityName": "Gaya",
                "locationName": "AP COLONY GAYA",
                "locationAddress": "AP COLONY GAYA",
                "landmark": "GAYA",
                "lat": 0.0,
                "lng": 0.0,
                "busid": "1",
                "date": "2019-01-14",
                "time": "13:30:00",
                "contactNumber": "8130787891"
              }
            ],
            "busInfo": [
              
            ],
            "cancellationPolicy": [
              {
                "ruleId": "1",
                "busid": "1",
                "departureheading": "Hours before Departure",
                "policyheading": "Refund Percentage"
              },
              {
                "ruleId": "2",
                "busid": "1",
                "departureheading": "Between 0 Hrs. to 12 Hrs.",
                "policyheading": "0%"
              },
              {
                "ruleId": "3",
                "busid": "1",
                "departureheading": "Between 12 Hrs. to 24 Hrs.",
                "policyheading": "50%"
              },
              {
                "ruleId": "4",
                "busid": "1",
                "departureheading": "Before 24 Hrs.",
                "policyheading": "90%"
              }
            ],
            "amenities": [
              2,
              1
            ],
            "bustypes": [
              
            ],
            "fares": [
              300.0
            ],
            "inclTaxes": true,
            "classType": "Normal",
            "busId": "1",
            "travelsName": "AJANTA TRAVELS PVT LTD",
            "busType": "AC Sleeper/Seater TATA 2+2 Air Suspension",
            "duration": 200.0,
            "idProofRequired": true,
            "rating": 4.0,
            "routId": "6",
            "totalSeats": 40.0,
            "availableSeats": 0.0,
            "distance": 0.0,
            "arrivalDate": "2019-01-31",
            "arrivalTime": "15:07:41",
            "departureDate": "2019-01-31",
            "departureTime": "15:07:21",
            "seatType": null,
            "source": "Delhi",
            "destination": "Gaya",
            "sleaper": true,
            "refundable": true,
            "seater": true,
            "ac": true
          }],
        searchResult: [   
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
            const source= this.state.selectedSource.value.toLowerCase();
            const dest= this.state.selectedDestination.value.toLowerCase();
            const url = `${baseUrl}${config.searchRoute}/${source}/${dest}/${this.state.searchDate}`;
            Axios.get(url).then((res)=> {
                console.log(res)
                if(res.data) {
                this.setState({searchResult: res.data.data.filterRouteList, newSearch: res.data.data.filterRouteList})
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
        const citiesOptions = this.state.cities.map(item => ({ label: item.displayName, value: item.cityName }));
        return (
            <div>
            <Grid style={{width:"100%"}}>
                <Row className="search_pannel">
                    <Col sm={6} md={4} xs={6} style={{paddingBottom:5}}>
                        <Select value={selectedSource} onChange={this.handleSourceChange} autosize={true} options={citiesOptions} isSearchable={true} placeholder="Source City"/>
                       {sourceError && <span className="error-message">Please Select Source</span>}
                    </Col>
                    <Col sm={6} md={4} xs={6} style={{paddingBottom:5}}>
                        <Select value={selectedDestination} onChange={this.handleDestinationChange} options={citiesOptions} autosize={true} placeholder="Destination City" isSearchable={true}/>
                        {destinationError &&<span className="error-message">Please Select Destination</span>}
                    </Col>
                    <Col sm={6} md={2} xs={6} style={{paddingBottom:5}}>
                        <DatePicker selected={searchDate} onChange={this.handleChange} placeholderText="dd-mm-yyyy"/>
                    </Col>
                    <Col sm={6} md={2} xs={6} style={{paddingBottom:5}}>
                        <Button block bsStyle="primary" className="searchbtn" onClick={this.handleSearch} type="submit">Search</Button>
                    </Col>
                </Row>
                {newSearch && newSearch.length > 0 ? <Row className="bus_pannel">
                    <Col xs={3} className="left_pannel">
                        <Filter handleCheck={this.handleCheck} filterValue={this.state.filterValue}/>
                    </Col >
                    <Col xs={9} className="right_pannel">
                        <Row className="businfo">
                            <Col xs={3} sm={3} lg={3} md={3}>Traveller</Col>
                            <Col xs={3} sm={3} lg={3} md={3}>Departure Time</Col>
                            <Col xs={2} sm={2} lg={2} md={2}>Arrival Time</Col>
                            <Col xs={1} sm={1} lg={1} md={1}>Fare</Col>
                            <Col xs={3} sm={2} lg={2} md={3}>Availability</Col>
                        </Row>
                        {newSearch.map((item, index)=>{
                        return <div>
                            <Bookbus key={index} busDetails={item} />
                        </div>     
                        })}
                    </Col>                      
                </Row> : <div></div>} 
            </Grid>            
         </div>
        )
   }
}