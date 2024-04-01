import { useState } from 'react'
import React from 'react'
import Homepage from "./assets/homepage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Metomode from './assets/metromode';
import Tops from './assets/tops';
import Dresses from './assets/dresses';
import Bottoms from './assets/bottoms';
import Signup from './assets/signup';
import Login from './assets/login';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        {/* Add a catch-all route for the root path   <Route path='*' element={<Signup />} />*/}
        <Route path='*' element={<Homepage/>} />
        <Route path='/metromode' element={<Metomode/>} />
        <Route path='/tops' element={<Tops/>} />
        <Route path='/dresses' element={<Dresses/>} />
        <Route path='/bottoms' element={<Bottoms/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        

       

        
      </Routes>
    </Router>
     
    </>
  )
}

export default App
