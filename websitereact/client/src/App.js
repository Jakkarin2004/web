import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Back from './Back';
import Home from './Home';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route>
          <Route path='Back' element={<Back />} />
          <Route path='Home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App