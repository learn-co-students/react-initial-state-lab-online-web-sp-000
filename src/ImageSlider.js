import React from 'react';

class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
            // this sets the currentSlideIndex's initial state to 0
        }
    }

    render() {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
            // the curly braces contain the currentSlideIndex's current state 
        )
    }
}

export default ImageSlider;