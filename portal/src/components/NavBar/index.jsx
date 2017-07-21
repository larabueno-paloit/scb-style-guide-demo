import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import LogoImg from 'assets/images/logo.png'
import MenuItem from './MenuItem'
import MenuLabel from './MenuLabel'

const NavWrapper = styled.div`
  background-color: #fff;
  flex: 0 0 300px;
  padding: 25px 16px;
  border-right: 1px solid #979797;
`

const Logo = styled.div`
  display: flex;

  img {
    width: 200px;
    height: 50px;
  }
`

const MenuList = styled.ul`
  list-style-type: none;
  text-align: left;
  padding: 24px 10px;

  & a {
    text-decoration: none;
  }
`

export default props => <NavWrapper>
  <Logo>
    <img src={LogoImg} alt='' />
  </Logo>

  <hr />

  <MenuList>
    <MenuItem>
      <Link to='/'>Get Started</Link>
    </MenuItem>

    <MenuItem>
      <MenuLabel>Features</MenuLabel>
      <ul>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
      </ul>
    </MenuItem>

    <MenuItem>
      <MenuLabel>Patterns</MenuLabel>
      <ul>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
      </ul>
    </MenuItem>

    <MenuItem>
      <MenuLabel>Components</MenuLabel>
      <ul>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
        <li><Link to='/'>Hello</Link></li>
      </ul>
    </MenuItem>
  </MenuList>
</NavWrapper>
