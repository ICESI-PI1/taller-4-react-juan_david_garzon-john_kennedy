import { useState } from 'react'
import './App.css'
import  Router  from  './routes'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  localStorage.setItem('isAuth', false)
  return (
    <Router isAuth={isAuth} setIsAuth={setIsAuth} />
  )
}

export default App
