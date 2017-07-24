import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 34px;
  height: 10px;
  width: 10px;
  transform: rotate(${props => props.show ? '-45' : '90'}deg);

  border-left: 3px solid #5D5D5D;
  border-bottom: 3px solid #5D5D5D;  
`

export default props => {
  const {
    // from parent
    show = false
  } = props

  return <Wrapper show={show} />
}
