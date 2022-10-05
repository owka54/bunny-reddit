import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from './features/colorChange/colorChangeSlice'
import { fetchBunnyData, selectPosts, selectUrl } from './features/posts/postSourceSlice'

import Header from './components/header'
import ColorChange from './features/colorChange/colorChange'
import About from './components/about'
import Rules from './components/rules'
import PostBoxContainer from './features/posts/postBoxContainer'
import PostContainer from './features/posts/postContainer'
import Loading from './features/loading/loading'
import LoadFail from './features/loading/loadFail'
import PostBox from './features/posts/postBox'


function App() {
  const dispatch = useDispatch()
  const url = useSelector(selectUrl)
  const data = useSelector(selectPosts)

  const status = useSelector(state => state.source.status)
  const error = useSelector(state => state.source.error)

  const themeColor = useSelector(selectTheme)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBunnyData(url))
    }
  }, [status, dispatch, url])

  let content
  let postContent


  if (status === 'loading') {
    content = (<Loading />)
  } else if (status === 'succeeded') {
    content = (<PostBoxContainer data={data} error={error} status={status} comments='hide' />)
    // console.log(data.data.children)
    postContent = (<PostContainer data={data} error={error} status={status} comments='display' />)
  } else if (status === 'failed') {
    content = (<LoadFail />)
  }

  return (
    <Router>
      <div className="App" style={{backgroundColor: themeColor}}>
        <Header />
      </div>

      {console.log({content})}



      <div className='right-side-container'>
        <div className='theme-selector' style={{borderColor: themeColor}}>
          <ColorChange />
        </div>
        <div className="about" style={{borderColor: themeColor}}>
          <About />
        </div>
        <div className='rules' style={{borderColor: themeColor}}>
          <Rules />
        </div>
      </div>


      <Routes>
        <Route exact path='/' element={
          <React.Fragment>{content}</React.Fragment>
        } />

        <Route exact path='/:postId' render={() => (
          <React.Fragment>{postContent}</React.Fragment>
        )} />
        {/* <Navigate to='/' /> */}
      </Routes>


    </Router>
  )
}
    
export default App