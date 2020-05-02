// your ImageSlider code here!
import React from 'react'
export default class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

//It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.

  render() {
    return (
      <div>I am on slide {this.state.currentSlideIndex}</div>
    )
  }

}
