import React, { Component } from "react";
import Select from 'react-select';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './index.scss';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import config from '../../../config.js';
import BusList from '../BusList';
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
        console.log('newSearch: ',newSearch)
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
            const searchDate=  this.state.searchDate.getFullYear() + '-' + (this.state.searchDate.getMonth()+1) + '-' + this.state.searchDate.getDate();
            const url = `${baseUrl}${config.searchRoute}/${source}/${dest}/${searchDate}`;
            Axios.get(url).then((res)=> {
                if(res.data) {
                    console.log(res)
                this.setState({newSearch: res.data.data.availableRoutes})
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }
    render() {
        const { selectedSource , newSearch, selectedDestination, searchResult, searchDate, sourceError, destinationError } = this.state;
        const citiesOptions = this.state.cities.map(item => ({ label: item.displayName, value: item.cityName }));
        return (
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
                    <Col xs={12} sm={12} md={3} className="left_pannel">
                        <Filter handleCheck={this.handleCheck} filterValue={this.state.filterValue}/>
                    </Col >
                    <Col xs={12} sm={12} md={9} className="right_pannel">
                        <Row className="businfo">
                            <Col xs={3} sm={3} lg={3} md={3}>Traveller</Col>
                            <Col xs={3} sm={3} lg={3} md={3}>Departure Time</Col>
                            <Col xs={2} sm={2} lg={2} md={2}>Arrival Time</Col>
                            <Col xs={1} sm={1} lg={1} md={1}>Fare</Col>
                            <Col xs={3} sm={2} lg={2} md={3}>Availability</Col>
                        </Row>
                        {newSearch.map((item, index)=>{
                        return <div>
                            <BusList key={index} busDetails={item} />
                        </div>     
                        })}
                    </Col>                      
                </Row> : <div></div>} 
            </Grid>            
        )
   }
}