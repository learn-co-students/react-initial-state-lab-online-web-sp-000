// your Bomb code 
import React, {Component} from 'react'

export default class Bomb extends Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        const bombText = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <p>{bombText}</p>
        )
    }
}