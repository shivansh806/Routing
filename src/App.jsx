import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Courses from './pages/Courses'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import RandomPage from './pages/RandomPage'
import ErrorPage from './pages/ErrorPage'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />  {/*simple routing*/}
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/mens' element={<Mens />} />
        <Route path='/courses/womens' element={<Womens />} />   {/*nested routing*/}
        <Route path='/courses/:id' element={<RandomPage />}/>    {/*dynamic routing*/}
        <Route path='/*' element={<ErrorPage />}/>       
      </Routes>
    </div>
  )
}

export default App