import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  increment = () => {
    const newSlideIndex = this.state.currentSlideIndex + 1
    this.setState({
      currentSlideIndex: newSlideIndex
    })
  }

  render() {
    const CURRENT_SLIDE = this.state.currentSlideIndex
    return (
      'I am on slide ' + CURRENT_SLIDE
    )
  }
}
