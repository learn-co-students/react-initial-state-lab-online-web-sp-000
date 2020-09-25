import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(prop) {
        super()
        this.state = {secondsLeft: prop.initialCount}
    }

    render() {
        if (this.state.secondsLeft === 0) {
            return (<div>Boom!</div>)
        } else {
            return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
        }
    }
}