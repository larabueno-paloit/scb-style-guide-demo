import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get } from 'lodash'

const sizes = {
  small: '5px',
  normal: '10px',
  large: '15px'
}

const Component = styled.button`
  padding: ${props => get(sizes, get(props, 'size'))};
  opacity: 0.5;  
  background-color: ${props => props.color || props.btnColor};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export default function Button ({children, ...props}) {
  return <Component {...props}>{children}</Component>
}

Button.propTypes = {
  /** size of button */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** color of button */
  color: PropTypes.string,
  /** @deprecated use color instead */
  btnColor: PropTypes.string
}

Button.defaultProps = {
  size: 'small'
}
