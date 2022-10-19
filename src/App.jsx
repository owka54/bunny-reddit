import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/header'
import RightSide from './components/rightSide'
import Filters from './features/filters/filters'
import ColorChange from './features/colorChange/colorChange'
import About from './components/about'
import Rules from './components/rules'
import Layout from './components/layout'

import Article from './components/Article'
import { filterChanged, selectURL } from './features/filters/filtersSlice'


function App() {
  const dispatch = useDispatch()

  const [articles, setArticles] = useState();
  const url = useSelector(selectURL);
  console.log(url)

  useEffect(() => {
    fetch(url).then(res => {
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
  }, [url])

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
      <Filters />
      <div className='articles'>
        {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </div>
  )
}
    
export default App;