import React from 'react'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import LogoImg from 'assets/images/logo.png'

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

  li {
    padding-bottom: 20px;
    &:hover {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: #5d5d5d;
    }
  }
`

export default props => <NavWrapper>
  <Logo>
    <img src={LogoImg} alt='' />
  </Logo>
  <hr />
  <MenuList>
    <li><Link to='/'>Getting Started</Link></li>
    <li>
      <Dropdown>
        <DropdownTrigger>CIB UI <div className='triangle' /></DropdownTrigger>
        <DropdownContent>
          <ul>
            <li>
              <Link to='/colors'>Colors</Link>
            </li>
            <li>
              <Link to='/icons'>Icons</Link>
            </li>
            <li>
              <Link to='/table'>Table</Link>
            </li>
            <li>
              <Link to='/typography'>Typography</Link>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    </li>
    <li><Link to='/principles'>Design Principles</Link></li>
    <li><Link to='/'>Resources</Link></li>
    <li><Link to='/'>CIB Apps</Link></li>
    <li><Link to='/'>Case Studies</Link></li>
  </MenuList>
</NavWrapper>
