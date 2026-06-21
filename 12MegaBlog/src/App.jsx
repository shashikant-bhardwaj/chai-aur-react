
import { useEffect, useReducer, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import './App.css'

function App() {
 
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect( () => {
    authService.getCurrentUser()
    .then((userData) => {
      if(useData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false)) 
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-center bg-gray-400'>
      <div className='w-full block'>
        <header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <footer/>
      </div>
    </div>
  ) : null
}

export default App
 