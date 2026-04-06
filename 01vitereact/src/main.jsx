import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }
// const anotheruser = "chai aur react !"

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com' , target:'_blank'},
//   'click me to visit a google',
//   anotheruser
// )

// const anotherElement = (
//   <a href="https://google.com"  target='_blank'>visit google</a>
// )
createRoot(document.getElementById('root')).render(

    < App />
    
)
