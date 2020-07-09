import React from 'react';
import Cassette from './cassette';

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//initiate player off
			isPlaying: false,
		}
	}

	//TODO add a clickable state
	renderCassette(i) {
		return <Cassette value={i} onClick={this.state.handleClick}/>
	}

	handleClick() {
		console.log('handleClick trigger')
		// copy current state
		// toggle on off
		// set state
	}

	render() {
		return (
			<div>
				<div>
					{this.renderCassette('mix seven: Bedroom Dance Party')}
					{/*{this.renderCassette('mix eight: Alien Abduction Luau')}*/}
				</div>
				<div>{this.state.isPlaying}</div>
			</div>
			)
	}
}

export default Player
