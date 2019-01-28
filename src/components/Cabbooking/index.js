import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Axios from 'axios';
const API_URL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDV83_dx09uQ51SMifXuXmrFP7OZdYtTEA&cx=017576662512468239146:omuauf_lfve&q='

class CabBooking extends Component {
    state = {
      query: '',
      results: []
    }
   
    getInfo = () => {
        Axios.get(`${API_URL}${this.state.query}`)
          .then(({ data }) => {
            this.setState({
              results: data.data // MusicGraph returns an object named data, 
                                 // as does axios. So... data.data                             
            })
          })
      }

   handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

   
    render() {
      return (
        <Grid>
            <Row>
                <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
                </form>
           </Row>
        </Grid>
      );
    }
   }
   
   export default CabBooking