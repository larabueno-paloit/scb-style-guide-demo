import React from 'react'
import styled from 'styled-components';

const RowPassword = styled.div`
 width: 500px;
 display:flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;

 padding-left: 30px;
 height: 100px;
 `
const InputBar = styled.input`
 height: 30px;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
 border: 1px solid palevioletred;
 font-size: 20px;
 `
const Submit = styled.button`
 height: 34px;
 width: 100px;
 margin-left: 3em;
	background: transparent;
	color: palevioletred;
 border-radius: 3px;
 border: ${props => props.primary ? '2px solid palevioletred' : '2px solid blue;' };
 `

export default { RowPassword , InputBar , Submit }
