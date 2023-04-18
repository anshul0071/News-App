import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = '13e68d3d931f435d9576361e4eb0087d'
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
            <Route exact path='/' element={<News setProgress={setProgress}  key='general' apiKey={apiKey} pageSize = {pageSize} country='in' category='General' />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} key='business'apiKey={apiKey}  pageSize = {pageSize} country='in' category='Business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment'apiKey={apiKey}  pageSize = {pageSize} country='ss' category='Entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} key='health'apiKey={apiKey}  pageSize = {pageSize} country='in' category='Health' />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' apiKey={apiKey} pageSize = {pageSize} country='in' category='Science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' apiKey={apiKey} pageSize = {pageSize} country='in' category='Sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' apiKey={apiKey} pageSize = {pageSize} country='in' category='Technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
 
}

export default App;
