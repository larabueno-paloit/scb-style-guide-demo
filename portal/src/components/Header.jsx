import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #5CC3C8;
  color: #fff;
  padding: 80px 50px 74px;
  font-size: 46px;
  line-height: 46px;
  text-align: left;
`

const Header = ({ children }) => <Wrapper>
  {children}
</Wrapper>

export default Header
