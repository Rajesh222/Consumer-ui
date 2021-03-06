import React from 'react';
import "./index.scss";
import { Carousel } from 'react-bootstrap';
import Two from '../../img/carouser/2.jpg';
import Three from '../../img/carouser/3.png';
import Four from '../../img/carouser/4.jpg';

export default class CarouselPage extends React.Component {
    constructor(props, context) {
      super(props, context);  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} data-ride="carousel">
          <Carousel.Item>
            <img className="img-responsive" src={Two} style={{height:"300px",width:"100%"}}/>
            <Carousel.Caption>
              <h3>Online Bus Tikcet Booking</h3>
              <p>Digital Bihar is fastest growing application</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
             <img className="img-responsive" src={Three} style={{height:"300px",width:"100%"}}/>
            <Carousel.Caption>
              <h3>Travel without worry</h3>
              <p>Insure every journey with Digital Bihar. Get alternate bus arrangements in an unlikely event of bus cancellation else get double of your bus booking amount refunded.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
             <img src={Four} className="img-responsive" style={{height:"300px",width:"100%"}}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }