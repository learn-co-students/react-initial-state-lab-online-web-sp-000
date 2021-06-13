// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    boomStateText = () =>{
        let boomState = this.state.secondsLeft
        if(boomState> 0){
           return  `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
        return `Boom!`
        }
    }

    // countDown(){
    //     let newCount = this.state.secondsLeft - 1
    //     this.setState({
    //         secondsLeft: newCount
    //     })

    // }

    render(){
        // setTimeout(countDown, 1000)
        return(
        <div>
            {this.boomStateText()}
        </div>
        )
    }

}

export default Bomb;