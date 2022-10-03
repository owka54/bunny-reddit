import { useState } from 'react'
import rabbitLogo from './assets/rabbit.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header id='header'>
        <div>
          <img src={rabbitLogo} alt="Rabbit logo" />
          <h1>BunnyReddit</h1>
        </div>
      </header>

      <div className='right-side-container'>
        <div id='theme-selector'>
          <h3>Select a theme</h3>
          <button id='blueviolet'
          onClick={() => {
            const color = 'blueviolet';
            document.getElementById('header').style.backgroundColor = color;
            document.getElementById('about').style.borderColor = color;
            document.getElementById('theme-selector').style.borderColor = color;
          }}
          >BlueViolet</button>
          <button id='cornflowerblue'
          onClick={() => {
            const color = 'cornflowerblue';
            document.getElementById('header').style.backgroundColor = color;
            document.getElementById('about').style.borderColor = color;
            document.getElementById('theme-selector').style.borderColor = color;
          }}
          >CornflowerBlue</button>
          <button id='crimson' onClick={() => {
            const color = 'crimson';
            document.getElementById('header').style.backgroundColor = color;
            document.getElementById('about').style.borderColor = color;
            document.getElementById('theme-selector').style.borderColor = color;
          }}>Crimson</button>
        </div>

        <div id="about">
          <h2>About</h2>
          <h4>r/Bunnies</h4>
          <p>
            Pictures, advice and anything else about pet rabbits
          </p>
        </div>
      </div>
    </div>
  )
}

export default App