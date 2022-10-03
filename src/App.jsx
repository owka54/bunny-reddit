import { useState } from 'react'
import rabbitLogo from './assets/rabbit.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <div>
          <img src={rabbitLogo} alt="Rabbit logo" />
          <h1>BunnyReddit</h1>
        </div>
      </header>

      <div className="about">
        <h2>About</h2>
        <h4>r/Bunnies</h4>
        <p>
          Pictures, advice and anything else about pet rabbits
        </p>
      </div>
    </div>
  )
}

export default App
