// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage'
import Header from './Header'
import Footer from './Footer'
function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route element={<Home/>} path='/'/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
