import React from 'react';
import { Carousel } from 'react-bootstrap';

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
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className=""
              src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="First slide"
              style={{width:"100%", height: "400px"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
              style={{width:"100%", height: "400px"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg"
              alt="Third slide"
              style={{width:"100%", height: "400px"}}
            />
          </Carousel.Item>
        </Carousel>
      );
    }
  }