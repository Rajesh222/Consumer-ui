import React, { Component } from 'react';
import CarouselPage from '../CarouselPage';

export default class RootPage extends Component {

    render() {
        return <div className="container">
        <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <CarouselPage /></div>
        </div>
                
        </div>
         
    }
}