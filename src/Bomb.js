import React, { Component } from "react";

export class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    return (
      <div>
        {this.state.secondsLeft !== 0 ? (
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        ) : (
          <p>Boom!</p>
        )}
      </div>
    );
  }
}
export default Bomb;

// In the src / Bomb.js file, create a Bomb React component.
// Its initial state should have a property called secondsLeft.
// The initial value of secondsLeft is set by passing in an initialCount
// prop to the Bomb component.Don't forget to pass the argument props
// into the constructor (i.e., constructor(props)).
// It should render the text '<SECONDS_LEFT> seconds left before
// I go boom!', where < SECONDS_LEFT > is the value of secondsLeft.
// If secondsLeft equals 0, it should render 'Boom!' instead.
