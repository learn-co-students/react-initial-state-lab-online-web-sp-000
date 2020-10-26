import React, { Component } from 'react';

export default class Bomb extends Component {
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
      }

    render() {
        if (this.state.secondsLeft > 0) {
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }
        return (
            <div>
                Boom!
            </div>
        )       

      }     

}