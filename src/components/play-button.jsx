import styled from 'styled-components'

// on and off state happen up on player level

const PlayBtn = styled.button`
  color: #F06292;
  border: 1px solid #F06292;
  border-radius: 6px;
  background-color: unset;
  margin-bottom: 8px;

  &:hover, &:focus {
    outline: none;
    color: #F06292;
    border: 1px solid #F06292;
  }
`

export default PlayBtn