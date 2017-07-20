import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  color: blue;
  width: 152px;
  flex: 0 0 152px;
  margin: 10px;
`

const itemColor = (color) => ({
  backgroundColor: color,
  width: '100%',
  height: '111px'
})

const ItemText = styled.div`
  color: #4a4a4a;
  background-color: #fff;
  padding: 8px 12px;
`

const Color = (props) => (
  <ItemWrapper>
    <div style={itemColor(props.label)}></div>
    <ItemText>
      {props.label}
    </ItemText>
  </ItemWrapper>
);

export default Color;
