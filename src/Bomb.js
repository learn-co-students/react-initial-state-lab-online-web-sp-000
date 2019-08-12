import React from 'react'

export default class Bomb extends React.Component {

    constructor(props) {
        super() 
            this.state = {
                secondsLeft: initialCount
            }
    }

    render () {
        <div>{this.props.secondsLeft} seconds before I go boom!</div>
    }
}
