import { Component } from "react";

// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         secondsLeft: this.props.initialCount
      }
   }

   updateTimer = () => {
      this.setState({
         
      })
   }

   render() {
      return (
         <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
   }
}