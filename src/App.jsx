import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import MainPage from './components/Homepage/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainPage/>
    </div>

  )
}

export default App
