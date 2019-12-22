// your ImageSlider code here!
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
        <li>I am on slide {this.state.currentSlideIndex}</li>
        )
    }
}