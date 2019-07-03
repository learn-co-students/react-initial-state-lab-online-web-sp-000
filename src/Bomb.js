// your Bomb code here!

import React, { Component } from 'react'


 class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }
    
    
   


    render() {
       const myMessage = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"
       
        return (
           
            <div>
             {myMessage}
            </div>
        )
    }
}

export default Bomb
