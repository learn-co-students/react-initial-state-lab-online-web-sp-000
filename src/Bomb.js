// your Bomb code here!
import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
        secondsLeft: props.initialCount
    }
    
  }
  
  countDown = () => {
    this.myInterval = setInterval(() => {
      const count = this.secondsLeft

      if (count > 0) {
          this.setState(({ secondsLeft }) => ({
            secondsLeft: count - 1
          }))
      }
      if (count === 0) {    
        clearInterval(this.myInterval)
      } 
    }, 1000)
  }

  render() {
    //this.countDown()
    if (this.state.secondsLeft===0) {
      return <div>Boom!</div>
    }
    else {
      return(
        <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
    }
  }
  
   
} 