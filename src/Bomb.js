// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component{
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    timerMessage = (time) => {
        if (time > 0)
            return <p>{time} seconds left before I go boom!</p>
        else
            return <p>Boom!</p>
    }
    render(){
        return(
            <div>
                {this.timerMessage(this.state.secondsLeft)}
            </div>
        )
    }
}