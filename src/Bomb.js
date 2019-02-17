import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }


  render() {
    const seconds = this.props.initialCount
    return (
    <div>{seconds > 0 ? `${seconds} seconds left before I go boom!` : `Boom!`}</div>
    );
  }

}

export default Bomb;
