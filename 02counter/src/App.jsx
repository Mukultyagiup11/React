import { useState } from 'react'
import './App.css'

function App() {
  
     let [Counter,setCounter]=useState(5)

  //let counter=5

  const addValue=()=>{
    console.log("value added",Counter)
   // Counter=Counter+1
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
  }
  const removeValue=()=>{
    setCounter(Counter-1)
  }
  return (
    <>
     <h1>Mukul Tyagi and React</h1>
     <h2>Counter Value:{Counter}</h2>

     <button onClick={addValue}>Add Value{Counter}</button>

     <br/>
     <button onClick={removeValue}>Remove Value{Counter}</button>
     <p>footer:{Counter}</p>
    </>
  )
}

export default App
