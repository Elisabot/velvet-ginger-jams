import React from 'react';
import Cassette from './cassette';
import PlayBtn from './play-button';

class Player extends React.Component {
	constructor(props) {
		super(props);
		// default off
		this.state = { play: false }
		// gotta bind to make your callback work in a class component
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick() {
		this.setState(state => ({
			// switch state when fired
			play: !state.play
		}));
	};

	render() {
		return (
			<div>
				<PlayBtn onClick={this.handleClick} >{this.state.play ? 'Off': 'ON'}</PlayBtn>
				<Cassette tapeLabel='mix seven: Bedroom Dance Party' />
				{/*'mix eight: Alien Abduction Luau'*/}
			</div>
		)
	}
}

export default Player
