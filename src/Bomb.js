import React, { Component } from 'react';

export default class Bomb extends Component {

     constructor(props){
         super()
         this.state = {secondsLeft: props.initialCount}
     }


    render(){
        const seconds = this.state.secondsLeft

        if (seconds > 0){
            return(
            <p>{seconds} seconds left before I go boom!</p>
            )
        } else {
            return(
                <p>Boom!</p>
            )
        }
    }

}