import './App.css'
import Navbar from './components/Navbar'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id='container'>
        <Navbar />
        <div id='main-section'>
          <Routes>
            <Route path='/blue' element={<Blue />}></Route>
            <Route path='/red' element={<Red />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
       </div>
      </div>
    </>
  )
}


export default App
