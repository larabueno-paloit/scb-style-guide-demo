import React from 'react'
import styled from 'styled-components';

const DevcardsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center
 `
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
 padding: 2px;
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
const SampleWindow = styled.div`
 width: 80%;
 padding: 20px 0;
 border-bottom: 1px dotted black;
 margin: 0 0 10px 20px;
 `
const CodeWindow = styled.div`
 width: 80%;
 margin: 0 0 10px 20px;
 `

export default { DevcardsPage , RowPassword , InputBar , Submit , SampleWindow , CodeWindow }
