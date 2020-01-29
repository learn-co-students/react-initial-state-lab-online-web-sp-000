// your Bomb code here!
import React, {Component} from 'react'

export default class Bomb extends Component {

    constructor(props) { //component's props are passed in as an argument
        super() //required if we are to use this
        this.state = {
            secondsLeft: props.initialCount //equal to initialCount prop of bomb component
        }
    }
    render() {
        const msg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>{msg}</div>
        )
    }
}
