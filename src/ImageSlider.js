import React from 'react';
import Bomb from './Bomb'

export default class ImageSlider extends Component {
    constructor() {
        super()

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
