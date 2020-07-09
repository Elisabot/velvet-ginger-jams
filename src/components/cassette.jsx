import React from 'react';
import styled from 'styled-components';

function Cassette(props) {
	return (
		<Tape className="tape" onClick={props.onClick}>
			<Label>
				{props.value}
			</Label>
			<LeftPeg />
			<RightPeg />
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
	font-size: small;
`
const LeftPeg = styled.div`
	position: absolute;
	top: 32px;
	left: 32px;
	height: 20px;
	width: 20px;
	border: 2px solid #F06292;
	border-radius: 50%;
`
const RightPeg = styled.div`
	position: absolute;
	top: 32px;
	right: 32px;
	height: 20px;
	width: 20px;
	border: 2px solid #F06292;
	border-radius: 50%;
`
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
