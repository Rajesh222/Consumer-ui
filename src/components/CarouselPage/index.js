import React from 'react';
import { Carousel } from 'react-bootstrap';
import One from '../../img/carouser/1.png';
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
            <img className="d-block w-100" src={One}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
             <img className="d-block w-100" src={Three}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
             <img className="d-block w-100" src={Four}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }