import React from 'react'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Skills from './components/skills'
import Signup from './components/signup'
import Navbar from './components/navbar/navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}>
          
        </Route>
        <Route exact path='/about' element={<About/>}>
          
        </Route>
        <Route exact path='/contact' element={<Contact/>}>
          
        </Route>
        <Route exact path='/skills' element={<Skills/>}>
         
        </Route>
        <Route exact path='/signup' element={<Signup/>}>
          
        </Route>
      </Routes>
    </Router>
  )
}

export default App