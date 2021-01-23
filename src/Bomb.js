import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
            // this initial state of Bomb has a property called secondsLeft, the value of which is equal to the initialCount prop of the Bomb component
        }
    }
    render() {
         const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        // defining a message const equal to one of two options:
                // if the current state of secondsLeft equals 0, the message is equal to 'Boom!'
                // if the state of secondsLeft is anything else, the message is equal to the value of the secondsLeft state.

         return (
             <div>{message}</div>
         )
    }
}

// how to set an initial state based off that component's props.
// React passes a component's props as an argument into the constructor.

export default Bomb;