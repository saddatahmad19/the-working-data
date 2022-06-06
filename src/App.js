import React from 'react';
import { Routes, Route } from 'react-router-dom'
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    
    
  );
}

export default App;
