import React from 'react';
import styled from 'styled-components';

function Cassette(props) {
	return (
		<Tape className="tape" onClick={props.onClick}>
			<Label>
				{props.value}
			</Label>
			<Hole position={leftHole} />
			<Reel className="spinner" position={leftReel} />
			<Hole position={rightHole} />
			<Reel className="spinner" position={rightReel} />
			<Window />
			<Buttress />
		</Tape>
	)
}

const Tape = styled.div`
	position: absolute;
	height: 90px;
	width: 160px;
	border: 1px solid #F06292;
	border-radius: 10px;
`
const Label = styled.div`
	margin-top: 4px;
	font-size: large;
	font-family: 'Yellowtail', cursive;
	max-width: 155px;
`
const Hole = styled.div`
	top: ${props => props.position.top};
	left: ${props => props.position.left};
	right: ${props => props.position.right};

	position: absolute;
	height: 20px;
	width: 20px;
	border: 1px solid #F06292;
	border-radius: 50%;
`
const leftHole = {
	top: '32px',
	left: '32px',
}
const rightHole = {
	top: '32px',
	right: '32px',
}

const Reel = styled.div`
	top: ${props => props.position.top};
	left: ${props => props.position.left};
	right: ${props => props.position.right};

	position: absolute;
	height: 14px;
	width: 14px;
	border: 2px dashed #F06292;
	border-radius: 50%;
`
const leftReel = {
	top: '34px',
	left: '33px',
}
const rightReel = {
	top: '34px',
	right: '36px',
}

const Window = styled.div`
	position: absolute;
	top: 32px;
	left: 61px;
	height: 16px;
	width: 36px;
	border: 1px solid #F06292;
	border-radius: 2px;
`
const Buttress = styled.div`
	position: absolute;
	top: 69px;
	left: 20px;
	height: 20px;
	width: 120px;
	border: 1px solid #F06292;
	border-radius: 10px 10px 2px 2px;
`

export default Cassette
