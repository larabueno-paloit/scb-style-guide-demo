import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  color: #787878;
  width: 90px;
  flex: 0 0 90px;
  margin-right: 9px;
  margin-bottom: 10px;
  height: 90px;
  padding-top: 10px;
  background-color: #D8D8D8;
  text-align: center;
  font-size: 12px;
`

const Color = (props) => (
  <ItemWrapper>
      {props.label}
  </ItemWrapper>
);

export default Color;
