// your ImageSlider code here!
import React, {Component} from 'react'

class ImageSlider extends Component {
    
    constructor() {
        super() //required if we are to use this
    
        this.state = {
            currentSlideIndex: 0
        }
    }
    

    render() {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }   
}

export default ImageSlider