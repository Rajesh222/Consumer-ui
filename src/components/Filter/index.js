import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import { FormGroup, Checkbox} from 'react-bootstrap';


class Filter extends Component {

   render() {
       const { handleCheck, filterValue } = this.props;
    return (
         <div>
            <h4>Journey Class</h4>
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
        </div>
    )
   }
}
export default Filter;