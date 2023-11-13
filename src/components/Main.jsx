import Blue from "./Blue"
import Red from "./Red"
import Home from "./Home"
import { Routes, Route } from 'react-router-dom'



function Main(){
  <div id='main-section'>
    <Routes>
      <Route path='/blue' element={<Blue />}></Route>
      <Route path='/red' element={<Red />}></Route>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  </div>
}

export default Main
