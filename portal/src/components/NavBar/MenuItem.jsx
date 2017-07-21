import React from 'react'
import styled from 'styled-components'

import MenuLabel from './MenuLabel'
import enhance from './enhancer'

const Wrapper = styled.li``

const MenuItem = props => {
  const {
    children,
    show,
    toggleShow
  } = props

  return <Wrapper>
    {React.Children.map(children, c => (c.type === MenuLabel)
      ? React.cloneElement(c, {
        onClick: toggleShow,
        show
      })
      : c
    )}
  </Wrapper>
}

export default enhance(MenuItem)
