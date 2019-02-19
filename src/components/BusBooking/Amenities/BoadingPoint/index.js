import React, { Component } from 'react';
import { Table, Row,Col } from 'react-bootstrap';
import "./index.scss";


export default class BoadingPoint extends Component {

    render() {
        console.log('', this.props.cancellationPolicy)
        const cancellationPolicy = this.props.cancellationPolicy;
        return (
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Hours before Departure</th>
                        <th>Refund Percentage</th>
                    </tr>
                </thead>
                <tbody>
                {cancellationPolicy && cancellationPolicy.map((item)=>{
                    return (
                        <tr>
                            <td>{item.departureheading}</td>
                            <td>{item.policyheading}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        )        
    }

}