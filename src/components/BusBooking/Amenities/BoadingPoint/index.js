import React, { Component } from 'react';
import { Table, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class BoadingPoint extends Component {

    render() {
        console.log('proooooo: ', this.props)
        return (
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Hours before Departure</th>
                        <th>Refund Percentage</th>
                    </tr>
                </thead>
                <tbody>
                {/* {cancellationPolicy && cancellationPolicy.map((item)=>{
                    return (
                        <tr>
                            <td>{item.departureheading}</td>
                            <td>{item.policyheading}</td>
                        </tr>
                    )
                })} */}
            </tbody>
        </Table>
        )        
    }

}