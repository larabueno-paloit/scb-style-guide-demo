import React from 'react'
import hljs from 'highlight.js'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import StyledComponents from './StyledComponents.js';

console.log();
const foo = String(StyledComponents.RowPassword)

const Display =  <StyledComponents.RowPassword>
                  <StyledComponents.InputBar type="password" placeholder="Password" />
                 </StyledComponents.RowPassword>

const Code =
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
   <InputBar type="password" placeholder="Password" />
 </RowPassword>`

const CodeMirrorOptions = {
 readOnly: true,
 lineNumbers: true,
 mode: 'javascript'
}

const DevcardsPage = ()=>{
 return(
  <div>
   <h1>Devcards</h1>

   {
    Display
   }

   <CodeMirror value={foo} options={ CodeMirrorOptions } autoFocus={true} />
  </div>
 )
}

export default DevcardsPage
