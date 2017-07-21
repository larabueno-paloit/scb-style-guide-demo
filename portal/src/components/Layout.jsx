import React from 'react'
import styled from 'styled-components'

import { NavBar } from 'components'

const Wrapper = styled.div`
  display: flex;
`

const Main = styled.div`
  height: 100vh;
  overflow: scroll;
`

export default ({ children }) => <Wrapper>
  <NavBar />
  <Main>
    {children}
  </Main>
</Wrapper>
