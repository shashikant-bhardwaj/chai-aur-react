import { useState } from "react"

function App() {
  const [color , setColor] = useState("olive")
 

  return (
  <div className=" w-full h-screen duration-200"
  style= {{backgroundColor:color}}>
    <div className=" fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-5">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={() =>setColor("red")} className="bg-red-600 px-3 py-1 outline-none rounded-full text-white shadow-lg">Red</button>
        <button onClick={() =>setColor("green")} className="bg-green-600 px-3 py-1 outline-none rounded-full text-white shadow-lg">Green</button>
        <button onClick={() =>setColor("black")} className="bg-black px-3 py-1 outline-none rounded-full text-white shadow-lg">Black</button>
        <button onClick={() =>setColor("purple")} className="bg-purple-600 px-3 py-1 outline-none rounded-full text-white shadow-lg">Purple</button>
      </div>
    </div>
  </div>
  )
}

export default App
