import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;

  & + ul {
    height: ${props => props.show ? '100%' : 0};
    overflow: hidden;
  }
`

export default props => {
  const {
    children,
    ...otherProps
  } = props

  return <Wrapper {...otherProps}>
    {children}
  </Wrapper>
}
