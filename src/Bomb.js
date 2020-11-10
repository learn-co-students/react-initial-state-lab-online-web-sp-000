import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
        this.countdown()
    }

    countdown() {
        setTimeout(() => { 
            this.setState({
                secondsLeft: this.state.secondsLeft - 1
            })
            if(this.state.secondsLeft > 0) {
                this.countdown()
            }
        }, 1000);
        
    }

    render() {
        if(this.state.secondsLeft > 0)
            return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
        else {
            return (<div>Boom!</div>)
        }
    }

}
