// your Bomb code here!
// your ImageSlider code here!
import React, { Component } from "react";

class Bomb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			secondsLeft: this.props.initialCount
		}
	}

	countdown() {
		if (this.state.secondsLeft > 0) {
			setTimeout(() => {
				this.setState({
					secondsLeft: this.state.secondsLeft - 1
				})

				this.countdown()			
			}, 1000)

		}
		// console.log(`counting down: ${this.state.secondsLeft}`)
	}

	componentDidMount() {
		this.countdown()
	}
	
	render() {
		// let secondsLeft = this.state.secondsLeft
		if (this.state.secondsLeft > 0) {
			return (
				<div className="bomb">
					{this.state.secondsLeft} seconds left before I go boom!
				</div>
			)
		} else {
			return (
			<div>Boom!</div>
			)
		}		
	}
}


export default Bomb


