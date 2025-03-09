import { useState } from "react"


function App() {
  const [color,setColor]=useState("orange")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
                <button className="outline-none px-4 py-1 rounded-full
                 bg-red-600 text-white shadow-2xl" onClick={()=>{
                  setColor("red")
                 }}>
                   RED
                   </button>
                   <button className="outline-none px-4 py-1 rounded-full
                 bg-green-600 text-white shadow-2xl " onClick={()=>{
                  setColor("green")
                 }} >
                   Green
                   </button>
                   <button className="outline-none px-4 py-1 rounded-full
                 bg-blue-600 text-white shadow-2xl" onClick={()=>{
                  setColor("blue")
                 }} >
                   Blue
                   </button>
                   <button className="outline-none px-4 py-1 rounded-full
                 bg-black text-white shadow-2xl" onClick={()=>{
                  setColor("black")
                 }} >
                   Black
                   </button>
           </div>
      </div>
    </div>
  )
}

export default App
