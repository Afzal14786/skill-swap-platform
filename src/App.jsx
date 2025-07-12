// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/LoginPage/RegisterPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import UpdateProfilePage from './pages/ProfilePage/UpdateProfilePage';
import Navbar from './Navbar'
// import Footer from './Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {/* home page route */}
          <Route element={<Home/>} path='/'/> 
          <Route element= {<LoginPage/>} path='/login'/>
          <Route element= {<RegisterPage/>} path='/register'/>
          <Route element= {<ProfilePage/>} path='/profile'/>
          <Route element= {<UpdateProfilePage/>} path='/update-profile'/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App

