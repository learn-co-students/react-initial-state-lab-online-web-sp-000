import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {secondsLeft: props.initialCount}
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                secondsLeft: this.state.secondsLeft - 1
            })
        }, 1000)
    }
    countReturn = () => {
        if (this.state.secondsLeft !== 0) {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        } else {
            return <div>Boom!</div>
        }
    }
    render() {
        return (
            this.countReturn()
        )
    }

}
