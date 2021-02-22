// your Bomb code here!
import React from 'react';

export class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
      }

      render(){
        let bomb = ``
        if (this.state.secondsLeft > 0){
        bomb = `${this.state.secondsLeft} seconds left before I go boom!`
        }else{
        bomb = `Boom!`
        }
        return <div>{bomb}</div>
      }

}

export default Bomb;
