import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Header from './Header'
import MainLayout from './MainLayout'
import Footer from './Footer'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/footer' element={<Footer/>}></Route>
        </Route>
          <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
    
  )
}

export default App
