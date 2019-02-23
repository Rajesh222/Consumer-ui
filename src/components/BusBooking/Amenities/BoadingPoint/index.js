import React, { Component } from 'react';
import { Table, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class BoadingPoint extends Component {

    render() {
        console.log('proooooo: ', this.props.droppingLocations)
        const droppingLocations = this.props.droppingLocations;
        const boardingLocations = this.props.boardingLocations;
        return (
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Boading Points</th>
                        <th>Dropping Points</th>
                    </tr>
                </thead>
                <tbody>
                 {droppingLocations && droppingLocations.map((item)=>{
                    return (
                        <tr>
                            <td>{item.locationName}</td>
                            <td>{item.locationName}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </Table>
        )        
    }

}