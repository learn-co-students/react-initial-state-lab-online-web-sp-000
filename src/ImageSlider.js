// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {

  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
    <h1>Yo. {this.state.currentSlideIndex}</h1>
    )
  }

}

export default ImageSlider;