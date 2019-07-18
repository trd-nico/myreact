import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import {
    Img1,
  } from "../../Assets";

class DashBoardCarousel extends Component {
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
                className="d-block w-100"
                src= {Img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Img1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Img1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        )
    }
}

export default DashBoardCarousel;