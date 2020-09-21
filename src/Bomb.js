import React, { Component} from 'react';

class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        const text = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!`
        return (
            <p>
              {text} 
            </p>
        )
    }
}

export default Bomb;