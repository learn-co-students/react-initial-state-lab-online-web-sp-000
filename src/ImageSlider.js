// your ImageSlider code here!
// your Bomb code here!
import React, {Component} from 'react';

export default class ImageSlider extends Component{

        state = {
            currentSlideIndex: 0
        }

    render(){
        return(
            <div>
                <p>I am on slide {this.state.currentSlideIndex}</p>
            </div>
        )
    }
}