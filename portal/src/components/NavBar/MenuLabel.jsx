import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  & + ul {
    height: ${props => props.show ? '100%' : 0};
    overflow: hidden;
    padding: 0 0 0 36px;
  }

  & + ul > li {
    padding-top: 26px;
  }

  & a {
    font-weight: bold;
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
