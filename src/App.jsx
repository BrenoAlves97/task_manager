import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/:name" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
