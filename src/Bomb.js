// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        } 
      }

      bombTimer = ()=>{
          if (this.state.secondsLeft > 0){
              let timeLeft = `${this.state.secondsLeft} seconds left before I go boom!`
              console.log("semkmkmkm",timeLeft)
              return timeLeft
          }else{
              return 'Boom!'
          }
      }

      render() {
        return (
          <div>
             {this.bombTimer()}
          </div>
        )
      }
      

  
}
