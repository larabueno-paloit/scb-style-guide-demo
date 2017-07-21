import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.ul`
  display: flex;
  background-color: black;
  padding: 5px;

  & > li {
    display:block;
    width: 200px;
  }

  & > li > a {
    color: white;
    text-decoration: none;
  }
`

const NavBar = props => {
  return <Wrapper>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/counter'>Counter</Link></li>
    <li><Link to='/effects'>Effects</Link></li>
    <li><Link to='/form'>Form</Link></li>
  </Wrapper>
}

NavBar.displayName = 'NavBar'

export default NavBar
