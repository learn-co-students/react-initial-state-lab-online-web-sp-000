import React from 'react';

class Bomb extends React.component;


constructor(props){
	super() 
	
	this.state = { 
		secondsLeft: props.initialCount
	}
}


render() {
	const message = this.state.secondsLeft === 0 ? 'boom' : `${this.state.secondsLeft} seconds left before I go boom!`


  return (
      <div>{message}</div>
    )
  }
}

export default Bomb;
