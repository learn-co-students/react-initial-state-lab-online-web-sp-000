import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  //   timer = () => {
  //     let updateTime = this.state.secondsLeft - 1;
  //     this.setState = {
  //       secondsLeft: updateTime
  //     };
  //   };
  output = () => {
    if (this.state.secondsLeft === 0) {
      return "Boom!";
    } else {
      return this.state.secondsLeft + " seconds left before I go boom!";
    }
  };
  render() {
    return <div className="Bomb">{this.output()}</div>;
  }
}
