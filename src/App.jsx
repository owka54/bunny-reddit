import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/header'
import RightSide from './components/rightSide'
import ColorChange from './features/colorChange/colorChange'
import About from './components/about'
import Rules from './components/rules'
import Layout from './components/layout'

import Article from './components/Article'


function App() {
  const dispatch = useDispatch()

  const [articles, setArticles] = useState();
  const [subreddit, setSubreddit] = useState('rabbits');

  useEffect(() => {
    fetch('https://www.reddit.com/r/rabbits.json').then(res => {
      if (res.status != 200) {
        console.log('ERROR');
        return;
      }

      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children);
        }
      })

    })
  }, [subreddit])

  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<Article />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <div className='App'>
        <Header />
      <RightSide />
      <div className='articles'>
        {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </div>
  )
}
    
export default App;