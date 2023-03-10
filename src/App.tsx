import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Navigation } from './components/navigation'
import { Hall } from './components/hall/'
import { About } from './components/about'
import { Art } from './components/art'
import { Web } from './components/web'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hall />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/art" element={<Art />}/>
        <Route path="/web" element={<Web />}/>
      </Routes>
    </>
  )
}

export default App
