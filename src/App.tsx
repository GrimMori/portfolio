import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Navigation } from './components/navigation'
import { Hall } from './components/hall/'
import { About } from './components/about'
import { Work } from './components/work'
import { NoMatch } from './components/nomatch'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hall />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </>
  )
}

export default App
