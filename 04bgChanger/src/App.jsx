import { useState } from "react";


function App(){
  const [color,setColor] = useState("Olive")
  return(
    <>
    <div className="w-full h-screen duration-500"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button 
           onClick={()=>{setColor("red")}}
           className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}} >Red</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("green")}}
          className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}} >Green</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("blue")}}
          className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}} >Blue</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("orange")}}
          className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Orange"}} >Orange</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("yellow")}}
          className="outline:none px-4 rounded-full text-black shadow-lg"
          style={{backgroundColor:"Yellow"}} >Yellow</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("purple")}}
          className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Purple"}} >Purple</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("lavender")}}
          className="outline:none px-4 rounded-full text-black shadow-lg"
          style={{backgroundColor:"lavender"}} >Lavender</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("brown")}}
          className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Brown"}} >Brown</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("violet")}}
          className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Violet"}} >Violet</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("grey")}}
          className="outline:none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Grey"}} >Grey</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;