import React from 'react';


class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render () {
        if (this.props.initialCount !== 0){
            return (
                <div>
                    {this.props.initialCount} seconds left before I go boom!
                </div>    
            )
        }
        else {
            return (
                <div>
                    Boom!
                </div>
            )
        }
    }
}

export default Bomb;