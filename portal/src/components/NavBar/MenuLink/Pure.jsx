import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  & > a, & > a:visited {
    text-decoration: none;
    color: ${props => props.active ? '#199FD6' : '#5D5D5D'};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
  }
`

const MenuLink = props => {
  const {
    // from s
    pathname,
    // from parent
    to,
    children
  } = props

  return <Wrapper active={pathname === to}>
    <Link to={to}>{children}</Link>
  </Wrapper>
}

export default MenuLink
