import React from 'react';
import Cassette from './cassette';

class Player extends React.Component {
	renderCassette(i) {
		return <Cassette value={i} />
	}

	render() {
		return (
			<div>
				{/*<p>i coordinate the tapes and data</p>*/}
				<div>{this.renderCassette('mix seven: Bedroom Dance Party')}</div>
			</div>
			)
	}
}

export default Player
