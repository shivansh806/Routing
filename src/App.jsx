import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './Pages/Courses'
import Navbar from './Components/Navbar'
import Java from './Pages/Java'
import RandomPage from './Pages/RandomPage'
import Python from './Pages/Python'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <div>
      <Navbar />
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/courses' element={<Courses />} />
           <Route path='/courses/java' element={<Java />} />
           <Route path='/courses/python' element={<Python />} />
           <Route path='/courses/:id' element={<RandomPage />} />
           <Route path='/*' element={<ErrorPage />} />

       </Routes>
    </div>
  )
}

export default App