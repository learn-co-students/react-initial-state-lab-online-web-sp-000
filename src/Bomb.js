import React, { Component } from 'react';

class Bomb extends Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        let output;
        const secondsLeft = this.state.secondsLeft

        secondsLeft > 0 ? output = `${secondsLeft} seconds left before I go boom!` : output = 'Boom!'
        
        return (
            output           
        )
    }
}

export default Bomb