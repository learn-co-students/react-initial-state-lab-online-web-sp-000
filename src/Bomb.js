// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        console.log(props.initialCount)
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
        console.log(this.state)

    }

    bombContent = () => {
        if (this.state.secondsLeft > 0) {
            return <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
        } else {
            return <h1>Boom!</h1>
        }
    }

    render() {
        return (
            <h1 >
                {this.bombContent()}
            </h1>
        )
    }

}