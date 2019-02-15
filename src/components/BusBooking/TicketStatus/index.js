import React, { Component } from 'react';
import "./index.scss";
import {  Grid,Row,Col,Table } from 'react-bootstrap';

export default class TicketStatus extends Component {

    render () {      
          return (
            <Grid style={{minHeight:"600px"}}>
                <Row className="subContent">
                   <h4>Track Ticket Status</h4>   
				    <div className="cheader">
                       <Table responsive className="cancelticket">
                          <tbody>
                                <tr style={{borderTop: "non"}}>
                                    <td></td>
                                    <td>Ticket No</td>
                                    <td><input type="text" name=""/></td>
                                    <td>Mobile No</td>
                                    <td><input type="text" name=""/></td>
                                </tr>
                                <tr>
                                    <td></td>                                    
                                    <td></td>
                                    <td></td>
                                    <td><input type="button" name="searchBtn" id="searchBtn" value="Search" className="submitBtn" title="Search"/></td>
                                </tr>
                            </tbody>
                       </Table>
                    
                    
                    </div>			        
                </Row>
	       </Grid>
        )
    }
}