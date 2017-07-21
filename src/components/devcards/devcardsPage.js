import React from 'react'
import hljs from 'highlight.js'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import StyledComponents from './StyledComponents.js';


const SampleCode1 =
 `const InputBar = styled.input\`
   height: 30px;
  	color: palevioletred;
  	background: papayawhip;
  	border: none;
  	border-radius: 3px;
   border: 1px solid palevioletred;
   font-size: 20px;
  \`;

  <RowPassword>
    <InputBar type="text" placeholder="Some input..." />
  </RowPassword>`
const SampleCode2 = String(StyledComponents.RowPassword)



class DevcardsPage extends React.Component{

 constructor(props){
  super(props)
  this.state = {text: "Some input..."}
  this.RenderSample = this.RenderSample.bind(this)
 }

 RenderSample(placeholderText){
  return(
   <StyledComponents.RowPassword>
    <StyledComponents.InputBar type="text" placeholder={placeholderText} />
   </StyledComponents.RowPassword>
  )
 }

 render(){
  return(
   <StyledComponents.DevcardsPage>
    <h1>Devcards</h1>

    <StyledComponents.SampleWindow>
     {this.RenderSample(this.state.text)}
    </StyledComponents.SampleWindow>

    <StyledComponents.CodeWindow>
     <CodeMirror value={SampleCode1} options={ { readOnly: true, lineNumbers: true, mode: 'javascript' } } autoFocus={true} />
    </StyledComponents.CodeWindow>
   </StyledComponents.DevcardsPage>
   )
 }
}

export default DevcardsPage
