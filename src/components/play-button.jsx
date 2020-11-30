import styled from 'styled-components'

// on and off state happen up on player level

const PlayBtn = styled.button`
  color: #282c34;
  border: 1px solid #F06292;
  border-radius: 6px;
  background-color: #F06292;
  font-weight: bold;

  &:hover, &:focus {
    outline: none;
    color: #282c34;
    border: 1px solid #F06292;
  }
`

export default PlayBtn
