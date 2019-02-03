import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import { Grid, Row, FormGroup, Checkbox} from 'react-bootstrap';


class Filter extends Component {

   render() {
       const { handleCheck, filterValue } = this.props;
    return (
         <div>
             <Grid>
                 <Row>
            <h4>Bus Type</h4>
            { filterValue ? <FormGroup>
                <Checkbox checked={filterValue.includes("ac")} value="ac"
                onChange={handleCheck}><span style={{marginLeft: 10, marginTop: 5}}>AC</span></Checkbox> 
                <Checkbox checked={filterValue.includes("nonac")} value="nonac"
                onChange={handleCheck}
                ><span style={{marginLeft: 10, marginTop: 5}}>No AC</span></Checkbox> 
                <Checkbox checked={filterValue.includes("seater")} value="seater"
                onChange={handleCheck}
                ><span style={{marginLeft: 10, marginTop: 5}}>Seater</span></Checkbox> 
                <Checkbox checked={filterValue.includes("semisleeper")} value="semisleeper"
                onChange={handleCheck}
                ><span style={{marginLeft: 10, marginTop: 5}}>Semi Sleeper</span></Checkbox> 
                <Checkbox checked={filterValue.includes("sleeper")} value="sleeper"
                onChange={handleCheck}
                ><span style={{marginLeft: 10, marginTop: 5}}>Sleeper</span></Checkbox> 
            </FormGroup>
             : <div></div>}
             </Row>
             <Row>
                 <h4>Amenities</h4>
                 <FormGroup>
                    <Checkbox checked={false} value="sleeper"><span style={{marginLeft: 10, marginTop: 5}}>Fan</span></Checkbox> 
                    <Checkbox checked={false} value="sleeper"><span style={{marginLeft: 10, marginTop: 5}}>Watter Bottle</span></Checkbox> 
                    <Checkbox checked={false} value="sleeper"><span style={{marginLeft: 10, marginTop: 5}}>Heater</span></Checkbox> 
                    <Checkbox checked={false} value="sleeper"><span style={{marginLeft: 10, marginTop: 5}}>Air Condition</span></Checkbox> 
                    <Checkbox checked={false} value="sleeper"><span style={{marginLeft: 10, marginTop: 5}}>Snacks</span></Checkbox> 
                 </FormGroup>
             </Row>
             <Row>
                 <h4>Arrival Times</h4>
                 <FormGroup>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span><br/>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span><br/>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span> <br/>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span><br/>
                </FormGroup>
             </Row>
             <Row>
                 <h4>Departure Times</h4>
                 <FormGroup>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span><br/>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span><br/>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span> <br/>
                    <span style={{marginLeft: 10, marginTop: 5}}>Fan</span><br/>
                </FormGroup>
             </Row>
             </Grid>
        </div>
    )
   }
}
export default Filter;