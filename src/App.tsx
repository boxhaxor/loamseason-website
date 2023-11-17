import { useState } from 'react'
import './App.css'
import MainMenuComponent from "./menu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainMenuComponent />
      <h1>Loam Season</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
