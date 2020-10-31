// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    countDown = (event) => {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        })
        
        return this.state.secondsLeft
    }

    render() {
        setTimeout(this.countDown, 1000)
        if (this.state.secondsLeft === 0) {
            return <div>Boom!</div>
        } else {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
        
    }
}