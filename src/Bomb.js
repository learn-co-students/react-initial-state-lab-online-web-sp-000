// your Bomb code here!
import { Component } from "react";

export default class Bomb extends Component {
    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render() {
        console.log(this)
        if (this.props.initialCount === 0) {
            return "Boom!"
        }
        return `${this.props.initialCount} seconds left before I go boom!`
        // If secondsLeft equals 0, it should render 'Boom!' instead.
    }
}