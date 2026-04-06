import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
let [counter , setCounter] = useState(15) 

// let counter = 15
const addValue = () =>{
  // counter = counter + 1
  if(counter< 20){
  setCounter(counter + 1)
}
}

const removeValue = () =>{
  if (counter > 0) {
     setCounter(counter - 1)
  }
 
}

  return (
  <>
  <h1>Chai Aur React </h1>
  <h2>counter value: {counter}</h2>
  <span><button
  onClick={addValue}>Add value {counter}</button></span>
  <br />
  <span><button
  onClick={removeValue}>Remove value {counter}</button></span>
  <p>footer {counter}</p>
  </>
  )
}

export default App
