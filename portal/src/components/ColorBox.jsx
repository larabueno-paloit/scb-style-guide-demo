import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 152px;
  flex: 0 0 152px;
  margin: 10px;
`

const ColorItem = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 110px;
`

const Label = styled.div`
  color: #4a4a4a;
  background-color: #fff;
  padding: 8px 12px;
`

const Colors = (props) => (
  <Wrapper>
    <ColorItem color={props.color} />
    {props.showCode && <Label>{props.color}</Label>}
  </Wrapper>
)

export default Colors
