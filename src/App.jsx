import './App.css'
import Header from './components/header'
import ColorChange from './features/colorChange/colorChange'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTheme } from './features/colorChange/colorChangeSlice'
import About from './components/about'


function App() {
  const themeColor = useSelector(selectTheme)

  return (
    <Router>
      <div className="App" style={{backgroundColor: themeColor}}>
        <Header />

        <div className='right-side-container'>

          <div className='theme-selector' style={{borderColor: themeColor}}>
            <ColorChange />
          </div>

          <div className="about" style={{borderColor: themeColor}}>
            <About />
          </div>
        </div>
      </div>
    </Router>
  )
}
    
export default App