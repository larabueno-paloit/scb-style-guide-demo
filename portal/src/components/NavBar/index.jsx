import React from 'react'
import styled from 'styled-components'

import LogoImg from 'assets/images/logo.png'
import MenuItem from './MenuItem'
import MenuLabel from './MenuLabel'
import MenuLink from './MenuLink'

const NavWrapper = styled.div`
  background-color: #fff;
  flex: 0 0 200px;
  border-right: 1px solid #979797;

  & > ul {
    list-style-type: none;
  }
`

const Logo = styled.div`
  padding: 24px 10px 0 10px;

  & > img {
    width: 200px;
    height: 50px;
  }
`

export default props => <NavWrapper>
  <Logo>
    <img src={LogoImg} alt='' />
    <hr />
  </Logo>

  <ul>
    <MenuItem>
      <MenuLabel>
        <MenuLink to='/'>Get Started</MenuLink>
      </MenuLabel>
    </MenuItem>

    <MenuItem>
      <MenuLabel>Features</MenuLabel>
      <ul>
        <li><MenuLink to='/a'>Hello</MenuLink></li>
        <li><MenuLink to='/b'>Hello</MenuLink></li>
        <li><MenuLink to='/c'>Hello</MenuLink></li>
        <li><MenuLink to='/d'>Hello</MenuLink></li>
      </ul>
    </MenuItem>

    <MenuItem>
      <MenuLabel>Patterns</MenuLabel>
      <ul>
        <li><MenuLink to='/a'>Hello</MenuLink></li>
        <li><MenuLink to='/b'>Hello</MenuLink></li>
        <li><MenuLink to='/c'>Hello</MenuLink></li>
        <li><MenuLink to='/d'>Hello</MenuLink></li>
      </ul>
    </MenuItem>

    <MenuItem>
      <MenuLabel>Components</MenuLabel>
      <ul>
        <li><MenuLink to='/a'>Hello</MenuLink></li>
        <li><MenuLink to='/b'>Hello</MenuLink></li>
        <li><MenuLink to='/c'>Hello</MenuLink></li>
        <li><MenuLink to='/d'>Hello</MenuLink></li>
      </ul>
    </MenuItem>
  </ul>
</NavWrapper>
