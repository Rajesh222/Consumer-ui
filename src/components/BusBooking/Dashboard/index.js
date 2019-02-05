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
        newSearch: [],
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
            const url = `${baseUrl}${config.availability}`;
            const body = {
                date: this.state.searchDate,
                destinationName: this.state.selectedDestination.value.toLowerCase(),
                sourceName:  this.state.selectedSource.value.toLowerCase()
            }
            Axios.post(url, body).then((res)=> {
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