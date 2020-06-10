import React from 'react';
import Cassette from './cassette';

class Player extends React.Component {
	renderCassette(i) {
		return <Cassette value={i} />
	}

	render() {
		return (
			<div>
				<div>{this.renderCassette('mix seven: Bedroom Dance Party')}</div>
			</div>
			)
	}
}

export default Player
