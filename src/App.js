import { useState } from 'react'
import './App.css'
import Keyboard from './keyboard'
function App({Keyclick})
{
   let[input,calc]= useState("")
   function Keyclick(Val)
   {
       calc(input+Val)
   }
   function Calculate()
   {
       let output=eval(input)
       calc(output)

   }
   function Clear()
   {
      calc(" ")
   }
    return(
        <>
           <div class="Container">
               <h1>Calculator App Using React</h1>
               <div className='calculator'>
                   <input type="text" className="Display" value={input}/>
                   <Keyboard Keyclick={Keyclick} Clear={Clear} Calculate={Calculate}/>
               </div>
           </div>
        </>
    )
}
export default App