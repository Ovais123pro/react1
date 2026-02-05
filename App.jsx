import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compo, { City } from './Compo'
import Wilde from './Wilde'
import Jscode from './Jscode'
import Eventfunction from './Eventfunction'
import Assignment from './Assignment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Eventfunction></Eventfunction>
      <City></City>
      <Compo></Compo>
      <Wilde></Wilde>
      <Jscode></Jscode>
      <Assignment></Assignment>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Created by Awais Azam
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
