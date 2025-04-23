import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainBar from './elements/MainBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainBar />
    </>
  )
}

export default App
