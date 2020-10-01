// your ImageSlider code here!
// your Bomb code here!
import React from 'react';
// import ReactDOM from 'react-dom';


export default class ImageSlider extends React.Component {
    constructor(){
    super()

    this.state= {
        currentSlideIndex: 0
    }
}

render(){

    return(<h1>
        I am on slide {this.state.currentSlideIndex}
    </h1> )
}
}

