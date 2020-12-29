// your ImageSlider code here!
import React, { Component } from 'react';

export default class Slider extends Component {
  constructor() {
  super()
  this.state = {currentSlideIndex: 0}
  }

  render () {
    return (
      <h4>I am on slide {this.state.currentSlideIndex}</h4>
    )
  }
}
