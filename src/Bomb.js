import React from 'react';

class Bomb extends React.Component {

    constructor(props) {//props that the component gets from its parent. React passes a component's props as an argument into the constructor (i.e., constructor(props)). 
        super() // this is required in React components if we are to use this in the constructor
        // The initial state of Bomb should have a property called secondsLeft
        // The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return(
        <div>{message}</div>
        )
    }
}

export default Bomb;
