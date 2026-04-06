import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
let myObj = {
  username: 'shashikant',
  age:21
}
let newArr = [1,2, 3, 4]

  return (
    <>
    <div className="flex justify-center">
   <h1 className='bg-green-400 text-black p-4 mb-4 rounded-full w-1/2 flex justify-center'>Tailwind test</h1>
   </div>
  
    < Card username ='chaiaurcode' someObj={newArr}/>
    < Card/>
   
    </>
  )
}

export default App
