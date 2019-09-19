// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    timerText = () =>{
        if(this.state.secondsLeft > 0){
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }else {
            return 'Boom!'
        }
    }


    render(){
        return(
            this.timerText()
        )
    }
}