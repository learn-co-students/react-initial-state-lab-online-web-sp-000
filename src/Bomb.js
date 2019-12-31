// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

   constructor(props) {
      super()
      this.state = {
         secondsLeft: props.initialCount
      }
   }
s
   message() {
      if (this.state.secondsLeft === 0) {
         return("Boom!")
      } else {
         return(`${this.state.secondsLeft} seconds left before I go boom!`)
      }
   }

   render() {
      return (
         <div>
            {this.message()}
         </div>
      )
   }
}
