import React from 'react'
import styled from 'styled-components'

import MenuLabel from '../MenuLabel'
import Arrow from './Arrow'

const Wrapper = styled.li`
  position: relative;
  padding: 26px 10px 0 10px;
`

const MenuItem = props => {
  const {
    // from enhancer
    show,
    toggleShow,
    // from parent
    children
  } = props

  const childrenCount = React.Children.count(children)

  return <Wrapper>
    {React.Children.map(children, c => (c.type === MenuLabel)
      ? React.cloneElement(c, {
        onClick: toggleShow,
        show
      })
      : c
    )}

    {(childrenCount > 1) && <Arrow show={show} />}
  </Wrapper>
}

export default MenuItem
